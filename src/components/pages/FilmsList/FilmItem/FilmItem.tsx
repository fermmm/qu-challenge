import React, { FC } from 'react';
import { hot } from 'react-hot-loader';
import { Film } from '../../../../api/tools/typings';
import { Row } from '../../../common/Row/Row';

interface PropsFilmItem {
   filmData: Film;
}

export const FilmItem: FC<PropsFilmItem> = ({ filmData }) => {
   return <Row>{filmData.title}</Row>;
};

export default hot(module)(FilmItem);
