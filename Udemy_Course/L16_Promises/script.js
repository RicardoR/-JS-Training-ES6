promise = new Promise((resolve, reject) => {
  console.log('Promesa invocada!!');
  setTimeout(() => {
    resolve();
  }, 3000);

});

promise
  .then(() => console.log('Terminada ok'))
  .then(() => console.log(promise))
  .catch(() => console.log('Algo no salio bien'))



/* ========================================================================== */

  urlOK = "https://jsonplaceholder.typicode.com/posts/";

  fetch(urlOK)
    .then(data => console.log(data))
    .then(response => response.json())
    .then(data => console.log(data))


/* ========================================================================== */

urlKO = "https://jsonplaceholder.typicode.com/posts123455/";

fetch(urlKO)
  .then(data => console.log(data))
  .catch(error => console.log('BAD', error))
