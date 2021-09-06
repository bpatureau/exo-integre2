<template>
    <li ><button @click.prevent="showEvent(qui.fields.uid.stringValue)" href="">{{qui.fields.nom.stringValue}}</button> </li>
</template>

<script>
export default {
  name: 'ListeEvent',
  props: {
    qui: Object
  },
  data() {
    return{
    }
  },
  methods:{
    showEvent(cible) {
      this.$emit("show-inside-event", cible)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
