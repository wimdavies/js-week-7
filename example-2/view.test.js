/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const View = require('./view');

describe('Page view', () => {
  // We can use the beforeEach() hook 
  // to set the jest `document` HTML before each test
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('displays 2 paragraphs', () => {
    const view = new View();

    expect(document.querySelectorAll('p').length).toBe(2);
  });

  it('#addParagraph displays another paragraph', () => {
    // 1. Arrange - instantiate our View class
    const view = new View();
    // 2. Act - call any method that modifies the page
    // this method `displayTitle` would dynamically
    // set a <h1> title on the page with the given content
    view.addParagraph();
    // 3. Assert - we assert the page contains what it should.
    // Usually, you will use `.querySelector` (and friends)
    // here, and assert the text content, the number of elements,
    // or other things that make sense for your test.
    expect(document.querySelectorAll('p').length).toBe(3);
  });

  it('#clearParagraphs removes all paragraphs from the document', () => {
    // 1. Arrange - instantiate our View class
    const view = new View();
    // 2. Act - call any method that modifies the page
    // this method `displayTitle` would dynamically
    // set a <h1> title on the page with the given content
    view.clearParagraphs();
    // 3. Assert - we assert the page contains what it should.
    // Usually, you will use `.querySelector` (and friends)
    // here, and assert the text content, the number of elements,
    // or other things that make sense for your test.
    expect(document.querySelectorAll('p').length).toBe(0);
  });
});