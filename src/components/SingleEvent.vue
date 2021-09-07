<template>
<div v-if="!editorOpen">
  <button @click="openEditor">edit</button><button @click="closeEvent">back</button>
  <h2>{{qui.fields.nom.stringValue}}</h2>
  <p>{{qui.createTime}}</p>
  <p>{{qui.fields.description.stringValue}}</p>
  <p>{{qui.fields.prix.doubleValue}}€</p>
</div>
<div v-else>
  <Editor :qui="this.qui" :categories="this.categories" @edit-event="editEvent"></Editor>
</div>

</template>

<script>

import Editor from '@/components/Editor.vue'
export default {
  name: 'SingleEvent',
  props: {
    qui: Object,
    categories: Array
  },
  data() {
    return{
      editorOpen: false
    }
  },
  components: {
    Editor
  },
  methods:{
    openEditor(){
      this.editorOpen = true 
    },
    editEvent(edition, emplacement){
      this.$emit("edit-event", edition, emplacement)
    },
    closeEvent(){
      this.$emit("close-event")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
