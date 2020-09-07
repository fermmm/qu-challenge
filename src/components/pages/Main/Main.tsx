import React, { FC, useEffect } from 'react';
import { hot } from 'react-hot-loader';
import { useFilms } from '../../../api/films';
import { Column } from '../../common/Column/Column';
import { FilmsList } from '../FilmsList/FilmsList';

export const Main: FC = () => {
   const [request, doFetch] = useFilms();

   useEffect(() => {
      doFetch();
   }, []);

   return (
      <Column>
         <FilmsList films={request.data?.results} />
      </Column>
   );
};

export default hot(module)(Main);
