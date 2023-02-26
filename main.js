let input = document.querySelector("input");
let add = document.querySelector(".add");
let box3 = document.querySelector(".box3");
add.addEventListener("click", function () {
  console.log(input.value);
  let color = document.createElement("p");
  box3.appendChild(color);
  color.style.marginLeft = "300px";
  color.style.fontSize = "50px";
  color.style.fontWeight = "700";
  color.style.color = "red";
  color.innerHTML = input.value;
  input.value = "";
});
