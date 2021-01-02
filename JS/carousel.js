var getCards = document.querySelectorAll(".cards");
var cardCount = 0;
var active;
var remove;

function leftPress() {
    if(cardCount == 0) {
        cardCount = getCards.length - 1;
        active = getCards[cardCount].classList.add("active");
        remove = getCards[0].classList.remove("active");
    }
    else {
        cardCount -= 1;
        active = getCards[cardCount].classList.add("active");
        remove = getCards[cardCount + 1].classList.remove("active");
    }
}

function rightPress() {
    if(cardCount == getCards.length - 1) {
        cardCount = 0;
        active = getCards[cardCount].classList.add("active");
        remove = getCards[getCards.length - 1].classList.remove("active");
    }
    else {
        cardCount += 1;
        active = getCards[cardCount].classList.add("active");
        remove = getCards[cardCount - 1].classList.remove("active");
    }
}