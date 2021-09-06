<template>
  <div class="home">
      <ul v-if="!switchToEvent">
        <ListeCategorie  v-for="(categorie, keyIndex) in categories" @show-event="showEvent" :key="keyIndex" :qui="categorie"></ListeCategorie>
      </ul>
      <div v-else-if="!switchInEvent">
        <button @click.prevent="switchToEvent=false">back</button>
        <ul>
          <ListeEvent  v-for="(event, keyIndex) in events" @show-inside-event="showInsideEvent" :key="keyIndex" :qui="event"></ListeEvent>
        </ul>
        <button @click.prevent="createEvent()">créer une nouvelle entrée</button>
      </div>
      <div v-else>
        <SingleEvent :qui="this.soloEvent"></SingleEvent>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ListeCategorie from '@/components/ListeCategorie.vue'
import ListeEvent from '@/components/ListeEvent.vue'
import SingleEvent from '@/components/SingleEvent.vue'
import service from '@/service/service.js'
export default {
  name: 'Home',
  data() {
    return{
      categories:[],
      switchToEvent: false,
      switchInEvent: false,
      categorieActuelle: "",
      eventActuel:"",
      idEvent: "",
      events:[],
      soloEvent: {}
    }
  },
  methods: {
    showCategorie() {
      service.getCategorie()
        .then(
          response => {
            this.categories = response
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
      }
      )
      

    },
    showInsideEvent(cible) {
      this.switchInEvent = true
      service.getOneEvent(cible)
      .then(response =>  this.soloEvent = response)
      .then( console.log(this.soloEvent))
      .catch(error => console.log(error))
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
    ListeEvent,
    SingleEvent
  }
}
</script>
