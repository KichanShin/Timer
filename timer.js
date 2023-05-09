const $hours = document.querySelector("#hours");
const $min = document.querySelector("#min");
const $sec = document.querySelector("#sec");
const $start = document.querySelector("#start");
const $reset = document.querySelector("#reset");

$hours.style.fontSize = "3rem";
$min.style.fontSize = "3rem";
$sec.style.fontSize = "3rem";

$start.addEventListener("click", () => {
  $start.style.backgroundColor = "#5180FF";
  $start.style.color = "#fff";
});
$reset.addEventListener("click", () => {
  $reset.style.backgroundColor = "#FB7099";
  $reset.style.color = "#fff";
});
