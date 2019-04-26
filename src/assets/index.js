
let sliderImages = document.querySelectorAll('.slide');
let left = document.getElementById('left');
let right = document.getElementById('right');
let current = 0;



window.onload= function (){
  function reset() {
      for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
      }
    }
    
    function startSlide() {
      reset();
      sliderImages[0].style.display = "block";
    }
    
    function slideLeft() {
      reset();
      sliderImages[current - 1].style.display = "block";
      current--;
    }
    
    function slideRight() {
      reset();
      sliderImages[current + 1].style.display = "block";
      current++;
    }
    
   left.addEventListener("click", function() {
      if (current === 0) {
        current = sliderImages.length;
      }
      slideLeft();
    }); 
    
    right.addEventListener("click", function() {
      if (current === sliderImages.length - 1) {
        current = -1;
      }
      slideRight();
    });
    
    startSlide();    }

  


