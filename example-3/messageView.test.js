/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {

  // We can use the beforeEach() hook 
  // to set the jest `document` HTML before each test
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('shows a user-input message on show-message-button click', () => {
    const view = new MessageView();

    const input = document.querySelector('#message-input');
    input.value = 'I am sending a message';

    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();

    expect(document.querySelector('#message')).not.toBeNull();
    expect(document.querySelector('#message').textContent).toBe('I am sending a message');
  });

  it('hides the message on hide-message-button click', () => {
    const view = new MessageView();
    // show click
    const showbuttonEl = document.querySelector('#show-message-button');
    showbuttonEl.click();
    // hide click
    const hidebuttonEl = document.querySelector('#hide-message-button');
    hidebuttonEl.click();

    expect(document.querySelector('#message')).toBeNull();
  })
});