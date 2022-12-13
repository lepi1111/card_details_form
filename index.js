const cardOwner = document.getElementById("cardOwner");
const cardOwnerOutput = document.querySelector(".front-side-card_name");
const cardExpDate1 = document.getElementById("cardExpDate1");
const cardExpDateOutput1 = document.querySelector(".front-side-card_expDate1");
const cardExpDate2 = document.getElementById("cardExpDate2");
const cardExpDateOutput2 = document.querySelector(".front-side-card_expDate2");
const cardCVC = document.getElementById("cardCVC");
const cardCVCValue = cardCVC.value;
const cardCVCOutput = document.querySelector(".back-side-card_cvc");
const cardNumber = document.getElementById("cardNumber");
const cardNumberOutput = document.getElementById("front-side-card_number");
const buttonConfirm = document.querySelector(".container-form_button");
const buttonContinue = document.getElementById("buttonContinue");
const containerForm = document.querySelector(".container-form");
const containerChecked = document.getElementById("container-checked");
const error = document.querySelector(".error");
const errorCardNumber = document.getElementById("error-cardNumber");
const errorCVC = document.getElementById("error-cvc");

// console.log(cardOwnerOutput.innerHTML);

// Card owner name output from the input to the card
cardOwner.addEventListener("focusout", () => {
  if (cardOwner.value) {
    cardOwnerOutput.innerHTML = cardOwner.value;
  } else {
    cardOwnerOutput.innerHTML = "Jane Appleseed";
  }
});

// Inputed card number that gets outputed on the card
// + provjera ako nije ništa upisano, neka bude 0000 0000 0000 0000
cardNumber.addEventListener("focusout", () => {
  if (cardNumber.value) {
    let cardNumberValue = cardNumber.value;
    if (cardNumberValue.length < 19) {
    } else {
      cardNumberOutput.innerHTML = cardNumber.value;
    }
  } else {
    cardNumberOutput.innerHTML = "0000 0000 0000 0000";
  }
});

// Exp. date output from form input to the card
cardExpDate1.addEventListener("focusout", () => {
  if (cardExpDate1.value) {
    cardExpDateOutput1.innerHTML = cardExpDate1.value;
  } else {
    cardExpDateOutput1.innerHTML = "00";
  }
});

// Exp. date output from form input to the card
cardExpDate2.addEventListener("focusout", () => {
  if (cardExpDate2.value) {
    cardExpDateOutput2.innerHTML = cardExpDate2.value;
  } else {
    cardExpDateOutput2.innerHTML = "00";
  }
});

// CVC output from form input to the card
cardCVC.addEventListener("focusout", () => {
  if (cardCVC.value) {
    var cardCVCValue = cardCVC.value;
    if (cardCVCValue.length < 3) {
    } else {
      cardCVCOutput.innerHTML = cardCVC.value;
    }
  } else {
    cardCVCOutput.innerHTML = "000";
  }
});

// Funkcija koja ograničava unos samo brojeva
function dozvoliBrojeve(event) {
  var code = event.which ? event.which : event.keyCode;

  if ((code < 48 || code > 57) && code > 31) {
    return false;
  }
  return true;
}

// Funckija koja formatira (grupira) brojeve kreditne kartice po četiri
function cardNumber_format(value) {
  var v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  var matches = v.match(/\d{4,16}/g);
  var match = (matches && matches[0]) || "";
  var parts = [];
  for (i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }
  if (parts.length) {
    return parts.join(" ");
  } else {
    return value;
  }
}

cardNumber.oninput = function () {
  this.value = cardNumber_format(this.value);
};

buttonConfirm.addEventListener("click", () => {
  containerChecked.style.display = "block";
  containerForm.style.display = "none";
});

buttonContinue.addEventListener("click", () => {
  containerChecked.style.display = "none";
  containerForm.style.display = "flex";
  cardCVC.value = "";
  cardExpDate1.value = "";
  cardExpDate2.value = "";
  cardNumber.value = "";
  cardOwner.value = "";
  cardCVCOutput.innerHTML = "000";
  cardExpDateOutput1.innerHTML = "00";
  cardExpDateOutput2.innerHTML = "00";
  cardNumberOutput.innerHTML = "0000 0000 0000 0000";
  cardOwnerOutput.innerHTML = "Jane Appleseed";
});

// TODO:
// form validacija (kada nije dobro nešto upisano: kreditna kartica < 16 brojeva, datum upisani prije današnjeg dana, CVC manje od 3 brojeva...)
// popraviti CSSa (napraviti varijable za boje i veličine, redudanciju v kodu sloziti,...)
// tablet breakpoint?
// border dok je input active (boja je v style-guideu)
