<template>
  <div class="about">
    <NewEvent :qui="categories" @soumettre="soumettre" @upload-image="uploadImage"></NewEvent>
  </div>
</template>

<script>
import NewEvent from "@/components/NewEvent.vue"
import service from "@/service/service.js"
export default ({
name: "CreateCategorie",
data() {
  return {
    categories: [],
    newCategorie: {
      name:"ahah",
      uid:""
    }
  }
},
methods: {
    showCategorie() {
      service.getCategorie()
        .then(
          response => {
            this.categories = response
            console.log(this.categories)
          }
        )
        .catch(error => console.log(error))
    },
    soumettre(newEvent) {
      service.addEvent(newEvent)
        .then(
          response => {
            console.log(response)
            service.addKeyToEvent(response)
            .then(
              response => {
            this.contacts = response
            console.log(this.contacts)
            }
            )

          }
        )
        .catch(error => console.log(error))
    }
},
created() {
      service.getCategorie()
        .then(
          response => {
            this.categories = response
            console.log(this.categories)
          }
        )
        .catch(error => console.log(error))
},
components:{
  NewEvent
}
})
</script>

