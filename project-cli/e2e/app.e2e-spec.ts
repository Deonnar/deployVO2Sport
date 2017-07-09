import { ProjectCliPage } from './app.po';

describe('project-cli App', () => {
  let page: ProjectCliPage;

  beforeEach(() => {
    page = new ProjectCliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
