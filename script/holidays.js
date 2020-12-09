var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("fade");
  //uzima i tačke kojima je class="dot" i tačke kojima je class="dot active"
  var dots = document.getElementsByClassName("dot");
  //ako se nalazimo na poslednjem slajdu i kliknemo desnu strelicu, vratićemo se na prvi slajd
  if (n > slides.length) {slideIndex = 1}   
  //ako se nalazimo na prvom slajdu i kliknemo lijevu strelicu, odvešće nas na poslednji slajd 
  if (n < 1) {slideIndex = slides.length}
  //prodji kroz sve slajdove i sakrij ih
  for (i = 0; i < slides.length; i++) {
    //display:none sakriva element
      slides[i].style.display = "none";  
  }
  // podesi nazive klasa svih tačaka na "dot"
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  //prikaži traženi slajd tako da ništa ne može biti prikazano sa njegove desne ili lijeve strane (display:block)
  slides[slideIndex-1].style.display = "block";  
  //promijeni naziv klase tačke koja se odnosi na prikazani slajd u "dot active"
  dots[slideIndex-1].className += " active";
}
