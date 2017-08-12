import { ComicAppPage } from './app.po';

describe('comic-app App', () => {
  let page: ComicAppPage;

  beforeEach(() => {
    page = new ComicAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
