import { UseHttpRequest, useHttpRequest } from './tools/httpRequest';
import { Film, SwapiResult } from './tools/typings';

export const useFilms = (): UseFilms => {
   const [request, doFetch] = useHttpRequest<SwapiResult<Film>>();
   return [request, () => doFetch(`${process.env.SERVER_URL}/films/`)];
};

export type UseFilms = [request: UseHttpRequest<SwapiResult<Film>>, doFetch: () => void];
