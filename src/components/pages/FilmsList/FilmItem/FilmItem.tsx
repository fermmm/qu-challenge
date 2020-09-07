import React, { FC, memo } from 'react';
import { hot } from 'react-hot-loader';
import { Film } from '../../../../api/tools/typings';
import { Row } from '../../../common/Row/Row';
import { FilmItemContainer } from './FilmItem.styles';

interface PropsFilmItem {
   filmData: Film;
}

export const FilmItem: FC<PropsFilmItem> = memo(({ filmData }) => {
   return (
      <FilmItemContainer>
         <Row>{filmData.title}</Row>
      </FilmItemContainer>
   );
});

export default hot(module)(FilmItem);
