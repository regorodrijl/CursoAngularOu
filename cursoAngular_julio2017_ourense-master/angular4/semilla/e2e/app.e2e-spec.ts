import { SemillaPage } from './app.po';

describe('semilla App', () => {
  let page: SemillaPage;

  beforeEach(() => {
    page = new SemillaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
