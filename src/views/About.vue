<template>
  <div class="about">
    <h1>créer une nouvelle catégorie</h1>
    <form @submit.prevent="addCategorie" action="">
      <label for="name">name</label>
      <input name="name" v-model="this.newCategorie.name" type="text">
      <button>créer</button>
    </form>
  </div>
</template>

<script>
export default ({
name: newCategorie,
data() {
  return {
    newCategorie: {
      name:"",
      uid:""
    }
  }
},
methods: {
  addCategorie() {
    this.newCategorie.uid = uniqid()
    
  }
},
})
</script>

