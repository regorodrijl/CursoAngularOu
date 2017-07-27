import { browser, by, element } from 'protractor';

export class P2RouterPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cat-root h1')).getText();
  }
}
