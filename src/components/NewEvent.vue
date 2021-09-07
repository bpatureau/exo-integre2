<template>
  <div class="home">
    <form action="" @submit.prevent="soumettre(newEvent)">
      <label for="name">name</label>
      <input class="form-input" name="name" v-model="newEvent.nom" type="text">
      <label for="desc">description</label>
      <input class="form-input" name="desc" v-model="newEvent.desc" type="text">
      <label for="prix">prix</label>
      <input class="form-input" name="prix" v-model="newEvent.prix" type="text">
      <label for="image">image</label>
      <input class="form-input" type="file" accept="image/*" @change="uploadImage($event)" id="file-input">
       <label for="categorie">categorie</label>
        <select class="form-input" name="categorie" v-model="newEvent.categorie" id="">
        <option v-for="(categorie, keyIndex) in qui" :value="categorie.fields.uid.stringValue" :key="keyIndex" >{{categorie.fields.nom.stringValue}}</option>
      </select>
      <button>créer</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'NewEvent',
  props: {
    qui: Array
  },
  data() {
    return{
      newEvent: {
        nom: "",
        desc: "", 
        prix: "",
        categorie: "",
        uid:"",
        image:""
      },
      rawImg:"",
      reader:"",
      contact:[]
    }
  },
  created() {
    console.log(this.qui)
  },
  methods:{
    soumettre(newEvent) {

      this.$emit("soumettre", newEvent)
    },
    uploadImage(event){
      console.log(event)
    let file = event.target.files[0]
      this.reader = new FileReader()
      this.reader.onloadend = () => {
         this.newEvent.image = this.reader.result
        console.log("row image: ")
        console.log(this.newEvent.image)
      }
      this.reader.readAsDataURL(file)
      console.log("file: ")
      console.log(file)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
