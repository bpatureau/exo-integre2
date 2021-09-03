<template>
  <div class="about">
    <NewCategorie></NewCategorie>
  </div>
</template>

<script>
import NewCategorie from "@/components/NewCategorie.vue"
export default ({
name: "CreateCategorie",
data() {
  return {
    newCategorie: {
      name:"ahah",
      uid:""
    }
  }
},
methods: {

},
components:{
  NewCategorie
}
})
</script>

