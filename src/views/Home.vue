<template>
  <div class="home">
      <ul v-if="!switchToEvent">
        <ListeCategorie  v-for="(categorie, keyIndex) in categories" @delete-categorie="deleteCategorie" @show-event="showEvent" :key="keyIndex" :qui="categorie"></ListeCategorie>
      </ul>
      <div class="home" v-else-if="!switchInEvent">
        <button @click.prevent="switchToEvent=false">back</button>
        <ul>
          <ListeEvent  v-for="(event, keyIndex) in events" @show-inside-event="showInsideEvent" @delete-event="deleteEvent" :key="keyIndex" :qui="event"></ListeEvent>
        </ul>
      </div>
      <div class="home" v-else>
        <SingleEvent :qui="this.soloEvent" :categories="this.categories" @edit-event="editEvent" @close-event="closeEvent"></SingleEvent>
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
      .catch(error => console.log(error))
      

    },
    deleteEvent(cible){
      service.deleteEvent(cible)
      .then(response => console.log(response))
      .catch(error => console.log(error))
    },
      editEvent(edition, emplacement) {
        service.editEvent(edition, emplacement)
        .then(response=> console.log(response))
        .catch(error => console.log(error))
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
    },
    closeEvent() {
      this.switchInEvent = false
    },
    deleteCategorie(cible) {
      service.deleteCategorie(cible)
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

<style>
  body {
    background: linear-gradient(138.13deg, #22343C 25.87%, #1F2E35 100%);
;
  }
  p, h2, label{
    color: white;
  }
  .button_delete{
    color: rgb(255, 0, 0);
  }
  .vignette{
    height: 30px;
    width: auto;
    border-radius: 2rem;
  }
  form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .form-input{
    width: 50%;
  }
</style>
