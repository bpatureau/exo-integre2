import Axios from 'axios'
const  url = "https://firestore.googleapis.com/v1/"

export default {
  addCategorie(newCategorie) {
    newCategorie = {
    fields: {
        nom: {
          stringValue: newCategorie.name
        },
        uid: {
          stringValue: ""
        }
    }
}   
    return Axios({
      url: url + "projects/exointegrebp/databases/(default)/documents/categorie",
      method: "post",
      data: newCategorie
    })
    .then(response => response.data)
  },
  addKey(cible) {
    console.log(cible.name)
   const categorieWithKey = {
    fields: {
        nom: {
          stringValue: cible.fields.nom.stringValue
        },
        uid: {
          stringValue: cible.name
        }
    }
}     
    return Axios({
      url: url + cible.name,
      method: "patch",
      data: categorieWithKey,
    })
  },
  getEvent(id) {
    console.log("oui")
    return Axios({
      url: url  + id,
      method: "get"
    })
    .then(response => response.data.documents)
  },
  getCategorie() {
    return Axios({
      url: url + "projects/exointegrebp/databases/(default)/documents/categorie",
      method: "get"
    })
    .then(response => response.data.documents)
  }
}