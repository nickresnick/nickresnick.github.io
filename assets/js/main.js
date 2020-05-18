(() => {
  // Theme switch
  const root = document.body;
  const themeSwitch = document.getElementById("mood");
  const themeData = root.getAttribute("data-mood");

  if (themeSwitch) {
    initTheme(localStorage.getItem("theme"));
    themeSwitch.addEventListener("click", () =>
      toggleTheme(localStorage.getItem("theme"))
    );

    function toggleTheme(state) {
      if (state === "dark") {
        localStorage.setItem("theme", "light");
        document.body.setAttribute("data-mood", "light");
      } else if (state === "light") {
        localStorage.setItem("theme", "dark");
        document.body.setAttribute("data-mood", "dark");
      } else {
        initTheme(state);
      }
    }

    function initTheme(state) {
      if (state === "dark") {
        document.body.setAttribute("data-mood", "dark");
      } else if (state === "light") {
        document.body.setAttribute("data-mood", "light");
      } else {
        localStorage.setItem("theme", "dark");
      }
    }
  }
})();
