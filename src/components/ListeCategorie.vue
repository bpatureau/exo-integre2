<template>
    <li ><button @click.prevent="showEvent(qui.fields.uid.stringValue)" href="">{{qui.fields.nom.stringValue}}</button> <button class="button_delete" @click="deleteCategorie(qui.fields.uid.stringValue)">✖</button> </li>
</template>

<script>
export default {
  name: 'ListeCategorie',
  props: {
    qui: Object
  },
  data() {
    return{
    }
  },
  methods:{
    showEvent(cible) {
      this.$emit("show-event", cible)
    },
    deleteCategorie(cible){
      this.$emit("delete-categorie", cible)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
