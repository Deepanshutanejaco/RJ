import styled from 'styled-components';
import { TopBarLeftBtnBackground, White } from 'components/Theme/defaultTheme';
import { TopBarLeftBtn } from 'components/Theme/styleConstants';
import personIcon from '../images/topMenuBar/Person.png';
import personBlackIcon from '../images/topMenuBar/personBack.png';

export const TopBarRightBtnWrapper = styled.div`
    width: ${TopBarLeftBtn.TopBarLeftBtnWidthXl};
    height: 100%;
    margin: 0px;
    padding: 0px;
    float: right;
    background: ${TopBarLeftBtnBackground};
    @media (max-width: 1024px) {
      width:${TopBarLeftBtn.TopBarLeftBtnWidthLg};
    }
    @media (max-width: 768px) {
      width: ${TopBarLeftBtn.TopBarLeftBtnWidthMd};
    }
    @media (max-width: 425px) {
      width: ${TopBarLeftBtn.TopBarLeftBtnWidthSm};
    }
`;

export const TopRightBtn = styled.button`
    background-color: ${TopBarLeftBtnBackground};
    background-image: url(${personIcon});
    background-size: 2.3em 2.3em;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
    border: 0px;
    cursor: pointer;
    @media (max-width: 1366px) {
      background-size: 2em 2em;
    }
    &:hover{
      background-color: ${White};
      background-image: url(${personBlackIcon});
      -webkit-transition: background-color 750ms ease-out;
      -moz-transition: background-color 750ms ease-out;
      -o-transition: background-color 750ms ease-out;
      transition: background-color 750ms ease-out;
    }
    @media (max-width: 425px) {
      background-size: 2em 2em;
    }
`;
