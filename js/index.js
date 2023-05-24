//Fornece preenchimento automático e tipagem de parâmetros
// const axios = require('axios').default;

/**
 * Requisição GET
 */

const axios = require('axios');

const url = 'http://localhost:8081/funcionario'

//Versão 1
/* Faz uma requisição a um usuarío com um ID expecifico */
axios.get(url + '/3107083')
  .then(function (response) {
    // manipula o sucesso da requisição
    console.log(response.data);
  })
  .catch(function (error) {
    // manipula erros da requisição
    console.error(error);
  })
  .finally(function () {
    // sempre será executado
  });

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