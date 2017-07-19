import { CcPage } from './app.po';

describe('cc App', () => {
  let page: CcPage;

  beforeEach(() => {
    page = new CcPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to cfs!');
  });
});
