import { Cafe1Page } from './app.po';

describe('cafe1 App', () => {
  let page: Cafe1Page;

  beforeEach(() => {
    page = new Cafe1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
