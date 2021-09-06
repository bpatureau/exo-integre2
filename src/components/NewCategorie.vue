<template>
  <div class="home">
    <form @submit.prevent="addCategorie" action="">
      <label for="name">name</label>
      <input name="name" v-model.lazy.trim="newCategorie.name" type="text">
      <button>créer</button>
    </form>
  </div>
</template>

<script>
import service from '@/service/service.js'
import uniqid from "uniqid"
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
  addCategorie() {
    this.newCategorie.uid = uniqid()
    service.addCategorie(this.newCategorie)
    .then(response => {
      service.addKeyToCategorie(response)
      .then(response => console.log(response))
      .catch(error => console.log(error))
      })
    .catch(error => console.log(error))
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>