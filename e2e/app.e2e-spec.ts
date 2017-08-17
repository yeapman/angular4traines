import { TraineePage } from './app.po';

describe('trainee App', function() {
  let page: TraineePage;

  beforeEach(() => {
    page = new TraineePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
