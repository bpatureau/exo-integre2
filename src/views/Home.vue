<template>
  <div class="home">
      <ul v-if="!switchToEvent">
        <ListeCategorie  v-for="(categorie, keyIndex) in categories" @show-event="showEvent" :key="keyIndex" :qui="categorie"></ListeCategorie>
      </ul>
      <ul v-else>
        <ListeEvent  v-for="(event, keyIndex) in events" :key="keyIndex" :qui="event"></ListeEvent>
      </ul>
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
      }
      )
      
      console.log(cible)

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
