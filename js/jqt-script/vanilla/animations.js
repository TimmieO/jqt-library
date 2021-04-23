function setAnimations(animation, duration, element){
  switch(animation){
    case 0:
    case "fade-in": {
      element.style.opacity = 0;
      fadeIn(duration, element);
      break;
    }
    case 1:
    case "float-up":{
      floatUp(duration, element)
    }
      break;
  }
}

function fadeIn(duration, element){
  let opacity = 0;
  let fadeInterval = setInterval(function(){
    if(opacity < 1) {
      opacity = opacity + 0.1;
      element.style.opacity = opacity;
    }
    if(opacity >= 1){
      clearInterval(fadeInterval);
    }
  }, duration * 100)
}
function floatUp(duration, element){
  element.style.height = 5 + "vh"
  element.style.transition = "height " + duration + "s ease-in";

}