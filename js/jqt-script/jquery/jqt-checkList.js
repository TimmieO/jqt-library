/*
* Create edit function
* Create remove function
* Create done list
* Create done function
* Style everything
* Style to look good at all devices
* Make css file look good
* */

function checkList(){
  let input = document.querySelectorAll("input[data-jqt-input='checklist']")[0];
  let button = document.querySelectorAll("[data-jqt='checklist-add']")[0];
  let container = document.querySelectorAll("[data-jqt='checklist-container']")[0];

  let validation = checkListValidationHandler(input, button, container);
  if(!validation){
    return;
  }
  checkListClickHandler(input, button, container);
}
function checkListValidationHandler(input, button, container){

  if(input.length <= 0 || input.length >= 2){
    console.log("Input not found OR too many of the element");
    return false;
  }
  if(button.length <= 0 || button.length >= 2){
    console.log("Button not found OR too many of the element");
    return false;
  }
  if(container.length <= 0 || container.length >= 2){
    console.log("Container not found OR too many of the element");
    return false;
  }
  return true;
}
function checkListClickHandler(input, button, container){
  button.onclick = function(){
    let elementData = checkListElementHandler(input);

    container.append(elementData.itemDiv);
    feather.replace();
  }
}
function checkListElementHandler(input){
  let getCheckListItems = document.querySelectorAll("[data-jqt*='checklist-item']");
  let getCheckListItemsAmount = getCheckListItems.length;

  let icon = {
    edit: "edit",
    remove: "trash-2"
  }
  let elementType = {
    itemDivType: "div",
    itemLeftController: "div",
    itemRightController: "div",
    itemCheckBox: "input",
    itemEditSpan: "span",
    itemEditIcon: "i",
    itemRemoveSpan: "span",
    itemRemoveIcon: "i",
    textDivType: "div",
    textSpanType: "span",
  }
  let elements = {
    itemDiv: document.createElement(elementType.itemDivType),
    itemLeftController: document.createElement(elementType.itemLeftController),
    itemRightController: document.createElement(elementType.itemRightController),
    itemCheckBox: document.createElement(elementType.itemCheckBox),
    itemEditSpan: document.createElement(elementType.itemEditSpan),
    itemEditIcon: document.createElement(elementType.itemEditIcon),
    itemRemoveSpan: document.createElement(elementType.itemRemoveSpan),
    itemRemoveIcon: document.createElement(elementType.itemRemoveIcon),
    textDiv: document.createElement(elementType.textDivType),
    textSpan: document.createElement(elementType.textSpanType),
  }

  elements.itemDiv.classList.add("checklist-item-div");
  elements.itemLeftController.classList.add("checklist-item-left-controller");
  elements.itemRightController.classList.add("checklist-item-right-controller");
  elements.itemCheckBox.classList.add("checklist-item-checkbox");
  elements.itemEditSpan.classList.add("checklist-item-edit-span");
  elements.itemEditIcon.classList.add("classlist-item-edit-icon");
  elements.itemRemoveSpan.classList.add("checklist-item-remove-span");
  elements.itemRemoveIcon.classList.add("classlist-item-remove-icon");
  elements.textDiv.classList.add("checklist-item-text-div");
  elements.textSpan.classList.add("checklist-item-text-span");

  elements.itemCheckBox.setAttribute("type","checkbox");

  elements.itemDiv.dataset.jqt = "checklist-item" + ++getCheckListItemsAmount;
  elements.itemEditIcon.dataset.feather = icon.edit;
  elements.itemRemoveIcon.dataset.feather = icon.remove;

  elements.textSpan.textContent = input.value;


  elements.itemEditSpan.append(elements.itemEditIcon);
  elements.itemRemoveSpan.append(elements.itemRemoveIcon);
  elements.textDiv.append(elements.textSpan);

  elements.itemLeftController.append(elements.itemCheckBox, elements.itemEditSpan);
  elements.itemRightController.append(elements.itemRemoveSpan);

  elements.itemDiv.append(elements.itemLeftController, elements.textDiv, elements.itemRightController);

  return elements;
}
function checkListControllerHandler(){

}
