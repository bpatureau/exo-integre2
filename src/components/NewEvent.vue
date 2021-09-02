<template>
  <div class="home">
    <form action="" @submit.prevent="soumettre">
      <label for="name">name</label>
      <input name="name" v-model="newEvent.nom" type="text">
      <input name="date" v-model="newEvent.date" value="" type="hidden">
      <label for="desc">description</label>
      <input name="desc" v-model="newEvent.desc" type="text">
      <label for="prix">prix</label>
      <input name="prix" v-model="newEvent.prix" type="text">
       <label for="categorie">categorie</label>
        <select name="categorie" v-model="newEvent.categorie" id="">
        <option value="fruits">fruits</option>
        <option value="légumes">légumes</option>
      </select>
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
