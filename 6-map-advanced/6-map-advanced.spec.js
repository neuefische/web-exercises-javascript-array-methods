import { showTitles, tvShowsReduced, showTitlesRated } from './exercise';

describe('6-map-advanced', () => {
  it('should have a new array with only the show titles', () => {
    const expectedShowTitles = [
      'True Detective',
      'The Boys',
      'Game of Thrones',
      'Mr. Robot',
      'Chernobyl',
      'Money Heist',
      'Dark',
    ];
    expect(showTitles).toEqual(expectedShowTitles);
  });

  it('should have a new array with objects including only the title and the rating of the shows', () => {
    const expectedTvShowsReduced = [
      { title: 'True Detective', rating: 9 },
      { title: 'The Boys', rating: 8.7 },
      { title: 'Game of Thrones', rating: 9.3 },
      { title: 'Mr. Robot', rating: 8.5 },
      { title: 'Chernobyl', rating: 9.4 },
      { title: 'Money Heist', rating: 8.3 },
      { title: 'Dark', rating: 8.8 },
    ];
    expect(tvShowsReduced).toEqual(expectedTvShowsReduced);
  });

  it('should have a new array with the titles in uppercase for highly rated and lower case for lower rated shows', () => {
    const expectedShowTitlesRated = [
      'TRUE DETECTIVE',
      'the boys',
      'GAME OF THRONES',
      'mr. robot',
      'CHERNOBYL',
      'money heist',
      'dark',
    ];
    expect(showTitlesRated).toEqual(expectedShowTitlesRated);
  });
});
