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
function switchActive (arr) {
    
    arr[activeIndex].classList.remove('font-size_active');
    if (activeIndex === (arr.length - 1)) {
        activeIndex = 0;
    } else {
        activeIndex++;
    }
    arr[activeIndex].classList.add('rotator__case_active');
    setColor(arr, activeIndex);
    const speed = arr[activeIndex].getAttribute('data-speed') 
}
*/