function changeWidth(){
  var newWidth = document.getElementById("widthB").value;
  w = newWidth.toString();
  w = w +"px";

  document.getElementById("dummyText").style.borderWidth = w;
}

function changeColorB(){
  var red = document.getElementById("redB").value;
  var green = document.getElementById("greenB").value;
  var blue = document.getElementById("blueB").value;

  document.getElementById("dummyText").style.borderColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
}

function changeColorBG(){
  var red = document.getElementById("redBG").value;
  var green = document.getElementById("greenBG").value;
  var blue = document.getElementById("blueBG").value;

  document.getElementById("dummyText").style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
}

function update(){
  changeWidth();
  changeColorB();
  changeColorBG();
}
