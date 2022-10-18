let btnOff = document.querySelector("#btn_off");
let btnOn = document.querySelector("#btn_on");
let lightImg = document.querySelector("#images");

btnOff.addEventListener("click",function(){
    lightImg.src = "images/light_off.png";
    btnOff.style.background = "red";
    btnOn.style.background = "white"
});

btnOn.addEventListener("click",function(){
    lightImg.src = "images/light-on.png";
    btnOn.style.background = "green";
    btnOff.style.background = "white";
})