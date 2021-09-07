<template>
  <div class="home">
    <form @submit.prevent="addCategorie(newCategorie)" action="">
      <label for="name">name</label>
      <input name="name" v-model.lazy.trim="newCategorie.name" type="text">
      <button>créer</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'NewCategorie',
  props: {
    
  },
  data() {
    return{
      newCategorie: {
      name:"ahah",
      uid:""
    }
    }
  },
  methods:{
  addCategorie(newCategorie) {
    this.$emit("add-categorie", newCategorie)
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>