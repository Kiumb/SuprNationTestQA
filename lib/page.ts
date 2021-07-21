import { By } from 'selenium-webdriver';
import { Browser, WaitCondition } from './';

export interface NewablePage<T extends Page> {
  new(browser: Browser): T;
}

export abstract class Page {
  private url: string|any;

  protected setUrl(url: string) {
    this.url = url;
  }

  public async navigatePage(): Promise<void> {
    console.log('navigate page' + this.url );
    await this.browser.navigateBrowser(this.url);
    await this.browser.wait(this.loadCondition());
  }

  public async navigate12(): Promise<void> {
    console.log('Navigate 12' + this.url);
    await this.browser.navigateBrowser(this.url);
    console.log('end Navigate 12');
  }

  public abstract loadCondition(): WaitCondition;

  public constructor(protected browser: Browser) {

  }
}
