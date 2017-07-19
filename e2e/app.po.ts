import { browser, by, element } from 'protractor';

export class CcPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cfs-root h1')).getText();
  }
}
