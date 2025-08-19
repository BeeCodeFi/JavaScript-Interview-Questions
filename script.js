const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.closest(".qa").querySelector(".answer");

    if (answer.style.display === "none" || answer.style.display === "") {
      answer.style.display = "block";
      btn.textContent = "Hide Answer";
    } else {
      answer.style.display = "none";
      btn.textContent = "See Answer";
    }
  });
});
