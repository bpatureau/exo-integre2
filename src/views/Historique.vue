<template>
  <div v-if="!switchInEvent" class="about">
    <ListeHistorique  v-for="(event, keyIndex) in allHistorique" @show-inside-event="showInsideEvent" :qui="event" :key="keyIndex" ></ListeHistorique>
  </div>
    <div v-else class="about">
      <SingleEvent :qui="this.soloEvent" :categories="this.categories"></SingleEvent>
  </div>
</template>

<script>
import ListeHistorique from "@/components/ListeHistorique.vue"
import SingleEvent from "@/components/SingleEvent.vue"
import service from '@/service/service.js'
export default ({
name: "CreateCategorie",
data() {
  return {
    allHistorique: [],
    switchInEvent: false,
    targetEvent:"",
    soloEvent: {},
    categories: []
  }
},
methods: {
    showInsideEvent(cible) {
      this.switchInEvent = true
      service.getOneEvent(cible)
      .then(response =>  this.soloEvent = response)
      .then( console.log(this.soloEvent))
      .catch(error => console.log(error))
    }
},
components:{
  ListeHistorique,
  SingleEvent
},
created() {
  service.getCategorie()
    .then(response => this.categories = response)
    .catch(error => console.log(error))
  service.getEvent()
  .then(response =>  this.allHistorique = response)
  .catch(error => console.log(error))
  console.log(this.allHistorique)
}
})
</script>

