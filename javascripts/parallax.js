console.log("Hello!");
let wallpaper = document.getElementsByClassName("wallpaper");
let bottomLayer = document.getElementById("Bottomlayer");
let midLayer = document.getElementById("Middlelayer");
let topLayer = document.getElementById("Toplayer");


wallpaper[0].addEventListener("mousemove", function (mouse) {
    sekwvalue =  `skew(${mouse.offsetX*0.1}deg, ${mouse.offsetY*0.1}deg);`;

    bottomLayer.style.transform =sekwvalue.toString();
    console.log(`skew(${Math.floor((mouse.offsetX*0.1))}deg, ${Math.floor((mouse.offsetY*0.1))}deg);`);
});
