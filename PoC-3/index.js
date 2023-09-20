var layoutRadios = document.querySelectorAll(
  "input[type=radio][name='layout']"
);

var fragmentationRadios = document.querySelectorAll(
  ".fragmentation-options input[type=radio]"
);

const config = {
  breakAfter: "break-after",
  breakBefore: "break-before",
  breakInside: "break-inside",
};

function changeHandler(event) {
  showFragmentationOptionsAndWrapper(event.target.value);
  showStyleInfo(event.target.value);
}

function showFragmentationOptionsAndWrapper(value) {
  if (["flexFrag", "gridFrag"].includes(value)) {
    document.querySelector(".items").classList = `items ${value}`;
    document.querySelector(".fragmentation-options").classList.remove("hidden");
    return;
  }
  document.querySelector(".fragmentation-options").classList.add("hidden");
  document.querySelector(".items").classList = "items hidden";
}

function showStyleInfo(value) {
  ["flex", "grid"].forEach((el) => {
    if (value === el) document.getElementById(value).classList.remove("hidden");
    else document.getElementById(el).classList = "hidden";
  });
}

function updateFragmentationOptions(event) {
  const property = config[event.srcElement.name];
  document.querySelectorAll(".item").forEach((el) => {
    el.style[property] = event.target.value;
  });
}

Array.prototype.forEach.call(layoutRadios, function (radio) {
  radio.addEventListener("change", changeHandler);
});

Array.prototype.forEach.call(fragmentationRadios, function (radio) {
  radio.addEventListener("change", updateFragmentationOptions);
});
