import styled from 'styled-components';
import { TopBarLeftBtnBackground, White } from 'components/Theme/defaultTheme';

export const TopMenuButtonWrapper = styled.button`
    background-position: center;
    background-color: ${White};
    width: 4.6em;
    height: 100%;
    border: 0px;
    padding: 0px;
    cursor: pointer;
    &:hover{
      border-bottom: 3px solid ${TopBarLeftBtnBackground};
    }
    >img{
      width: 1.95em;
      height: auto;
    }
    @media (max-width: 1366px) {
      width: 4.2em;
      > img{
        width: 1.9em;
      }
    }
    @media (max-width: 768px) {
      width: 4.2em;
      > img{
        width: 1.7em;
      }
    }
    @media (max-width: 425px) {
      width: 2.9em;
      > img{
        width: 1.6em;
      }
    }
`;

export default TopMenuButtonWrapper;
