let rotations = Array.from(document.getElementsByClassName('rotator__case'));
//let timeoutId = null;

function setColor (arr, index) {
    const color = arr[index].getAttribute('data-color');
    arr[index].setAttribute('style', `color: ${color}`);
}
function switchActive (arr) {
    let activeIndex = arr.findIndex((item) => item.className.includes('rotator__case_active'));
    arr[activeIndex].classList.remove('rotator__case_active');
    if (activeIndex === (arr.length - 1)) {
        activeIndex = 0;
    } else {
        activeIndex++;
    }
    arr[activeIndex].classList.add('rotator__case_active');
    setColor(arr, activeIndex);
    const speed = arr[activeIndex].getAttribute('data-speed') 
}

/*function switchActive (arr) {
    if (timeoutId === null){
        let activeIndex = arr.findIndex((item) => item.className.includes('rotator__case_active'));
        arr[activeIndex].classList.remove('rotator__case_active');
        if (activeIndex === (arr.length - 1)) {
            activeIndex = 0;
        } else {
            activeIndex++;
        }
        arr[activeIndex].classList.add('rotator__case_active');
        setColor(arr, activeIndex);
        
    } else {
        clearInterval(timeoutId);
    }
    let activeIndex = arr.findIndex((item) => item.className.includes('rotator__case_active'));
    const speed = arr[activeIndex].getAttribute('data-speed')
    timeoutId = setInterval (()=> switchActive(arr), speed);
}
switchActive(rotations);*/

setInterval(()=> switchActive(rotations), 1000)