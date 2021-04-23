/*Data to be included
- status
- text{
  -status: First text
  -message: Own text
}
- color{
  -cardBackground || cardBg: color of card,
  -statusColor: color of status text,
  -messageColor: color of message text,
}
- Animation:{
  -type(ease-in, fly up, etc)
  -duration
  }
- Time
 */

function messageBox(data){
  if(typeof(data) != 'object'){
    throw new TypeError('Params should be of type object')
  }
  if(data.status == undefined){
    throw new TypeError('data.status not defined')
  }
  if(data.color != undefined && typeof(data.color) != 'object'){
    throw new TypeError('data.color should be of type object')
  }
  if(data.text != undefined && typeof(data.text) != 'object'){
    throw new TypeError('data.text should be of type object')
  }
  if(data.animation != undefined && typeof(data.animation) != 'object'){
    throw new TypeError('data.animation should be of type object')
  }

  /*TODO-DONE
   - Add way to add controllers to box
   - Easier understanding of text, maybe put status as text
   */

  /*TODO-Add
  - Fix smoother animations
  - Fix better remove animation when max boxes
  - Fix smoother adding cards (Maybe not with flexbox)
  - Add icons using fontawesome
  - Add controller setting for user to choose whether they want to user the X controller, or set own in message
  - Add animation
  - Add "card" controller, to controll width, height, position, etc
  - Clear up in code, unwanted code gone
  - Start working on documentation
   */

  //all elements
  this.elementHolder = {
    containerHolder: document.createElement("div"),
    outerContainer: document.createElement("div"),
    statusContainer: document.createElement("div"),
    messageContainer: document.createElement("div"),
    controllerContainer: document.createElement("div"),

    statusSpan: document.createElement("span"),
    messageSpan: document.createElement("span"),
    closeSpan: document.createElement("span"),
  }

  //default info
  let defaultInfo ={
    status: {
      success:{
        cardColor: "green",
        text: "Success",
        statusTextColor: "lightgreen",
      },
      error:{
        cardColor: "red",
        text: "Error",
        statusTextColor: "lightred"
      }
    },
    controller: {
      close:{
        icon: "X",
        color: "black"
      }
    },
    bgColor: "black",
    textColor: "grey",
    duration: 0
  }

  //extra info
  let extraInfo = {
    elementId: "messageBox" + document.querySelectorAll(".message-box-outer-container").length,
  }

  //Creating color and text object if not set by user
  if(data.color == undefined){
    data.color = {};
  }
  if(data.text == undefined){
    data.text = {}
  }

  //Handle data that is sent
  //Setting default values etc
  this.dataHandler = function(){

    //Check data.status and set color and text for success and error if no text set
    if(data.status == "success" || data.status == "Success" || data.status == "error" || data.status == "Error" || data.status == true || data.status == false || data.status == 0 || data.status == 1){
      //Color of card
      if(data.color.cardBackground == undefined && data.color.cardBg == undefined){
        if(data.status == "success" || data.status == "Success" || data.status == true || data.status == 1)data.color.cardBackground = defaultInfo.status.success.cardColor; data.color.statusText = defaultInfo.status.success.statusTextColor;
        if(data.status == "error" || data.status == "Error" || data.status == false || data.status == 0)data.color.cardBackground = defaultInfo.status.error.cardColor; data.color.statusText = defaultInfo.status.error.statusTextColor;
      }
      //Text of card
      if(data.text.status == undefined){
        if(data.status == "success" || data.status == "Success" || data.status == true || data.status == 1)data.text.status = defaultInfo.status.success.text;
        if(data.status == "error" || data.status == "Error" || data.status == false || data.status == 0)data.text.status = defaultInfo.status.error.text;
      }
    }

    //Do color check and set as default color if not set by user
    if(typeof(data.color) == 'object'){
      if(data.color.cardColor == undefined){
        data.color.cardColor = defaultInfo.bgColor;
      }
      if(data.color.statusColor == undefined){
        data.color.statusColor = defaultInfo.textColor;
      }
      if(data.color.messageColor == undefined){
        data.color.messageColor = defaultInfo.textColor;
      }
    }
    data.controller = defaultInfo.controller
  }

  //Create message box
  this.createBox = function(data){
    this.elementHolder.containerHolder.classList.add("message-box-holder")
    this.elementHolder.outerContainer.classList.add("message-box-outer-container");
    this.elementHolder.statusContainer.classList.add("message-box-status-container");
    this.elementHolder.messageContainer.classList.add("message-box-message-container");
    this.elementHolder.controllerContainer.classList.add("message-box-controller-container");

    this.elementHolder.outerContainer.id = extraInfo.elementId;
    this.elementHolder.containerHolder.style.height = 5 * 10 + "vh";

    this.elementHolder.statusSpan.classList.add("message-box-status-span");
    this.elementHolder.messageSpan.classList.add("message-box-message-span");
    this.elementHolder.closeSpan.classList.add("message-box-close-span");

    this.elementHolder.outerContainer.style.backgroundColor = data.color.cardBackground ? data.color.cardBackground : data.color.cardBg;

    this.elementHolder.statusSpan.style.color = data.color.statusText;
    this.elementHolder.statusSpan.textContent = data.text.status;
    this.elementHolder.messageSpan.style.color = data.color.messageText;
    this.elementHolder.messageSpan.textContent = data.text.message;

    this.elementHolder.messageSpan.style.color = data.controller.close.color;
    this.elementHolder.closeSpan.textContent = data.controller.close.icon;

    //adding extra effects
    //TODO-Fix animation!
    if(data.animation != undefined){
      setAnimations(data.animation.type, data.animation.duration, this.elementHolder.outerContainer);
    }

    //appending
    this.elementHolder.statusContainer.append(this.elementHolder.statusSpan);
    this.elementHolder.messageContainer.append(this.elementHolder.messageSpan);
    this.elementHolder.controllerContainer.append(this.elementHolder.closeSpan);

    this.elementHolder.outerContainer.append(this.elementHolder.statusContainer, this.elementHolder.messageContainer, this.elementHolder.controllerContainer);
  }
  //Calling functions
  this.dataHandler();
  this.createBox(data)

  if(document.querySelectorAll(".message-box-holder").length == 0){
    document.body.append(this.elementHolder.containerHolder);
  }

  if(document.querySelectorAll(".message-box-outer-container").length > 5){
    setAnimations("fade-out", 0.5, document.querySelectorAll(".message-box-outer-container")[0]);
    document.querySelectorAll(".message-box-outer-container")[0].remove();
  }

  document.querySelectorAll(".message-box-holder")[0].append(this.elementHolder.outerContainer);

  //remove element after time set (if time is set)

  if(data.duration > 0){
    setTimeout(function(){
      document.querySelector("#" + extraInfo.elementId).remove()
    }, data.duration * 1000)
  }

}
