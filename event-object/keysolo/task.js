class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timer = container.querySelector('.timer')
    this.reset();
    

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
    this.timer.textContent = this.wordElement.innerText.length;
  }

  registerEvents() {
    setInterval((() => {
    this.timer.textContent = this.timer.textContent - 1;
    if (this.timer.textContent == 0) {
      this.fail();
      this.timer.textContent = this.wordElement.innerText.length;
    }}), 1000);
    document.addEventListener('keydown', () => {
      if (this.currentSymbol.textContent === event.key) {
        this.success();
      } else {
        this.fail();
        }
      });
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
    this.timer.textContent = this.wordElement.innerText.length;
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'university',
        'injury',
        'broadcasting',
        'transmission',
        'recover',
        'education',
        'challenge',
        'government',
        'observatory',
        'gothrough',
        'unpredictable',
        'responsibilities',
        'experienced'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))