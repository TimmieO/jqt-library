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
- card{
  -max
  -height
  -width
}
- Animation:{
  -type(ease-in, fly up, etc)
  -duration
  }
- Time
 */

function messageCard(data){

  //Send error if wrong input
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
   - Fix smoother animations
   - Add animation
   - Add param to add max cards allowed
   - Finish adding animations
   */

  /*TODO-Finish animations
  - Fix other cards drop down when bottom one is removed
  - Fix fade out and remove after time or on button click
  - Fix bugs with animations (If any exist)

  - Add icons using fontawesome
  - Add controller setting for user to choose whether they want to user the X controller, or set own in message
  - Add "card" controller, to controll width, height, position, etc (HALF)
  - Clear up in code, unwanted code gone
  - Start working on documentation
  - Add check for unneeded data being entered (Data that is not used)
  - Add to allow user to change font-size, color and background color of the different things via data.status, data.message, data.controller, also keep general with data.text etc
  - Add classes to variables
   */
  /*TODO-Icons
  - Add icons using fontawesome
 */
  /*TODO-Data sent/used
  - Add controller setting for user to choose whether they want to user the X controller, or set own in message
  - Add "card" controller, to controll width, height, position, etc (HALF)
  - Add to allow user to change font-size, color and background color of the different things via data.status, data.message, data.controller, also keep general with data.text etc
 */
  /*TODO-Code
  - Clear up in code, unwanted code gone
  - Start working on documentation
  - Add check for unneeded data being entered (Data that is not used)
  */

//all elements
this.elementHolder = {
 cardHolder: document.createElement("div"),
 cardContainer: document.createElement("div"),
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
 card: {
   max: 5,
   height: 5 + "vh",
   width: 100 + "%"
 },
 color: {
   bgColor: "black",
   textColor: "grey"
 },
 duration: 0,
}

//extra info
let extraInfo = {
 elementId: "messageBox" + document.querySelectorAll(".message-box-outer-container").length,
}

//Creating color and text object if not set by user
if(data.color == undefined){data.color = {}}
if(data.text == undefined){data.text = {}}
if(data.card == undefined){data.card = {}}

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
   if(data.color.cardColor == undefined){data.color.cardColor = defaultInfo.color.bgColor}
   if(data.color.statusColor == undefined){data.color.statusColor = defaultInfo.color.textColor}
   if(data.color.messageColor == undefined){data.color.messageColor = defaultInfo.color.textColor}
 }

 if(typeof(data.card) == 'object'){
   if(data.card.max == undefined){data.card.max = defaultInfo.card.max}
   if(data.card.height == undefined){data.card.height = defaultInfo.card.height}
   if(data.card.width == undefined){data.card.width = defaultInfo.card.width}
 }

 //Adding controller
 data.controller = defaultInfo.controller
}

//Create message box
this.createCard = function(data){

 this.elementHolder.cardHolder.classList.add("message-box-holder");
 this.elementHolder.cardContainer.classList.add("message-box-outer-container");
 this.elementHolder.statusContainer.classList.add("message-box-status-container");
 this.elementHolder.messageContainer.classList.add("message-box-message-container");
 this.elementHolder.controllerContainer.classList.add("message-box-controller-container");

 this.elementHolder.cardContainer.id = extraInfo.elementId;

 this.elementHolder.statusSpan.classList.add("message-box-status-span");
 this.elementHolder.messageSpan.classList.add("message-box-message-span");
 this.elementHolder.closeSpan.classList.add("message-box-close-span");

 this.elementHolder.statusSpan.style.color = data.color.statusText;
 this.elementHolder.statusSpan.textContent = data.text.status;
 this.elementHolder.messageSpan.style.color = data.color.messageText;
 this.elementHolder.messageSpan.textContent = data.text.message;

 this.elementHolder.messageSpan.style.color = data.controller.close.color;
 this.elementHolder.closeSpan.textContent = data.controller.close.icon;

 //appending
 this.elementHolder.statusContainer.append(this.elementHolder.statusSpan);
 this.elementHolder.messageContainer.append(this.elementHolder.messageSpan);
 this.elementHolder.controllerContainer.append(this.elementHolder.closeSpan);

 this.elementHolder.cardContainer.append(this.elementHolder.statusContainer, this.elementHolder.messageContainer, this.elementHolder.controllerContainer);
}

//Add styles on one place, less confusion
this.addStyle = function(data){
 //Holder box
 this.elementHolder.cardHolder.style.height = 5 * 10 + "vh";

 //Card container
 this.elementHolder.cardContainer.style.backgroundColor = data.color.cardBackground ? data.color.cardBackground : data.color.cardBg;
 this.elementHolder.cardContainer.style.maxWidth = "100%"; //Set max width to fill card
 this.elementHolder.cardContainer.style.width = data.card.width; //Width
 this.elementHolder.cardContainer.style.maxHeight = data.card.height; //Height
}

//Made addAnimation function for future
this.addAnimation = function(animation, duration){
 setAnimations(animation, duration, this.elementHolder.cardContainer)
}

//Calling functions
this.dataHandler();
this.addStyle(data);
this.createCard(data);

if(data.animation != undefined)this.addAnimation(data.animation.type, data.animation.duration);

//Append card holder
if(document.querySelectorAll(".message-box-holder").length == 0){document.body.append(this.elementHolder.cardHolder)}

//Make sure it appends from bottom
if(document.querySelectorAll(".message-box-outer-container").length > 0){
 document.querySelectorAll(".message-box-holder")[0].insertBefore(this.elementHolder.cardContainer, document.querySelectorAll(".message-box-outer-container")[0]);
}
else{
 document.querySelectorAll(".message-box-holder")[0].append(this.elementHolder.cardContainer);
}

//Remove after time
if(data.duration > 0){
 setTimeout(function(){
   document.querySelector("#" + extraInfo.elementId).remove()
 }, data.duration * 1000)
}

}
