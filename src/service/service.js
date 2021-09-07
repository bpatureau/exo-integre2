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
    console.log("new event")
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
        },
        image: {
          stringValue: newEvent.image
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
        },
        image: {
          stringValue: cible.fields.image.stringValue
        }
    }
}     
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
  },
  uploadImage(event) {
    let data = new FormData()
    data.append('name', 'my-picture')
    data.append('file', event)
    let config = {
      header : {
        'Content-Type' : 'image/png'
      }
    }
    return Axios({
      url: url ,
      method: "put", 
      data,
      config}
    ).then(
      response => {
        console.log('image upload response > ', response)
      }
    )
  },
  deleteCategorie(cible) {
    return Axios({
      url: url + "projects/exointegrebp/databases/(default)/documents/event",
      method: "get"
    })
    .then(response => {
      const filteredArray = response.data.documents.filter(event => event.fields.categorie.stringValue === cible)
      filteredArray.forEach(element => {
          return Axios({
          url: url + element.name,
          method: "delete"
        })
      })

    })
    .then(response => {
      console.log(response)
      {
        return Axios({
          url: url + cible,
          method:"delete"
        })
      }
    })
  }
}