import { browser, by, element } from 'protractor';

export class DPracticaCochePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('co-root h1')).getText();
  }
}
