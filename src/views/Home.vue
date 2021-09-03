<template>
  <div class="home">
      <ul v-if="!switchToEvent">
        <ListeCategorie  v-for="(categorie, keyIndex) in categories" @showEvent="showEvent" :key="keyIndex" :qui="categorie"></ListeCategorie>
      </ul>
      <ul v-else>
        <ListeCategorie  v-for="(event, keyIndex) in events" :key="keyIndex" :qui="event"></ListeCategorie>
      </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import ListeCategorie from '@/components/ListeCategorie.vue'
import service from '@/service/service.js'
export default {
  name: 'Home',
  data() {
    return{
      categories:[],
      switchToEvent: false,
      idEvent: "",
      events:[]
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
    showEvent(cible) {
      console.log(cible)
      service.getEvent(cible) 
      .then(response => console.log(response))
    }
  },
  created() {
    this.showCategorie()
  },
  components: {
    ListeCategorie
  }
}
</script>
