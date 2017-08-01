import { DPracticaCochePage } from './app.po';

describe('d-practica-coche App', () => {
  let page: DPracticaCochePage;

  beforeEach(() => {
    page = new DPracticaCochePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to co!!');
  });
});
