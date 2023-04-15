const modalWindow = document.getElementById('subscribe-modal');
const closeButton = document.querySelector(".modal__close");

function setCookie(name, value) {
    document.cookie = `${name}=${value}`;
}

function getCookie(name){
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(el => el.startsWith(`${name}=`));
    if (cookie) {
        const cookieValue = cookie.substring(name.length +1);
        return cookieValue;
    } else {
        return null
    }
}

window.addEventListener('load', function(){
    if (getCookie('closed')) {
        
    } else {
	    modalWindow.classList.add('modal_active');
    }
})

closeButton.addEventListener('click', function(){
	modalWindow.classList.remove('modal_active');
    setCookie('closed', 'true');
});