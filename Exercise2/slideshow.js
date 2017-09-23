function prevPic(){
  setSlides();

  if(x > 0){
    document.getElementById("slideImage").src = slides[x-1];
    x--;
  }
  else{
    x = 4;
    document.getElementById("slideImage").src = slides[x];
  }
}

function nextPic(){
  setSlides();

  if(x < 4){
    document.getElementById("slideImage").src = slides[x+1];
    x++;
  }
  else{
    x = 0;
    document.getElementById("slideImage").src = slides[x];
  }
}

function setSlides(){
  slides[0] = "orange.png";
  slides[1] = "cherry.png";
  slides[2] = "banana.png";
  slides[3] = "kiwi.png";
  slides[4] = "peach.png";
}

var x = 2;
var slides = [];
