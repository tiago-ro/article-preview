"use strict"

const c1 = document.querySelector("#button")
const c2 = document.querySelector("#button2")
     
window.addEventListener("resize",()=>{
     location.reload()   
})

if(window.innerWidth < 624){
     
     c1.addEventListener('focus',()=>{
          document.querySelector("#cont").style.display = "none"
          document.querySelector("#menu").style.display = "grid"
          document.querySelector("#button2").focus()
     })

     c2.addEventListener('blur',()=>{
          setTimeout(()=>{
               document.querySelector("#cont").style.display = "grid"
               document.querySelector("#menu").style.display = "none"
          },100)
     })
     
  } else{
     c1.addEventListener('focus',()=>{
       document.querySelector("#menu").style.visibility = "visible"
       document.querySelector("#button").style.background = "hsl(217, 19%, 35%)"
       document.querySelector("#path").style.fill = "white"
     })
     
     c1.addEventListener('blur',()=>setTimeout(()=>{
               document.querySelector("#menu").style.visibility = "hidden"
               document.querySelector("#button").style.background = "hsl(210, 46%, 95%)"
               document.querySelector("#path").style.fill = "hsl(2014, 17%, 51%)"
          },100)
     )
     
     
     

}    



