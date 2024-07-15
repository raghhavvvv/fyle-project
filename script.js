document.addEventListener('DOMContentLoaded', function() {
    let slides = document.querySelectorAll('#wwd-slider .slide');
    let currentSlide = 0;
    const slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
  
    function nextSlide() {
      slides[currentSlide].className = 'slide';
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].className = 'slide active';
    }
  });
function changeImage(imageSrc, element) {
  document.getElementById('displayImage').src = imageSrc;
  let rows = document.querySelectorAll('.row');
  rows.forEach(row => {
    row.classList.remove('active');
  });
  element.classList.add('active');
}
function moveSlide(slideIndex) {
  const slideWidth = document.querySelector('.carousel-container').offsetWidth;
  const slideMove = slideIndex * slideWidth;
  document.querySelector('.carousel-slide').style.transform = `translateX(-${slideMove}px)`;
}

// Initialize the carousel to show the first image
moveSlide(0);