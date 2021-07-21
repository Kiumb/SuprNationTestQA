import 'chromedriver';
import { Builder, ThenableWebDriver, WebElement, By, WebElementPromise } from 'selenium-webdriver';
import { Page, NewablePage, WebComponent, WaitCondition } from './';

export class Browser {
  private driver: ThenableWebDriver;
  public constructor(private browserName: string) {
    this.driver = new Builder().forBrowser(browserName).build();
  }

  
  public findElement(selector: string): WebElementPromise {
    return this.driver.findElement(By.css(selector));
  }

  public async navigateBrowser(url: string): Promise<void> {
    console.log('avvio test navigateBrowser toUrl : ' + url );
    await this.driver.navigate().to(url);
    console.log('end navigateBrowser' );
  }

  public scrollToElement(webEle: WebElement){
    console.log('scrollToElement--');
    this.driver.executeScript('arguments[0].scrollIntoView(false);', webEle);
  }

  public findElementByXPath(selector: string): WebElementPromise {
    return this.driver.findElement(By.xpath(selector));
  }


  public async clearCookies(url?: string): Promise<void> {
    if (url) {
      const currentUrl = await this.driver.getCurrentUrl();
      await this.navigateBrowser(url);
      await this.driver.manage().deleteAllCookies();
      await this.navigateBrowser(currentUrl);
    } else {
      await this.driver.manage().deleteAllCookies();
    }
  }

  public async wait(condition: WaitCondition) {
    await this.waitAny(condition);
  }

  public async waitAny(conditions: WaitCondition | WaitCondition[]): Promise<void> {
    const all = (!(conditions instanceof Array)) ? [ conditions ] : conditions;

    await this.driver.wait(async () => {
      for (const condition of all) {
        try {
          if (await condition(this) === true) {
            return true;
          }
          continue;
        } catch (ex) {
          continue;
        }
      }
    });
  }

  public async close(): Promise<void> {
    await this.driver.quit();
  }
}
