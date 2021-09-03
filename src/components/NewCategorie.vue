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

export default {
  name: 'NewEvent',
  props: {
    
  },
  data() {
    return{
      newEvent: {
        nom: "",
        date: Date.now(),
        desc: "", 
        prix: "",
        categorie: ""

      },
      contact:[]
    }
  },
  methods:{
    soumettre() {
      service.getEvent()
        .then(
          response => {
            this.contacts = response
            console.log(this.contacts)
          }
        )
        .catch(error => console.log(error))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>