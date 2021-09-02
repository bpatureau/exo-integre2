<template>
  <ul>
    <li><a href="">{{qui.fields.nom.stringValue}}</a> </li>
  </ul>
</template>

<script>
export default {
  name: 'NewEvent',
  props: {
    qui: Object
  },
  data() {
    return{
      categories:[]
    }
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
