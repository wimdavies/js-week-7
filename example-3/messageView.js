class MessageView {
  constructor() {
    this.showMessageButtonEl = document.querySelector('#show-message-button');
    this.hideMessageButtonEl = document.querySelector('#hide-message-button');
    
    this.showMessageButtonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.hideMessageButtonEl.addEventListener('click', () => {
      this.hideMessage();
    });
  }

  displayMessage() {
    const messageEl = document.createElement('div');

    messageEl.textContent = 'This message displayed by JavaScript';
    messageEl.id = 'message';

    document.querySelector('#main-container').append(messageEl);

    console.log('Thanks for clicking me!');
  }

  hideMessage() {
    const messageEls = document.querySelectorAll('#message');

    messageEls.forEach(messageEl => {
      messageEl.remove();
    });

    // or, if we were sure we could only have one message on the page:
    // document.querySelector('#message').remove();
  }
}

module.exports = MessageView;