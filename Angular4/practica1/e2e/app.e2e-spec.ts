import { Practica1Page } from './app.po';

describe('practica1 App', () => {
  let page: Practica1Page;

  beforeEach(() => {
    page = new Practica1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
