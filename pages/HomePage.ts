import { WebComponent, Browser, Page, findBy, Button, TextInput, elementIsVisible, pageHasLoaded, LinkButton, findByxpath } from '../lib';
import config from '../config';
import { AmazonHomePage } from './AmazonHomePage';

export class HomePage extends Page {
  constructor(browser: Browser) {
    super(browser);
    this.setUrl(`${config.baseUrl}/`);
  }

  @findByxpath('//a[normalize-space()="Today\'s Deals"]')
  public AmazonLinkTodayDeals: LinkButton;

  public loadCondition() {
    return elementIsVisible(() => this.AmazonLinkTodayDeals);
  }
}
