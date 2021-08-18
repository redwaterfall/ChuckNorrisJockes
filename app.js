let button = document.querySelector('button');
let jockBox = document.querySelector('.jockContainer')
button.addEventListener('click',async function(){
    console.log('click')
    getRandomJock()
})

function getRandomJock(){

    fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(data =>{ console.log(data.value)
                jockBox.innerHTML =  data.value;
                });
  
}
