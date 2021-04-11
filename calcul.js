const numbers = document.getElementsByName("number");
const result = document.getElementById("result");
const operators = document.getElementsByName("operator");
const ugual = document.getElementById("ugual");
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    result.value = result.value + number.value;
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    result.value = result.value + operator.value;
  });
});

ugual.addEventListener("click", () => {
  result.value = eval(result.value);
});