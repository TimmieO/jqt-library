function setAnimations(animation, duration, element){
  //Animations
  switch(animation){
    //Fade animations
    case "fade-in":
    {
      jqtFadeIn(element, duration);
      break;
    }
    case "fade-out":
    {
      jqtFadeOut(element,duration);
      break;
    }

    //Sliding animations
    case "slide-up":
    {
      jqtFloatUp(element, duration);
      break;
    }
    case "slide-down":
    {
      jqtFloatDown(element,duration);
      break;
    }
    case "slide-left":
    {
      jqtSlideLeft(element, duration);
      break;
    }
    case "slide-right":
    {
      jqtSlideRight(element, duration);
      break;
    }

    //Flying animations
    case "fly-in":
    {
      jqtFlyIn(element, duration);
      break;
    }
    case "fly-out":
    {
      jqtFlyOut(element, duration);
      break;
    }

    //Rotation animations
    case "rotate-360":
    {
      jqtRotate360(element, duration);
      break;
    }
    case "rotatex-360":
    {
      jqtRotateX360(element, duration);
      break;
    }
    case "rotatey-360":
    {
      jqtRotateY360(element, duration);
      break;
    }

    //Testing animations
    case "test":
    {
      element.animate([
        { transform: 'skew(180deg, 180deg)' }
      ], {
        // timing options
        duration: duration * 1000,
      });
      break;
    }
  }
}

//Animation functions
function jqtFadeIn(element, duration){
  element.animate({
    opacity: [0,1],
  }, duration * 1000);
}
function jqtFadeOut(element, duration){
  element.animate({
    opacity: [1,0],
  }, duration * 1000);
}

function jqtFloatDown(element, duration){
  element.animate([
    { transform: 'translateY(-5vh)' },
    { transform: 'translateY(0)' }
  ], {
    // timing options
    duration: duration * 1000,
  });
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

function jqtSlideLeft(element, duration){
  element.animate([
    { transform: 'translateX(100%)' },
    { transform: 'translateX(0)' }
  ], {
    // timing options
    duration: duration * 1000,
  });
}
function jqtSlideRight(element, duration){
  element.animate([
    { transform: 'translateX(-100%)' },
    { transform: 'translateX(0)' }
  ], {
    // timing options
    duration: duration * 1000,
  });
}

function jqtFlyIn(element, duration){
  element.animate([
    { transform: 'scale(0)' },
    { transform: 'scale(1)' }
  ], {
    // timing options
    duration: duration * 1000,
  });
}
function jqtFlyOut(element, duration){
  element.animate([
    { transform: 'scale(1)' },
    { transform: 'scale(0)' }
  ], {
    // timing options
    duration: duration * 1000,
  });
}

function jqtRotate360(element, duration){
  element.animate([
    { transform: 'rotate(360deg)' }
  ], {
    // timing options
    duration: duration * 1000,
  });
}
function jqtRotateX360(element, duration){
  element.animate([
    { transform: 'rotateX(360deg)' }
  ], {
    // timing options
    duration: duration * 1000,
  });
}
function jqtRotateY360(element, duration){
  element.animate([
    { transform: 'rotateX(360deg)' }
  ], {
    // timing options
    duration: duration * 1000,
  });
}