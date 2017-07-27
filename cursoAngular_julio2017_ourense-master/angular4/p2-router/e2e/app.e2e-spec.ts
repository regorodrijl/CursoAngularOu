import { P2RouterPage } from './app.po';

describe('p2-router App', () => {
  let page: P2RouterPage;

  beforeEach(() => {
    page = new P2RouterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to cat!!');
  });
});
