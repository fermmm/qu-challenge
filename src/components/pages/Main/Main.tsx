import React, { FC, useEffect } from 'react';
import { hot } from 'react-hot-loader';
import { useFilms } from '../../../api/films';
import { FilmsList } from '../FilmsList/FilmsList';
import { MainContainer } from './Main.styles';

export const Main: FC = () => {
   const [request, doFetch] = useFilms();

   useEffect(() => {
      doFetch();
   }, []);

   return (
      <MainContainer>
         <FilmsList films={request.data?.results} />
      </MainContainer>
   );
};

export default hot(module)(Main);
