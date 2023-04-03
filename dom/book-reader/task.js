const fontButtons = Array.from(document.getElementsByClassName('font-size'));
const colorControl = Array.from(document.querySelectorAll('.color'));
const textColorButtons = colorControl.slice(0,3);
const bgColorButtons = colorControl.slice(3);



const content = document.querySelector('.book__content');


function switchFontSize(arr, index) {
    let activeSizeIndex = fontButtons.findIndex((item) => item.className.includes('font-size_active'));
    let fontSize = arr[activeSizeIndex].getAttribute('data-size');
    content.classList.remove(`font-size_${fontSize}`);
    arr[activeSizeIndex].classList.remove('font-size_active');
    arr[index].classList.add('font-size_active');
    fontSize = arr[index].getAttribute('data-size');
    content.classList.add(`font-size_${fontSize}`);
}

function switchTextColor(arr, index) {
    let activeTextColorIndex = textColorButtons.findIndex((item) => item.className.includes('color_active'));
    let textColor = arr[activeTextColorIndex].getAttribute('data-text-color');
    content.classList.toggle(`book_color-${textColor}`);
    arr[activeTextColorIndex].classList.remove('color_active');
    arr[index].classList.add('color_active');
    textColor = arr[index].getAttribute('data-text-color');
    content.classList.toggle(`book_color-${textColor}`);
}

function switchBgColor(arr, index) {
    let activeBgColorIndex = bgColorButtons.findIndex((item) => item.className.includes('color_active'));
    let bgColor = arr[activeBgColorIndex].getAttribute('data-bg-color');
    content.classList.toggle(`book_bg-${bgColor}`);
    arr[activeBgColorIndex].classList.remove('color_active');
    arr[index].classList.add('color_active');
    bgColor = arr[index].getAttribute('data-bg-color');
    content.classList.toggle(`book_bg-${bgColor}`);
}

fontButtons.forEach((item, index) => item.addEventListener('click', function(){
	event.preventDefault();
    switchFontSize(fontButtons, index);
    }));

textColorButtons.forEach((item, index) => item.addEventListener('click', function(){
	event.preventDefault();
    switchTextColor(textColorButtons, index);
    }));

bgColorButtons.forEach((item, index) => item.addEventListener('click', function(){
    event.preventDefault();
    switchBgColor(bgColorButtons, index);
    }));

/*function setColor (arr, index) {
    const color = arr[index].getAttribute('data-color');
    arr[index].setAttribute('style', `color: ${color}`);
}

<--Лаконичное решение для читалки-->
const bookElement = document.getElementById("book");
const controlElements = document.querySelector(".book__controls");

controlElements.addEventListener("click", function (event) {
  event.preventDefault();

  const { size, textColor, bgColor } = event.target.dataset;

  const elementClassArray = event.target.classList;
  const activeControl = event.target
    .closest(".book__control")
    .querySelectorAll("a");

  activeControl.forEach((element) => {
    element.classList.remove(elementClassArray[0] + "_active");
  });

  event.target.classList.add(elementClassArray[0] + "_active");

  function removePreviousClassName(className) {
    for (value of bookElement.classList) {
      if (value.includes(className)) {
        bookElement.classList.remove(value);
      }
    }
  }

  if (size || event.target.className === "font-size font-size_active") {
    removePreviousClassName("book_fs-");
    bookElement.classList.add("book_fs-" + size);
  }

  if (textColor) {
    removePreviousClassName("book_color-");
    bookElement.classList.add("book_color-" + textColor);
  }

  if (bgColor) {
    removePreviousClassName("book_bg-");
    bookElement.classList.add("book_bg-" + bgColor);
  }
}); */