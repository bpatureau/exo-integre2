<template>
  <div class="about">
    <NewCategorie @add-categorie="addCategorie"></NewCategorie>
  </div>
</template>

<script>
import NewCategorie from "@/components/NewCategorie.vue"
import service from "@/service/service.js"
export default ({
name: "CreateCategorie",
data() {
  return {
    newCategorie: {
      name:"ahah",
      uid:""
    }
  }
},
methods: {
    addCategorie(newCategorie) {
    service.addCategorie(newCategorie)
    .then(response => {
      service.addKeyToCategorie(response)
      .then(response => console.log(response))
      .catch(error => console.log(error))
      })
    .catch(error => console.log(error))
  }
},
components:{
  NewCategorie
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
