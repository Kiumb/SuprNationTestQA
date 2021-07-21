import { GoogleSignInPage } from './GoogleSignInPage';
import { HomePage } from './HomePage';
import { Browser } from '../lib';
import { AmazonHomePage } from './AmazonHomePage';

export {
  HomePage,
  AmazonHomePage,
};

export class AllPages {

    public amazonTestSuprNation: AmazonHomePage;
    public home: HomePage;

    constructor(public browser: Browser) {
      this.home = new HomePage(browser);
      this.amazonTestSuprNation = new AmazonHomePage(browser);
    }

    public async dispose(): Promise<void> {
      await this.browser.close();
    }
}
