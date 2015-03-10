console.log('Method called');
var myImage = document.querySelector("img");
console.log('Method called further');
myImage.onclick = function(){
  var mySrc = myImage.getAttribute('src');

  if(mySrc === 'images/firefox.png'){
    console.log('if');
    myImage.setAttribute('src','images/unnamed.png');
  }else{
    console.log('else');
    myImage.setAttribute('src','images/firefox.png');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
  var myName = promt('Please enter your name.');
  localStorage.setItem('name',myName);
  myheading.innerHTML = 'Mozilla is cool '+myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}