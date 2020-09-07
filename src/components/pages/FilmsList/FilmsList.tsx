import React, { FC } from 'react';
import { hot } from 'react-hot-loader';
import { Film } from '../../../api/tools/typings';
import { Column } from '../../common/Column/Column';
import FilmItem from './FilmItem/FilmItem';

interface PropsFilmsList {
   films: Film[];
}

export const FilmsList: FC<PropsFilmsList> = ({ films }) => {
   return (
      <Column>
         {films && films.map(filmData => <FilmItem key={filmData.episode_id} filmData={filmData} />)}
      </Column>
   );
};

export default hot(module)(FilmsList);
