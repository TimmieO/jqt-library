function setAnimations(animation, duration, element){
  switch(animation){
    case "ease-in":
    {
      jqtEaseIn(element, duration)
      break;
    }
    case "float-up":
    {
      jqtFloatUp(element, duration);
      break;
    }
  }
}
function jqtEaseIn(element, duration){
  element.animate({
    opacity: [0,1],
  }, duration * 1000);

}
function jqtFloatUp(element, duration){
  element.animate([
    { transform: 'translateY(5vh)' },
    { transform: 'translateY(0)' }
  ], {
    // timing options
    duration: duration * 1000,
  });
}
