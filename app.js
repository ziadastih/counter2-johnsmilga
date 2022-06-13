const containers = document.querySelectorAll(".container");
const value1 = document.querySelector(".value1");
const value2 = document.querySelector(".value2");

// giving for each for containers and grabbing each container ,and in each one we set the input we want ,and in the btns we traverse the dom to select the value we want and set if statement ...and then increase,reset or decrease this value

containers.forEach(function (container) {
  const decrease = container.querySelector(".decrease");
  const reset = container.querySelector(".reset");
  const increase = container.querySelector(".increase");
  // values content as johnsmilga wants it when page load
  value1.textContent = 100;
  value2.textContent = 200;

  //   decrease function
  decrease.addEventListener("click", function (e) {
    let element = e.currentTarget.parentElement.previousElementSibling;
    if (element.classList.contains("value1")) {
      count = value1.textContent;
      count--;
      element.textContent = count;
    } else {
      count = value2.textContent;
      count--;
      element.textContent = count;
    }
  });
  // reset function
  reset.addEventListener("click", function (e) {
    count = 0;
    let element = e.currentTarget.parentElement.previousElementSibling;
    element.textContent = count;
  });
  // increase function
  increase.addEventListener("click", function (e) {
    let element = e.currentTarget.parentElement.previousElementSibling;
    if (element.classList.contains("value1")) {
      count = value1.textContent;
      count++;
      element.textContent = count;
    } else {
      count = value2.textContent;
      count++;
      element.textContent = count;
    }
  });
});
