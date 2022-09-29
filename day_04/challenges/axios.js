const { default: axios } = require("axios");

axios.get('https://pokeapi.co/api/v2/pokemon/gengar')
.then(response => {
    console.log(response.data);
})
.catch(error => {
    console.log(error);
})
