import { AgileInsightsTemplatePage } from './app.po';

describe('AgileInsights App', function() {
  let page: AgileInsightsTemplatePage;

  beforeEach(() => {
    page = new AgileInsightsTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
