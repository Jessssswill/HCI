// Array of image filenames
const images = [
    "assets/calya 2.png",
  "assets/depan.png",
  "assets/samping.png",
  "assets/belakang.png",
  "assets/samping kiri.png"
];

let currentIndex = 0;


const imageElement = document.querySelector(".calya-2-icon");


document.querySelector(".right-arrow-1-icon").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  imageElement.src = images[currentIndex];
});


document.querySelector(".right-arrow-2-icon").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  imageElement.src = images[currentIndex];
});
