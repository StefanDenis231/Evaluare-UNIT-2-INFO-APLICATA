var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
  document.getElementById('imag1').style.display = "none";
  document.getElementById('imag2').style.display = "none";
  document.getElementById('imag3').style.display = "none";
  document.getElementById('imag4').style.display = "none";
  document.getElementById('imag5').style.display = "none";
  document.getElementById('imag6').style.display = "none";
}