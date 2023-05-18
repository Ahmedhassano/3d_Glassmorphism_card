let card = document.querySelector(".card")
let wrapper_card = document.querySelector(".wrapper_card")
let { left: card_left, top: card_top ,width,height} = wrapper_card.getBoundingClientRect();
let posx,posy,rotx,roty
window.addEventListener("mousemove",function (e) {
     posx = e.clientX -card_left
    posy = e.clientY - card_top
    rotx = Math.floor(posx) - (width / 2);
    roty = Math.floor(posy) - (height / 2)
    console.log(rotx,roty);
})
card.addEventListener("mousemove", _ => {
    card.style.transform = `rotatex(${roty * 0.2}deg) rotatey(${rotx* 0.2}deg)`;
   
    
})
card.addEventListener("mouseleave", _ => {
    card.style.transform = ``;
  
    
})