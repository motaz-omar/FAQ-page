// variables
const icon = document.querySelectorAll(".caret-down-icon");
const accordion = document.querySelectorAll(".faq-content");
// a loop to show and hide the answer
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
