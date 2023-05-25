/**
 * Formas de importar o Axios para que o código possa ser
 * executado no NodeJS. Para que o código seja executado
 * no browser, basta remover o import
 */
// const axios = require('axios'); // Forma de importar o Axios
// import axios from "axios"; // Outra forma de importar o axios
// const axios = require('axios').default; // Forma de importar o Axios com preenchimento automático

/**
 * Requisição GET
 */

// const url = 'http://localhost:8081/funcionario'

// //Versão 1
// /* Faz uma requisição a um usuarío com um ID expecifico */
// axios.get(url + '/3107083')
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   })
//   .finally(function () {
//   });

//Versão 2
/* Opcionalmente a requisição acima poderia ser feita assim da seguinte forma */
// axios.get(url + '/3107083', {
//     // params: {
//     //     numCadastro: 3107083 // Opcional para Query params
//     // }
//   })
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   })
//   .finally(function () {
//     // sempre será executado
//   });  

//Versão 3
/* Quer usar async/await? Adicione o prefixo `async` na sua função/método */
// async function getUser() {
//   try {
//     const response = await axios.get(url + '/3107083');
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// }
// const data = getUser()

/**
 * 
 * Requisição POST
 */

const urlAuth = 'http://localhost:8087/api/user/authenticate'

// Exemplo login
// axios.post(urlAuth, {
//     email: "admin@gmail.com",
//     password: "adminPassword"
// })
//     .then(function (response) {
//         console.log(response.data)
//     })
//     .catch(function (error) {
//         console.log(error)
//     })

// Exemplo de função login (para uso no cliente web)
function login() {
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    axios.post(urlAuth, {
        email: email,
        password: password
    })
        .then(function (response) {
            console.log("Response:", response.data)
        })
        .then(function (data) {
            console.log("Data:", data)
        })
        .catch(function (error) {
            console.log(error)
        })
}


