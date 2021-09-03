<template>
  <div class="about">
    <NewEvent :qui="categories"></NewEvent>
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

