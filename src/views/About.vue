<template>
  <div class="about">
    <h1>créer une nouvelle catégorie</h1>
    <form @submit.prevent="addCategorie" action="">
      <label for="name">name</label>
      <input name="name" v-model.lazy.trim="newCategorie.name" type="text">
      <button>créer</button>
    </form>
  </div>
</template>

<script>
import uniqid from "uniqid"
import service from "@/service/service.js"
export default ({
name: "newCategorie",
data() {
  return {
    newCategorie: {
      name:"ahah",
      uid:""
    }
  }
},
methods: {
  addCategorie() {
    this.newCategorie.uid = uniqid()
    service.addCategorie(this.newCategorie)
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }
},
})
</script>

