console.log("Welcome to The Recipe Journal!");

let images = [
    "images/lasagna.jpg",
    "images/lasagna1.jpg",
    "images/lasgna2.jpg"
];

let currentImage = 0;

function changeImage() {
    currentImage = (currentImage + 1) % images.length;

    document.getElementById("mainImage").src = images[currentImage];
}

function startCooking() {
    alert("Let's start cooking your delicious lasagna!");
}