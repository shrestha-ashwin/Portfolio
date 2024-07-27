const dark = document.querySelector(".dark");

const toggleDark = () => {
  if (!document.body.classList.contains("dark-mode")) {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
  }
};

dark.addEventListener("click", toggleDark);
