import { PokeBreederPage } from './app.po';

describe('poke-breeder App', () => {
  let page: PokeBreederPage;

  beforeEach(() => {
    page = new PokeBreederPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
