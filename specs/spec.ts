import { Browser, ensure } from '../lib';
import { specification, when, action, then } from '../lib/mocha-bdd';
import { AllPages } from '../pages';

specification('Users can submit ideas', () => {
  let pages: AllPages;
  action(async () => {
    pages = new AllPages(new Browser('chrome'));
    await pages.home.navigatePage();
  });

  when('user sign in', async () => {
    action(async () => {
      //await pages.home.signInWithGoogle();
      //await pages.google.signInAsDarthVader();
    });

    then('it should display correct user name', async () => {
      //await ensure(pages.home.UserMenu).textIs('Darth Vader');
    });

  });

  after(async () => {
    await pages.dispose();
  });
});
