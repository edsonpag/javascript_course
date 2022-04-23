const API_KEY = "AIzaSyAyb8Vl__aogl7zEoUl0-FTyLKrrmm1wu4"
const API_URL = "https://www.googleapis.com/books/v1/volumes"




axios.get('https://www.googleapis.com/books/v1/volumes?q=javascript&key=AIzaSyAyb8Vl__aogl7zEoUl0-FTyLKrrmm1wu4')
.then((response) => {
    console.log(response)
})