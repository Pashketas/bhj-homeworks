const loader = document.getElementById('loader');
const board = document.getElementById('items');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        loader.classList.remove('loader_active');
        const res = JSON.parse(xhr.response);
        const valutes = Object.entries(res.response.Valute);
        for (i = 0; i < valutes.length; i++) {
            board.insertAdjacentHTML ('beforeend', `<div class="item">
                                                        <div class="item__code"> ${valutes[i][0]}</div>
                                                        <div class="item__value">${valutes[i][1].Value} </div>
                                                        <div class="item__currency">руб.
                                                    </div>`)
        }
    } else {
        loader.classList.add('loader_active');
    }
} 