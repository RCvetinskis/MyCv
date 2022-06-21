"use strict"
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
// navbar html
const aboutMe = document.querySelectorAll(".aboutMe")
const gitHub = document.querySelectorAll(".gitHub")
const skills = document.querySelectorAll(".skills")

let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
prev.onclick=(e)=>{
    plusSlides(-1)
   
}
next.onclick=(e)=>{
    plusSlides(1)
   
 
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
 
}
// navbar linked to sidebar
aboutMe.forEach(x=>x.onclick=()=>{
  plusSlides(slideIndex = 2)
})

gitHub.forEach(x=>x.onclick=()=>{
  plusSlides(slideIndex = 1)
})
skills.forEach(x=>x.onclick=()=>{
  plusSlides(slideIndex = 0)
})



export {plusSlides, currentSlide, showSlides, slideIndex}
