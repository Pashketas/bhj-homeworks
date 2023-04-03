const progressBar = document.getElementById('progress');
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
            loading(0.2);
        }
    })
    xhr.open('POST', form.action);

    const formData = new FormData(form);

    xhr.send(formData);
});

function loading(x){
    progressBar.value += x;
    if (progressBar.value == 1) {
        return
    } else {
        setTimeout(() => loading(x), 200)
    }
}
