"use strict"

const sideMenu = document.getElementById("side-menu");
const burger = document.getElementById("burger")

export function burgerMenu(){
    burger.addEventListener("click",function(){
        sideMenu.classList.toggle("translate")
        this.classList.toggle("rotate")
    })
    window.addEventListener("resize", function(){
        if(this.window.innerWidth>760)
        sideMenu.classList.remove("translate")
        burger.classList.remove("rotate")
    })
    
}


