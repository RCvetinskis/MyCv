"use strict"
import {burgerMenu} from "./modules/nav.js"
import {openModal} from "./modules/modal.js"
import  {plusSlides, currentSlide, showSlides,slideIndex} from "./modules/slider.js"
const userInfo = document.querySelector(".user-info")
const repos = document.querySelector("#repos")

burgerMenu()

// fetch for gitHub repositories
fetch("https://api.github.com/users/RCvetinskis")
.then( response =>{
 
  return response.json( );
})
.then( data =>{
    userInfo.innerHTML =
    `  
    <h2>${data.name}</h2>
    <p>${data.bio}</p>
    <ul>
      <li>${data.followers} <strong>Followers</strong></li>
      <li>${data.following} <strong>following</strong></li>
      <li>${data.public_repos} <strong>repos</strong></li>
    </ul>
    <p>My repositories:</p>
    
   
    
    `
});

 fetch("https://api.github.com/users/RCvetinskis/repos").then(response=>response.json())
.then(data=>{
    let reposSlice = data.slice(0,15)
    reposSlice.map(x=>{
    
  
    repos.innerHTML +=
    `
    <a class="repo" href="${x.html_url}" target="_blank">${x.name}</a>
    
    `
  
})

})








