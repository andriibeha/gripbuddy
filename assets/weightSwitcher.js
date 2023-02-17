function weigthSwitcher() {
  const weigthButtons = document.querySelectorAll(".weight__button");
  let ActiveButtonDefault = document.querySelector("#w100lb");

  let prevState = ActiveButtonDefault;
  let imgEl = document.querySelector("#product3lb100");

  weigthButtons.forEach((el) => {
    el.addEventListener("click", (e) => {
      if (
        e.target.className === "product__details__color__button weight__button"
      ) {
        prevState.classList.remove("product__details__color__button__active");
        prevState = el;
        el.classList.add("product__details__color__button__active");
      }
    });
  });
}

weigthSwitcher();
