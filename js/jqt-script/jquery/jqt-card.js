$.fn.extend({
  jqtCardSelectFunc:function(cardFuncNum, cardVar){

    switch(cardFuncNum){
      case 1:
        $(this).createCard(cardVar);
        break;
    }
  },
  createCard:function(typeOfCard){
    this[0].onclick = function(){
      $(this).createCardFunc(
        $('div[data-card="container"]')[0],
        $('input[data-card-input="height"]')[0].value,
        $('input[data-card-input="width"]')[0].value,
        $('input[data-card-input="color"]')[0].value,
        typeOfCard,
        $('input[data-card-input="headerText"]')[0].value,
        $('input[data-card-input="bodyText"]')[0].value,
        $('input[data-card-input="headerColor"]')[0].value,
        $('input[data-card-input="bodyColor"]')[0].value
      )
    }
  },
  createCardFunc:function(cardContainer, height, width, bgColor, cardType, headerText, bodyText, headerColor, bodyColor){
    //Set the default settings
    let cardHeight = height;
    let cardWidth = width;
    let cardBgColor = bgColor;
    let typeOfCard = cardType;
    let cardHeaderText = headerText;
    let cardBodyText = bodyText;
    let cardBodyBgColor = bodyColor;
    let cardHeaderBgColor = headerColor;

    if(cardContainer == null){
      console.log("Please create a cardContainer");
      return;
    }
    if(cardContainer.localName != "div"){
      console.log(cardContainer.className + " is supposed to be a div")
      return;
    }
    if(cardHeight == undefined || cardHeight == "default"  || cardHeight.length <= 0){cardHeight = 15}else{cardHeight = height}
    if(cardWidth == undefined || cardWidth == "default" || cardWidth.length <= 0){cardWidth = 15}else{cardWidth = width}
    if(cardBgColor == undefined || cardBgColor == "default" || cardBgColor.length <= 0){cardBgColor = "black";}else{cardBgColor = bgColor}
    if(typeOfCard == undefined || typeOfCard == "default" || typeOfCard.length <= 0){typeOfCard = 1}else{typeOfCard = cardType}
    if(cardHeaderText == undefined  || cardHeaderText.length <= 0){cardHeaderText = ""}else{cardHeaderText = headerText}
    if(cardBodyText == undefined || cardBodyText.length <= 0){cardBodyText = ""}else{cardBodyText = bodyText}
    if(cardBodyBgColor == undefined || cardBodyBgColor == "default" || cardBodyBgColor.length <= 0){cardBodyBgColor = "grey";}else{cardBodyBgColor = bodyColor}
    if(cardHeaderBgColor == undefined || cardHeaderBgColor == "default" || cardHeaderBgColor.length <= 0){cardHeaderBgColor = "grey";}else{cardHeaderBgColor = headerColor}

    //CardController
    var cardCreateControl = {
      container : cardContainer,
      createCardDefault: function(height, width, bgColor){
        this.card = document.createElement("div");
        this.card.classList.add("card", "c-1");

        this.cardHeight = height;
        this.cardWidth = width;
        this.cardBgColor = bgColor;

        this.card.style.height = this.cardHeight + "vh";
        this.card.style.width = this.cardWidth + "vw";
        this.card.style.backgroundColor = this.cardBgColor;
        this.displayCard(this.card);
      },
      createCard2: function(height, width, bgColor, headerText){
        this.card = document.createElement("div");
        this.card.classList.add("card", "c-2");

        this.cardHeaderSpan = document.createElement("span");

        this.cardHeight = height;
        this.cardWidth = width;
        this.cardBgColor = bgColor;
        this.cardHeaderText = headerText;

        this.card.style.height = this.cardHeight + "vh";
        this.card.style.width = this.cardWidth + "vw";
        this.card.style.backgroundColor = this.cardBgColor;

        this.cardHeaderSpan.classList.add("card-header-text", "c-h-t-2");
        this.cardHeaderSpan.style.maxWidth = this.cardWidth + "vw";
        this.cardHeaderSpan.style.wordWrap = "break-word";

        this.cardHeaderSpan.textContent = this.cardHeaderText;

        this.card.append(this.cardHeaderSpan);

        this.displayCard(this.card);
      },
      createCard3: function(height, width, bgColor, headerText, bodyText){
        this.card = document.createElement("div");
        this.card.classList.add("jqt-card", "c-3");

        this.cardHeaderDiv = document.createElement("div");
        this.cardBodyDiv = document.createElement("div");
        this.cardHeaderSpan = document.createElement("span");
        this.cardBodySpan = document.createElement("span");

        this.cardHeight = height;
        this.cardWidth = width;
        this.cardBgColor = bgColor;
        this.cardHeaderText = headerText;
        this.cardBodyText = bodyText;

        this.cardHeaderDiv.classList.add("card-header-div", "c-h-d-3");
        this.cardHeaderSpan.classList.add("card-header-text", "c-h-t-3");
        this.cardHeaderSpan.style.maxWidth = this.cardWidth + "vw";
        this.cardHeaderSpan.style.wordWrap = "break-word";

        this.cardBodyDiv.classList.add("card-body-div", "c-b-d-3");
        this.cardBodySpan.classList.add("card-body-text", "c-b-t-3");
        this.cardBodySpan.style.maxWidth = this.cardWidth + "vw";
        this.cardBodySpan.style.wordWrap = "break-word";

        this.card.style.height = this.cardHeight + "vh";
        this.card.style.width = this.cardWidth + "vw";
        this.card.style.backgroundColor = this.cardBgColor;

        this.cardHeaderSpan.textContent = this.cardHeaderText;
        this.cardBodySpan.textContent = this.cardBodyText;

        this.cardHeaderDiv.append(this.cardHeaderSpan);
        this.cardBodyDiv.append(this.cardBodySpan);
        this.card.append(this.cardHeaderDiv);
        this.card.append(this.cardBodyDiv);

        this.displayCard(this.card);
      },
      createCard4: function(height, width, bgColor, headerText, bodyText, headerBgColor, bodyBgColor){
        this.card = document.createElement("div");
        this.card.classList.add("jqt-card", "c-4");

        this.cardHeaderDiv = document.createElement("div");
        this.cardBodyDiv = document.createElement("div");
        this.cardHeaderSpan = document.createElement("span");
        this.cardBodySpan = document.createElement("span");

        this.cardHeight = height;
        this.cardWidth = width;
        this.cardBgColor = bgColor;
        this.cardHeaderText = headerText;
        this.cardBodyText = bodyText;
        this.cardHeaderBgColor = headerBgColor;
        this.cardBodyBgColor = bodyBgColor;

        this.cardHeaderDiv.classList.add("card-header-div", "c-h-d-4");
        this.cardHeaderDiv.style.backgroundColor = this.cardHeaderBgColor;
        this.cardHeaderSpan.classList.add("card-header-text", "c-h-t-4");
        this.cardHeaderSpan.style.maxWidth = this.cardWidth + "vw";
        this.cardHeaderSpan.style.wordWrap = "break-word";

        this.cardBodyDiv.classList.add("card-body-div", "c-b-d-4");
        this.cardBodyDiv.style.backgroundColor = this.cardBodyBgColor;
        this.cardBodySpan.classList.add("card-body-text", "c-b-t-4");
        this.cardBodySpan.style.maxWidth = this.cardWidth + "vw";
        this.cardBodySpan.style.wordWrap = "break-word";

        this.card.style.height = this.cardHeight + "vh";
        this.card.style.width = this.cardWidth + "vw";
        this.card.style.backgroundColor = this.cardBgColor;

        this.cardHeaderSpan.textContent = this.cardHeaderText;
        this.cardBodySpan.textContent = this.cardBodyText;

        this.cardHeaderDiv.append(this.cardHeaderSpan);
        this.cardBodyDiv.append(this.cardBodySpan);
        this.card.append(this.cardHeaderDiv);
        this.card.append(this.cardBodyDiv);

        this.displayCard(this.card);
      },
      displayCard: function(card){
        this.container.append(card);
        console.log(this.container);
      }
    };

    switch(typeOfCard){
      case 1:
        cardCreateControl.createCardDefault(cardHeight, cardWidth, cardBgColor);
        break;
      case 2:
        cardCreateControl.createCard2(cardHeight, cardWidth, cardBgColor, cardHeaderText);
        break;
      case 3:
        cardCreateControl.createCard3(cardHeight, cardWidth, cardBgColor, cardHeaderText, cardBodyText);
        break;
      case 4:
        cardCreateControl.createCard4(cardHeight, cardWidth, cardBgColor, cardHeaderText, cardBodyText, cardHeaderBgColor, cardBodyBgColor);
        break;
    }
  }
});