import React, { FC, memo } from 'react';
import { hot } from 'react-hot-loader';
import { Film } from '../../../../api/tools/typings';
import { Row } from '../../../common/Row/Row';

interface PropsFilmItem {
   filmData: Film;
}

export const FilmItem: FC<PropsFilmItem> = memo(({ filmData }) => {
   return <Row>{filmData.title} {filmData.release_date}</Row>;
});

export default hot(module)(FilmItem);
