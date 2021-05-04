import responseJson from './api-response.json';
import { Film } from '../../films/shared/film';

// @ts-ignore
export const apiFilmResults: Film[] = responseJson.results;
