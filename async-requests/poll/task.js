const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
let request = new XMLHttpRequest();
let xhr = new XMLHttpRequest();
request.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
request.send();
request.addEventListener("readystatechange", function() {
    if (request.readyState === 4) {
        const res = JSON.parse(request.response);
        const title = res.data.title;
        const answers = res.data.answers;
        pollTitle.innerHTML = `${title}`;
        for (i = 0; i < answers.length; i++) {
            pollAnswers.insertAdjacentHTML ('beforeend', `<button class="poll__answer">${answers[i]}</button>`)
        }
        const buttons = Array.from(pollAnswers.querySelectorAll('.poll__answer'));
        buttons.forEach((item, index) => item.addEventListener('click', function () {
            alert('Спасибо, ваш голос засчитан!');
            xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
            xhr.send( `vote=${res.id}&answer=${index}`);
            xhr.addEventListener('readystatechange', function(e){
                if (request.readyState === 4) {
                    const results = JSON.parse(xhr.response);
                    const answersList = results.stat;
                    pollAnswers.innerHTML = ``;
                    let sum = 0;
                    for (i = 0; i < answersList.length; i++) {
                        sum = sum + answersList[i].votes;
                    }
                    for (i = 0; i < answersList.length; i++) {
                        pollAnswers.insertAdjacentHTML ('beforeend', `<div><span>${answersList[i].answer}: </span><b>${Math.round(answersList[i].votes * 100/sum)}%</b></div>`)
                    }
                }
                e.preventDefault();
            });
        }));
            
    } else {
       
    }
} ) 


