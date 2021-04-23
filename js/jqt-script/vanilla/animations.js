function setAnimations(animation, duration, element){
  switch(animation){
    case 0:
    case "fade-in": {
      element.style.opacity = 0;
      fadeIn(duration, element);
      break;
    }
    case 1:
    case "fade-out": {
      fadeOut(1, element)
      break;
    }
    case 2:
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
function fadeOut(duration, element){
  let opacity = 1;
  let fadeInterval = setInterval(function(){
    if(opacity > 0) {
      opacity = opacity - 0.1;
      element.style.opacity = opacity;
    }
    if(opacity <= 1){
      clearInterval(fadeInterval);
    }
  }, duration * 100)
}

//TODO-Fix float up
function floatUp(duration, element, elementHeight) {
  let height = 0;
  element.style.height = 0;
  let fadeInterval = setInterval(function () {
    if (height < 5) {
      height = height + 1;
      element.style.height = height + "vh";
    }
    if (height >= 100) {
      clearInterval(fadeInterval);
    }
  }, duration * 100)
}