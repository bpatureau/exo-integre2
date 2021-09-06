<template>
<div>
  <h2>{{qui.fields.nom.stringValue}}</h2>
  <p>{{qui.createTime}}</p>
  <p>{{qui.fields.description.stringValue}}</p>
  <p>{{qui.fields.prix.doubleValue}}€</p>
</div>

</template>

<script>
export default {
  name: 'SingleEvent',
  props: {
    qui: Object
  },
  data() {
    return{
    }
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
