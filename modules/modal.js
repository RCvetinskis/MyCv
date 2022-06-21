"use strict"
const openModal = document.querySelectorAll(".openModal")
const closeModal = document.querySelector(".close")
const modal = document.querySelector(".modal")

openModal.forEach(x=>x.onclick=()=>{
    modal.style.display = "block";
})
closeModal.onclick=()=>{
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

export {openModal}