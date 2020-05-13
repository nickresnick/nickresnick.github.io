(() => {
  // Animal switch
  const root = document.body;
  const animalSwitch = document.getElementById("animal");
  const animalData = root.getAttribute("data-animal");

  if (animalSwitch) {
    initAnimal(localStorage.getItem("animal"));
    animalSwitch.addEventListener("click", () =>
      toggleAnimal(localStorage.getItem("animal"))
    );

    function toggleAnimal(state) {
      if (state === "goat") {
        localStorage.setItem("animal", "elephant");
        document.body.setAttribute("data-animal", "elephant");
      } else if (state === "elephant") {
        localStorage.setItem("animal", "goat");
        document.body.setAttribute("data-animal", "goat");
      } else {
        initAnimal(state);
      }
    }

    function initAnimal(state) {
      if (state === "goat") {
        document.body.setAttribute("data-animal", "goat");
      } else if (state === "elpehant") {
        document.body.setAttribute("data-animal", "elephant");
      } else {
        localStorage.setItem("animal", "goat");
      }
    }
  }
})();
