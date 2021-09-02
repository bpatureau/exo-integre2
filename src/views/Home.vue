<template>
  <div class="home">
    <ListeCategorie v-for="(categorie, keyIndex) in categories" :key="keyIndex" :qui="categorie"></ListeCategorie>
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
      categories:[]
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
    }
  },
  created() {
    this.showCategorie()
    .then(response => this.categories = response)
    .catch(error => console.log(error))
  },
  components: {
    ListeCategorie
  }
}
</script>
