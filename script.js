// Making the navbar responsive
document.addEventListener('DOMContentLoaded', function() {
    var currentYear = new Date().getFullYear();
    document.getElementById('copyright-year').textContent = currentYear;
});

const bar = document.getElementById('bar');
const nav = document.getElementById("navbar");
const close = document.getElementById('close')

if (bar){
    bar.addEventListener("click", ()=>{
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active')
    })
}


// Changing the images in the products page
var MainImage = document.getElementById('MainImg')
var smallImage = document.getElementsByClassName('small-img')

smallImage[0].onclick = function(){
    MainImage.src = smallImage[0].src
}

smallImage[1].onclick = function(){
    MainImage.src = smallImage[1].src
}

smallImage[2].onclick = function(){
    MainImage.src = smallImage[2].src
}

smallImage[3].onclick = function(){
    MainImage.src = smallImage[3].src
}