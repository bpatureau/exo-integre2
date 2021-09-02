import Axios from 'axios'
const  url = "https://firestore.googleapis.com/v1/projects/exointegrebp/databases/(default)/documents/"

export default {
  addCategorie(newCategorie) {
    newCategorie = {
    fields:
      {nom:{stringValue:"légume"},
      uid:{stringValue:"taugyrihjklz"}
    }
}   
    console.log(newCategorie)
    return Axios({

      url: url + "categorie",
      method: "post",
      data: JSON.stringify(newCategorie)
    })
    .then(response => response.data)
  },
  getEvent() {
    return Axios({
      url: url  + "event",
      method: "get"
    })
    .then(response => response.data.documents)
  },
  getCategorie() {
    return Axios({
      url: url + "categorie",
      method: "get"
    })
    .then(response => response.data.documents)
  }
}