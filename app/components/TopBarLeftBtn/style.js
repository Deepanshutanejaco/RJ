import styled from 'styled-components';
import { TopBarLeftBtnBackground, White } from 'components/Theme/defaultTheme';
import { TopBarLeftBtn } from 'components/Theme/styleConstants';
import menuIcon from '../images/topMenuBar/menu.png';
import menuBlackIcon from '../images/topMenuBar/menuBlack.png';

export const TopBarLeftBtnWrapper = styled.div`
    width: ${TopBarLeftBtn.TopBarLeftBtnWidthXl};
    height: ${TopBarLeftBtn.TopBarLeftBtnHeight};
    margin: 0px;
    padding: 0px;
    float: left;
    background: ${TopBarLeftBtnBackground};
    @media (max-width: 1024px) {
      width: ${TopBarLeftBtn.TopBarLeftBtnWidthLg};
      height: ${TopBarLeftBtn.TopBarLeftBtnHeight};
    }
    @media (max-width: 768px) {
      width: ${TopBarLeftBtn.TopBarLeftBtnWidthMd};
      height: ${TopBarLeftBtn.TopBarLeftBtnHeight};
    }
    @media (max-width: 425px) {
      width: ${TopBarLeftBtn.TopBarLeftBtnWidthSm};
      height: ${TopBarLeftBtn.TopBarLeftBtnHeight};
    }
    `;

export const TopLeftMenuBtn = styled.button`
    background-color: ${TopBarLeftBtnBackground};
    background-image: url(${menuIcon});
    background-size: 2.6em 2.6em;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
    border: 0px;
    cursor: pointer;
  &:hover{
    background-color: ${White};
    background-image: url(${menuBlackIcon});
    -webkit-transition: background-color 750ms ease-out;
    -moz-transition: background-color 750ms ease-out;
    -o-transition: background-color 750ms ease-out;
    transition: background-color 750ms ease-out;
  }
  @media (max-width: 425px) {
    background-size: 2.6em 2.6em;
  }
  `;
