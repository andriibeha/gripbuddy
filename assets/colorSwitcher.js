function colorSwitcher() {
  const colorButton = document.querySelectorAll(".color__button");
  let ActiveButtonDefault = document.querySelector("#black");

  let prevState = ActiveButtonDefault;
  let imgEl = document.querySelector("#product1Img");

  colorButton.forEach((el) => {
    el.addEventListener("click", (e) => {
      if (
        e.target.className === "product__details__color__button color__button"
      ) {
        prevState.classList.remove("product__details__color__button__active");
        prevState = el;
        el.classList.add("product__details__color__button__active");

        if (e.target.id === "black") {
          imgEl.src = "./assets/grip1_black.webp";
        } else if (e.target.id === "gray") {
          imgEl.src = "./assets/grip1_gray.jpg";
        } else if (e.target.id === "blackGrey") {
          imgEl.src = "./assets/grip1_blackgrau.webp";
        }
      }
    });
  });
}

colorSwitcher();
