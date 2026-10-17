var close=document.getElementById("close")
var offer=document.getElementById("offer")
close.addEventListener("click",function(){
offer.style.display="none";
close.style.display="none";
})

let images = ["./images/summer1.jpg", "./images/summer2.jpg", "./images/summer3.jpg"];
let currentIndex = 0;
function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    document.getElementById("bannerImage").src = images[currentIndex];
}
function previousImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    document.getElementById("bannerImage").src = images[currentIndex];
}