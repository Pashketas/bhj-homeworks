const btn = document.querySelector('.chat-widget__side');
const widget = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
const messageField = document.querySelector('.chat-widget__input');
const messagesContainer = document.querySelector('.chat-widget__messages-container')

btn.addEventListener('click', () => {
	widget.classList.add('chat-widget_active');
})

messageField.addEventListener('keydown', (e) =>{
	let text = messageField.value.trim();
	let time = getCurrentFormattedTime();
	if (text&&(e.keyCode === 13)) {
		messages.innerHTML += `
		  <div class="message message_client">
		    <div class="message__time">${time}</div>
		    <div class="message__text">
		      ${text}
		    </div>
		  </div>
		`;
		let roboText = getMessage();
		messages.innerHTML += `
		  <div class="message">
		    <div class="message__time">${time}</div>
		    <div class="message__text">
		      ${roboText}
		    </div>
		  </div>
		`;
		messageField.value = '';
		messagesContainer.scrollTop = messagesContainer.scrollHeight;
	}
});
//messageField.addEventListener('focus', )

function getCurrentFormattedTime() {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    return `${hour}:${minutes}`;
  };


function getMessage() {
const roboMessages = [
    'Добрый вечер, я диспетчер.',
    'Ты кто такой?',
    'Мы вам ничего не продадим!',
    'Где ваша совесть?',
    'Добрый день! До свидания!',
    'Мы гордимся Вами.',
    'Ваши ожидания - ваши проблемы.',
    'Не надо паники!',
    'Я слышу, как свистит ветер через дырки в ваших карманах.',
    'Креативность - мой конёк...',
  ],
  index = Math.floor(Math.random() * roboMessages.length);

return roboMessages[index];
}

