import React, { FC, memo, useEffect, useState } from 'react';
import { hot } from 'react-hot-loader';
import { firstBy } from 'thenby';
import { Film } from '../../../api/tools/typings';
import { Column } from '../../common/Column/Column';
import { Row } from '../../common/Row/Row';
import FilmItem from './FilmItem/FilmItem';

interface PropsFilmsList {
   films: Film[];
}

export const FilmsList: FC<PropsFilmsList> = memo(({ films }) => {
   const [filmsSorted, setFilmsSorted] = useState(films);
   const [sortBy, setSortBy] = useState<keyof Film>();

   useEffect(() => {
      setFilmsSorted(sortList(films));
   }, [films, sortBy]);

   /**
    * Here I could implement my own sort function but I decided to use
    * the "thenby" module because in my opinion it's a better demonstration
    * since this module is very powerful to implement very sophisticated
    * composed sorting in no time:
    * https://github.com/Teun/thenBy.js/tree/master
    */
   const sortList = (filmsUnsorted: Film[]) =>
      filmsUnsorted && [...filmsUnsorted].sort(firstBy(f => f[sortBy]));

   return (
      <Column>
         <Row>
            Sort by:
            <button onClick={() => setSortBy('title')}>Title</button>
            <button onClick={() => setSortBy('release_date')}>Release Date</button>
         </Row>
         {filmsSorted &&
            filmsSorted.map(filmData => <FilmItem key={filmData.episode_id} filmData={filmData} />)}
      </Column>
   );
});

export default hot(module)(FilmsList);
