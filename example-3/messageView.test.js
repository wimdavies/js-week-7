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

  it('shows message on show-message-button click', () => {
    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();

    expect(document.querySelector('#message')).not.toBeNull();
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