var heighInput = document.querySelector(".height-input-field");
var weightInput = document.querySelector(".weight-input-field");
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var BMI, height, weight;

function myFunction(){
    height = heighInput.value;
    weight = weightInput.value;
    BMI = weight*height;
    alert("Luas persegi panjang adalah :" + BMI);
}