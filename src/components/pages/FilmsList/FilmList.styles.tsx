// tslint:disable: typedef
import styled from 'styled-components';

export const FilmListContainer = styled('div')`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   padding: 30px;
   width: 100%;
   max-width: 650px;
`;

export const SortControlsContainer = styled('div')`
   display: flex;
   flex-direction: row;
   margin-bottom: 20px;
`;

export const SortButton = styled('button')`
   margin: 0 6px;
   cursor: pointer;
`;
