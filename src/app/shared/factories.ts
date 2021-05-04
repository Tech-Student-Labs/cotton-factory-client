import { Film } from '../films/shared/film';

export function filmFactory(title: string = 'The Film Title'): Film {
  const film = new Film();
  film.title = title;
  film.characters = [];
  film.planets = [];
  film.starships = [];
  film.species = [];
  film.episodeId = 1;
  film.openingCrawl = 'Once upon a time, in a galaxy far, far away ...';
  film.director = 'George Lucas';
  film.producer = 'George Lucas';
  film.releaseDate = 'January, 1 1978';
  film.url = '';
  film.created = 'October, 1 1977';
  film.edited = 'June, 1 1978';
  return film;
}
