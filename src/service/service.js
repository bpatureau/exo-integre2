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
        user: {
          stringValue: "d7IzilBQRVeitMBULTwy"
        },
        uid: {
          stringValue: newEvent.uid
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
  
  addKeyToCategorie(cible) {
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
    addKeyToEvent(cible) {
      console.log("cible:")
      console.log(cible)
   const eventWithKey = {
    fields: {
        nom: {
          stringValue: cible.fields.nom.stringValue
        },
        uid: {
          stringValue: cible.name
        },
        description: {
          stringValue: cible.fields.description.stringValue
        },
        categorie: {
          stringValue: cible.fields.categorie.stringValue
        },
        favori: {
          booleanValue: false
        },
        prix: {
          doubleValue: parseInt(cible.fields.prix.doubleValue)
        },
        user: {
          stringValue: "d7IzilBQRVeitMBULTwy"
        }
    }
}   
  console.log(eventWithKey)  
    return Axios({
      url: url + cible.name,
      method: "patch",
      data: eventWithKey,
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
  },
  getOneEvent(cible) {
    return Axios({
      url: url + cible,
      method: "get"
    })
    .then(response => response.data)
  },
  editEvent(edition, cible) {
    console.log(cible)
    edition = {
        fields: {
            nom: {
              stringValue: edition.fields.nom
            },
            uid: {
              stringValue: cible
            },
            description: {
              stringValue: edition.fields.description
            },
            categorie: {
              stringValue: edition.fields.categorie
            },
            favori: {
              booleanValue: false
            },
            prix: {
              doubleValue: parseInt(edition.fields.prix)
            },
            user: {
              stringValue: "d7IzilBQRVeitMBULTwy"
            }
        }  
    }
    console.log()
    return Axios({
      url: url + cible,
      method: "patch",
      data: edition
    })
  },
  deleteEvent(cible) {
    return Axios({
      url: url + cible,
      method: "delete"
    })
  }
}