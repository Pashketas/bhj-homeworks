const textField = document.getElementById('editor');

console.log(textField);

textField.addEventListener ('input', () => {
    if (textField.value) {
        let text = textField.value;
        localStorage.setItem('text', text);
    }
});

window.addEventListener ('load', () => {
    textField.value = localStorage.getItem('text');
})

