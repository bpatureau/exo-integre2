<template>
    <li ><button @click.prevent="showEvent(qui.fields.uid.stringValue)" href="">{{qui.fields.nom.stringValue}}</button> </li>
</template>

<script>
export default {
  name: 'ListeCategorie',
  props: {
    qui: Object
  },
  data() {
    return{
      categories:[],
      switchToEvent: false,
      event:[]
    }
  },
  methods:{
    showEvent(cible) {
      this.$emit("Home", cible)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
