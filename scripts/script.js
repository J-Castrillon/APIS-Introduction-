'use strict'; 

window.addEventListener('load',()=>{
    const apiDog = 'https://dog.ceo/api/breeds/image/random/ Fetch!'; 
    let image = document.querySelector('#image'); 
    let nameDog = document.querySelector('#nameDog'); 
    let button_like = document.querySelector('.button-like');
    let button_dislike = document.querySelector('.button-dislike'); 

    let dogs_array = []; 

    let ejecut = ()=>{
      fetch(apiDog)
      .then(data => {
        return data.json(); 
      })
      .then(dogs =>{
        dogs_array = dogs; 
        console.log(dogs_array.message); 
        image.src = dogs_array.message; 
        nameDog.innerHTML = dogs_array.message;
        nameDog.style = "font-weight: 600"; 
      })
    }

    ejecut(); 

    button_like.addEventListener('click', ()=>{
      ejecut(); 
      console.log("Estamos presionando algún botón");
    });
    
    button_dislike.addEventListener('click', ()=>{
      ejecut(); 
      console.log("Estamos presionando algún botón");
    });
}); 