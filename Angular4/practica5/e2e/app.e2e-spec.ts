import { Practica2Page } from './app.po';

describe('practica2 App', () => {
  let page: Practica2Page;

  beforeEach(() => {
    page = new Practica2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
