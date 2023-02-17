function Counter() {
  let buttonPlus = document.querySelector("#minus");
  let buttonMinus = document.querySelector("#plus");
  let counter = document.querySelector("#counter");

  let quantity = 1;

  buttonMinus.addEventListener("click", () => {
    quantity += 1;
    counter.textContent = quantity;
  });

  buttonPlus.addEventListener("click", () => {
    if (quantity === 0) {
      return;
    } else {
      quantity -= 1;
      counter.textContent = quantity;
    }
  });
  /* SECOND COUNTER */
  let buttonPlus2 = document.querySelector("#minus2");
  let buttonMinus2 = document.querySelector("#plus2");
  let counter2 = document.querySelector("#counter2");

  let quantity2 = 1;

  buttonMinus2.addEventListener("click", () => {
    quantity2 += 1;
    counter2.textContent = quantity2;
  });

  buttonPlus2.addEventListener("click", () => {
    if (quantity2 === 0) {
      return;
    } else {
      quantity2 -= 1;
      counter2.textContent = quantity2;
    }
  });
  /* TRIDT COUNTER */
  let buttonPlus3 = document.querySelector("#minus3");
  let buttonMinus3 = document.querySelector("#plus3");
  let counter3 = document.querySelector("#counter3");

  let quantity3 = 1;

  buttonMinus3.addEventListener("click", () => {
    quantity3 += 1;
    counter3.textContent = quantity3;
  });

  buttonPlus3.addEventListener("click", () => {
    if (quantity3 === 0) {
      return;
    } else {
      quantity3 -= 1;
      counter3.textContent = quantity3;
    }
  });
}
Counter();
