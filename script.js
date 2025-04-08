/*MODAL*/
const reyna=document.getElementById("reyna");
const modal=document.getElementById("modal");
const cerrar=document.getElementById("cerrar");

reyna.addEventListener("click",()=>{
    modal.classList.add("ver-modal");
})
    cerrar.addEventListener("click",()=>{
    modal.classList.remove("ver-modal");
})

const omen=document.getElementById("omen");
const modal1=document.getElementById("modal1");
const cerrar1=document.getElementById("cerrar1");

    omen.addEventListener("click",()=>{
    modal1.classList.add("ver-modal");
})
    cerrar1.addEventListener("click",()=>{
    modal1.classList.remove("ver-modal");
})

const neon=document.getElementById("neon");
const modal2=document.getElementById("modal2");
const cerrar2=document.getElementById("cerrar2");

    neon.addEventListener("click",()=>{
    modal2.classList.add("ver-modal");
})
    cerrar2.addEventListener("click",()=>{
    modal2.classList.remove("ver-modal");
})

const ver=document.getElementById("ver");
const modal3=document.getElementById("modal3");
const cerrar3=document.getElementById("cerrar3");
ver.addEventListener("click",()=>{
    modal3.classList.add("ver-modal");
})
    cerrar3.addEventListener("click",()=>{
    modal3.classList.remove("ver-modal");
})
