import { SpotifyApiPage } from './app.po';

describe('spotify-api App', () => {
  let page: SpotifyApiPage;

  beforeEach(() => {
    page = new SpotifyApiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
