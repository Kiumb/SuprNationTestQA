import { TextInput, Button, Browser, Page, findBy, elementIsPresent, pageHasLoaded, findByxpath, elementIsVisible, WebComponent, LinkButton, EditText } from '../lib';
import { HomePage } from '.';
import config from '../config';

export class AmazonHomePage extends Page {

  @findByxpath('//a[@id=\'nav-logo-sprites\']')
  public AmazonSkipLocation: LinkButton;

  @findByxpath('//a[normalize-space()="Today\'s Deals"]')
  public AmazonLinkTodayDeals: LinkButton|any;

  @findByxpath('//input[@id=\'nav-search-submit-button\']')
  public AmazonSearchBtn: Button;

  @findByxpath('//input[@id=\'twotabsearchtextbox\']')
  public AmazonSearchBox: TextInput;

  @findByxpath('//input[@id=\'twotabsearchtextbox\']')
  public AmazonSearchBox2: EditText;

  @findByxpath('//a[contains(text(),\'Prime Early Access Deals\')]')
  public AmazonPrimeEarlyAccess: LinkButton|any;
  

  @findByxpath('//a[normalize-space()="Today\'s Deals"]')
  public TodayBtn: Button|any;
  constructor(browser: Browser) {
    super(browser);
    this.setUrl(`${config.baseUrl}/`);
    console.log('Amazon page...............');
  }

  private delay(ms: number) {
    return new Promise( (resolve) => setTimeout(resolve, ms) );
  }

  public loadCondition() {
    console.log('loadCondition----------------');
    return elementIsPresent(() => this.TodayBtn);
  }

  // TEST 1 FILTER FOR PRIME EARLY ACCESS
  public async test1AmazonSuprNation(text: string) {

    console.log('testAmazonSuprNation 0 click Amazon Home');
    await this.clickSkipLovation(() => this.AmazonSkipLocation);
    // await this.AmazonSkipLocation.click();

    console.log('testAmazonSuprNation 1 Click Today Deals');
    await this.AmazonLinkTodayDeals.click();
    // await new Promise((f) => setTimeout(f, 10000));

    console.log('testAmazonSuprNation 2 click Prime Early Access');
    this.browser.scrollToElement(this.AmazonPrimeEarlyAccess);
    await this.AmazonPrimeEarlyAccess.click();

    console.log('testAmazonSuprNation 2 check if all elements are "prime early deals"');

    //await new Promise( (f) => setTimeout(f, 3000));
    await this.browser.wait(pageHasLoaded(AmazonHomePage));
  }

  // TEST 2 SEARCH FOR TYPESCRIPT
  public async test2AmazonSuprNation(text: string) {
    console.log('testAmazonSuprNation 0 click Amazon Home');
    await this.clickSkipLovation(() => this.AmazonSkipLocation);
    //await this.AmazonSkipLocation.click();

    console.log('enter typescript on searchbox');
    await this.searchForTypescript('Typescript');

    //await new Promise((f) => setTimeout(f, 1000));
    console.log('testAmazonSuprNation 3 Search Btn');
    await this.AmazonSearchBtn.click();

    console.log('testAmazonSuprNation 4 select the third result');

    //await new Promise( (f) => setTimeout(f, 3000));
    await this.browser.wait(pageHasLoaded(AmazonHomePage));
  }

  private async clickTodayDeals(locator: () => WebComponent): Promise<void> {
    console.log('click today deals');
    await this.AmazonLinkTodayDeals.click();
    console.log(' end click today deals ');
    await this.browser.wait(elementIsVisible(locator));
    // await locator().click();
  }

  private async clickSkipLovation(locator: () => WebComponent): Promise<void> {
    console.log('click today deals');
    await this.AmazonSkipLocation.click();
    console.log(' end click today deals ');
    await this.browser.wait(elementIsVisible(locator));
    // await locator().click();
  }

  private async clickSearchBtn(locator: () => WebComponent): Promise<void> {
    console.log('click search button');
    await this.AmazonSearchBtn.click();
    // console.log('click today deals');
    await this.browser.wait(elementIsVisible(locator));
    await locator().click();
  }

  private async searchTodayDeals(locator: () => WebComponent): Promise<void> {
    console.log('search for typescript');
    //await this.AmazonSearchBox2.sendText('Typescript');
    //await this.AmazonSearchBox.sendText('Typescript');
    console.log('endSearch');
    // await this.browser.wait(elementIsVisible(locator));
    // await locator().sendKeysC('Typescript’');
  }

  public async searchForTypescript(keyword: string) {
    await this.AmazonSearchBox.type(keyword);
  }

  public async signInAsJonSnow() {
   // this.browser.findElement(By.xpath("//*[text()[contains(.,'foobar')]]"));
    await this.signInAs('jon_qvfhyum_snow@tfbnw.net', 'jon_qvfhyum_snow');
  }

  public async signInAs(email: string, password: string) {

    await this.browser.wait(pageHasLoaded(HomePage));
  }

}
