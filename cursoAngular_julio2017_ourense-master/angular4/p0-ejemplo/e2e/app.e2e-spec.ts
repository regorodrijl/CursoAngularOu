import { P0EjemploPage } from './app.po';

describe('p0-ejemplo App', () => {
  let page: P0EjemploPage;

  beforeEach(() => {
    page = new P0EjemploPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
