<template>
<div>
    <form action="" @submit.prevent="edit(editedEvent, emplacement)">
      <label for="name">name</label>
      <input name="name" v-model="editedEvent.fields.nom" type="text">
      <label for="desc">description</label>
      <input name="desc" v-model="editedEvent.fields.description" type="text">
      <label for="prix">prix</label>
      <input name="prix" v-model="editedEvent.fields.prix" type="text">
       <label for="categorie">categorie</label>
        <select name="categorie" v-model="editedEvent.fields.categorie" id="">
        <option v-for="(categorie, keyIndex) in categories" :value="categorie.fields.uid.stringValue" :key="keyIndex" >{{categorie.fields.nom.stringValue}}</option>
      </select>
      <button>créer</button>
    </form>
</div>

</template>

<script>
export default {
  name: 'editorEvent',
  props: {
    qui: Object,
    categories: Array
  },
  data() {
    return{
      emplacement: this.qui.name,
      editedEvent: {
        fields:{
          nom: this.qui.fields.nom.stringValue,
          prix: this.qui.fields.prix.doubleValue,
          categorie: this.qui.fields.categorie.stringValue,
          description: this.qui.fields.description.stringValue
        }
      }
    }
  },
  methods:{
    openEditor(){
      console.log(this.qui.createTime)
      this.editorOpen = true 
    },
    edit(edition, emplacement) {
      this.$emit("edit-event", edition, emplacement)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
