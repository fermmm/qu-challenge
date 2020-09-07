// tslint:disable: typedef
import styled from 'styled-components';

export const FilmItemContainer = styled('div')`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   height: 70px;
   margin-bottom: 20px;
   cursor: pointer;
   user-select: none;
   font-size: ${props => props.theme.fonts.size1};
   background-color: ${props => props.theme.colors.background2};
   box-shadow: ${props => props.theme.shadows.elevation1};
   border-radius: ${props => props.theme.borders.borderRadius1};
`;
