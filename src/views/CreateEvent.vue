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
            service.addKeyToEvent(response)
            .then(
              response => {
            this.contacts = response
            }
            )

          }
        )
        .catch(error => console.log(error))
    },

},
created() {
      service.getCategorie()
        .then(
          response => {
            this.categories = response
          }
        )
        .catch(error => console.log(error))
},
components:{
  NewEvent
}
})
</script>
<style>
  form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .form-input{
    width: 50%;
  }
</style>
