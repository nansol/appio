
let sliderImages = document.querySelectorAll('.slide');
let leftIcon = document.querySelector('left-icon');
let rightIcon = document.querySelector('right-icon');
let current = 0;

function reset(){
    for (let i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
    }
}

function startSlide(){
    reset();
    sliderImages[0].style.display = 'block';
}

function slideLeft(){
    reset();
    sliderImages[current -1].style.display = 'block';
    current--;
}

leftIcon.addEventListener('click', function(){
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
})
 


startSlide();






