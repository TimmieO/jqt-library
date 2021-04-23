$.extend({
  messageBox:function(status, message, timer){
    let boxData = $.messageBoxDataHandler(status, message, timer); //Handle all input data
    $.messageBoxValidationHandler(); //Validate only 1 exist
    let elementData = $.messageBoxElementHandler(boxData); //Create all elements

    elementData.mainDiv.append(elementData.typeIconSpan, elementData.typeSpan, elementData.msgSpan, elementData.closeIconSpan);
    document.body.append(elementData.mainDiv);
    $.messageBoxClickHandler(elementData.closeIconSpan, elementData.mainDiv);

    if(boxData.timer != false){
      setTimeout(function(){
        elementData.mainDiv.remove();
      }, boxData.timer);
    }

    feather.replace();
  },
  messageBoxValidationHandler:function(){
    let getBox = document.querySelectorAll(".message-card-main");
    if(getBox.length > 0){
      getBox[0].remove();
    }
    return;
  },
  messageBoxElementHandler:function(boxData){
    let elementType = {
      mainDiv : "div",
      typeIconSpan: "span",
      typeIcon : "i",
      typeSpan : "span",
      msgSpan : "span",
      closeIconSpan: "span",
      closeIcon : "i"
    }
    let elements = {
      mainDiv : document.createElement(elementType.mainDiv),
      typeIconSpan : document.createElement(elementType.typeIconSpan),
      typeIcon :  document.createElement(elementType.typeIcon),
      typeSpan : document.createElement(elementType.typeSpan),
      msgSpan : document.createElement(elementType.msgSpan),
      closeIconSpan : document.createElement(elementType.closeIconSpan),
      closeIcon : document.createElement(elementType.closeIcon),
    };

    elements.mainDiv.classList.add("message-box-outer-container");
    elements.typeIconSpan.classList.add("message-box-close-span");
    elements.typeIcon.classList.add("message-card-type-icon");
    elements.typeSpan.classList.add("message-box-status-span");
    elements.msgSpan.classList.add("message-box-message-span");
    elements.closeIconSpan.classList.add("message-card-close-span");
    elements.closeIcon.classList.add("message-card-close");

    elements.mainDiv.style.backgroundColor = boxData.bgColor;
    elements.typeIcon.dataset.feather = boxData.typeIcon;
    elements.typeSpan.textContent = boxData.status + "!";
    elements.msgSpan.textContent = boxData.message;
    elements.closeIcon.dataset.feather = boxData.closeIcon;

    elements.typeIconSpan.append(elements.typeIcon);
    elements.closeIconSpan.append(elements.closeIcon);

    return elements;
  },
  messageBoxDataHandler:function(status, message, timer){
    //Finish the styling
    let statusTypeOf = typeof(status);
    let iconType = {
      success: "check-circle",
      error: "x-circle",
      failed: "alert-circle",
      close: "x"
    };
    let statusType = {
      success : "Success",
      error : "Error",
      failed : "Failed"
    };
    let bgColor = {
      success : "green",
      error : "red",
      failed: "gray"
    };

    let messageBoxData ={
      status : "",
      bgColor : "",
      message: message,
      typeIcon: "",
      closeIcon: iconType.close,
      timer: "",
    };

    if(message == undefined){
      messageBoxData.message = "No message found, please add a message in the params";
    }
    if(timer == undefined || timer == 0 || timer == false){
      messageBoxData.timer = false;
    }
    else{
      if(typeof(timer) != "number"){
        timer = 5;
      }
      messageBoxData.timer = timer * 1000;
    }

    if(statusTypeOf == "boolean"){
      switch(status){
        case true:
          messageBoxData.status = statusType.success;
          break;
        case false:
          messageBoxData.status = statusType.error;
          break;
        default:
          messageBoxData.status = statusType.failed;
          break;
      }
    }
    else if(statusTypeOf == "string"){
      switch(status){
        case "success":
          messageBoxData.status = statusType.success;
          break;
        case "error":
          messageBoxData.status = statusType.error;
          break;
        default:
          messageBoxData.status = statusType.failed;
          break;
      }
    }
    else if(statusTypeOf == "number"){
      switch(status){
        case 0:
          messageBoxData.status = statusType.error;
          break;
        case 1:
          messageBoxData.status = statusType.success;
          break;
        default:
          messageBoxData.status = statusType.failed;
          break;
      }
    }
    else{
      messageBoxData.status = statusType.failed;
    }
    if(messageBoxData.status == "Success"){
      messageBoxData.typeIcon = iconType.success;
      messageBoxData.bgColor = bgColor.success;
    }
    else if(messageBoxData.status == "Error"){
      messageBoxData.typeIcon = iconType.error;
      messageBoxData.bgColor = bgColor.error;
    }
    else if(messageBoxData.status == "Failed"){
      messageBoxData.typeIcon = iconType.failed;
      messageBoxData.bgColor = bgColor.failed;
    }

    return messageBoxData;
  },
  messageBoxClickHandler: function(closeBtn, mainDiv){
    closeBtn.onclick = function(){
      mainDiv.remove();
    }
  },
});