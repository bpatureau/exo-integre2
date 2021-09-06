<template>
  <div class="about">
    <ListeHistorique v-for="(event, keyIndex) in allHistorique" :qui="event" :key="keyIndex" ></ListeHistorique>
  </div>
</template>

<script>
import ListeHistorique from "@/components/ListeHistorique.vue"
import service from '@/service/service.js'
export default ({
name: "CreateCategorie",
data() {
  return {
    allHistorique: []
  }
},
methods: {

},
components:{
  ListeHistorique
},
created() {
  service.getEvent()
  .then(response =>  this.allHistorique = response.sort((a,b)=>a[createTime].localeCompare(b[createTime])))
  console.log(this.allHistorique)
}
})
</script>

