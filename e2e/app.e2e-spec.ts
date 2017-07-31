import { ObservablesDemoPage } from './app.po';

describe('observables-demo App', () => {
  let page: ObservablesDemoPage;

  beforeEach(() => {
    page = new ObservablesDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
