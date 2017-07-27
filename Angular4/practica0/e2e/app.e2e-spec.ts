import { Practica0Page } from './app.po';

describe('practica0 App', () => {
  let page: Practica0Page;

  beforeEach(() => {
    page = new Practica0Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
