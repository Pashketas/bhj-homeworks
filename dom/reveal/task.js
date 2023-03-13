let revealed = Array.from(document.getElementsByClassName('reveal'));

function showRevealed(element) {
    const {top, bottom} = element.getBoundingClientRect();
    
    if ((bottom > 0) && (top <= window.innerHeight)) {
        element.classList.add('reveal_active');
        console.log({top, bottom});
    } else {
        element.classList.remove('reveal_active');
        
    }
}

document.addEventListener('scroll', () => revealed.forEach(item => showRevealed(item)));

