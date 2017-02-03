var myImage = document.querySelector('img');

//myImage.onclick = function(){
//  var mySrc = myImage.getAttribute('src');
//  if(mySrc === 'images/dinosaur.JPG'){
//    myImage.setAttribute ('src','images/dinosaur2.png');
//  } else {
//    myImage.setAttribute('src','images/dinosaur.JPG');
//  }
//}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
  var myName = prompt('Please enter your name');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Youre a dick, ' + myName;
}

if(!localStorage.getItem('name')){
  setUserName();
}else{
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Youre a dick ' + storedName;
}

myButton.onclick = function(){
  setUserName();
}
