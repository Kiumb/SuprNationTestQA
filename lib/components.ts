import { promise, WebElementPromise } from 'selenium-webdriver';

export class WebComponent {
  constructor(protected element: WebElementPromise, public selector: string) { }

  public async click() {
    try {
      return await this.element.click();
    } catch (clickErr) {
      try {
        await this.element.getDriver().executeScript('arguments[0].click();', this.element);
      } catch (jsErr) {
        throw clickErr;
      }
    }
  }

  public async isDisplayed() {
    try {
      return await this.element.isDisplayed();
    } catch (ex) {
      return false;
    }
  }

  public async getText() {
    return await this.element.getText();
  }
}

export class Button extends WebComponent {
  constructor(element: WebElementPromise, selector: string) {
    super(element, selector);
  }

  public async isDisabled() {
    try {
      return await this.element.getAttribute('disabled') === 'disabled';
    } catch (ex) {
      return false;
    }
  }
}

export class LinkButton extends WebComponent {
  constructor(element: WebElementPromise, selector: string) {
    super(element, selector);
  }

  public async isClickable() {
    try {
      return await this.element.getAttribute('clickable') === 'clickable';
    } catch (ex) {
      return false;
    }
  }
}

export class TextInput extends WebComponent {
    constructor(element: WebElementPromise, selector: string) {
    super(element, selector);
  }

  public type(text: string) {
    console.log('look for TextInput mex : '+ text);
    return this.element.sendKeys(text);
  }
}

export class EditText extends WebComponent {
    constructor(element: WebElementPromise, selector: string) {
    super(element, selector);
  }

  public sendText(text: string) {
    console.log('look for EditText mex : ' + text);
    this.element.sendKeys(text);
  }
}
