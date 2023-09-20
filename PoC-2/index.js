var radios = document.querySelectorAll("input[type=radio]");

const config = {
  headerBreakBefore: ["h2", "break-before"],
  headerBreakAfter: ["h2", "break-after"],
  tableBreakBefore: ["table", "break-before"],
  tableBreakAfter: ["table", "break-after"],
  tableBreakInside: ["table", "break-inside"],
};

function changeHandler(event) {
  const [element, property] = config[event.srcElement.name];
  document.querySelectorAll(element).forEach((el) => {
    el.style[property] = event.target.value;
  });
}

Array.prototype.forEach.call(radios, function (radio) {
  radio.addEventListener("change", changeHandler);
});
