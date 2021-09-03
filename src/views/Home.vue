<template>
  <div class="home">
      <ul v-if="!switchToEvent">
        <ListeCategorie  v-for="(categorie, keyIndex) in categories" @show-event="showEvent" :key="keyIndex" :qui="categorie"></ListeCategorie>
      </ul>
      <div v-else>
        <button @click.prevent="switchToEvent=false">back</button>
        <ul>
          <ListeEvent  v-for="(event, keyIndex) in events" :key="keyIndex" :qui="event"></ListeEvent>
        </ul>
        <button @click.prevent="createEvent()">créer une nouvelle entrée</button>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ListeCategorie from '@/components/ListeCategorie.vue'
import ListeEvent from '@/components/ListeEvent.vue'
import service from '@/service/service.js'
export default {
  name: 'Home',
  data() {
    return{
      categories:[],
      switchToEvent: false,
      categorieActuelle: "",
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
      service.getEvent() 
      .then(response => 
      {
      this.events= response.filter(event => event.fields.categorie.stringValue === cible)
      this.switchToEvent = true
      this.categorieActuelle = cible
      console.log("catégorie actuelle: " + this.categorieActuelle)
      }
      )
      
      console.log(cible)

    },
    createEvent() {
      this.switchToCreateEvent = true
    }
  },
  created() {
    this.showCategorie()
  },
  components: {
    ListeCategorie,
    ListeEvent
  }
}
</script>
