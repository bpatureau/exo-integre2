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
  
  addEvent(newEvent) {
    console.log(newEvent)
    newEvent = {
      fields: {
        nom: {
          stringValue: newEvent.nom
        },
        description: {
          stringValue: newEvent.desc
        },
        categorie: {
          stringValue: newEvent.categorie
        },
        favori: {
          booleanValue: false
        },
        prix: {
          doubleValue: parseInt(newEvent.prix)
        },
        date: {
          timestampValue: new Date().getTime()
        },
        user: {
          stringValue: "d7IzilBQRVeitMBULTwy"
        }
      }
}   
    return Axios({
      url: url + "projects/exointegrebp/databases/(default)/documents/event",
      method: "post",
      data: newEvent
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
  getEvent() {
    return Axios({
      url: url  + "projects/exointegrebp/databases/(default)/documents/event",
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