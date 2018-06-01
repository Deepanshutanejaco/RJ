import styled from 'styled-components';
import { TopBar } from 'components/Theme/styleConstants';

export const TopMenuBarWrapper = styled.div`
    width: 100%;
    height: ${TopBar.TopBarHeightXl};
    margin: 0px;
    padding: 0px;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 100;
    @media (max-width: 1366px) {
    height: ${TopBar.TopBarHeightLp};
    }
    @media (max-width: 1024px) {
    height: ${TopBar.TopBarHeightLg};
    }
    @media (max-width: 768px) {
    height: ${TopBar.TopBarHeightMd};
    }
    @media (max-width: 425px) {
    height: ${TopBar.TopBarHeightSm};
    }
  `;

export default TopMenuBarWrapper;
