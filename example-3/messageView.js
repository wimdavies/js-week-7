class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });
  }

  displayMessage() {
    const messageEl = document.createElement('div');

    messageEl.textContent = 'This message displayed by JavaScript';
    messageEl.id = 'message';

    document.querySelector('#main-container').append(messageEl);

    console.log('Thanks for clicking me!');
  }
}

module.exports = MessageView;