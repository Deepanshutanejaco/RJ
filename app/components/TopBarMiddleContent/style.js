import styled from 'styled-components';
import { White } from 'components/Theme/defaultTheme';
import { TopBarMiddleWrapper, DigitalOceanLogo } from 'components/Theme/styleConstants';
import images from 'components/images';

export const TopBarMiddleContentWrapper = styled.div`
    width: ${TopBarMiddleWrapper.TopBarMiddleWrapperWidthXl};
    height: 100%;
    margin: 0px;
    padding: 0px;
    float: left;
    background: ${White};
    @media (max-width: 1024px) {
      width: ${TopBarMiddleWrapper.TopBarMiddleWrapperWidthLg};
    }
    @media (max-width: 768px) {
      width: ${TopBarMiddleWrapper.TopBarMiddleWrapperWidthMd};
    }
    @media (max-width: 425px) {
      width: ${TopBarMiddleWrapper.TopBarMiddleWrapperWidthSm};
    }
`;
export const Logo = styled.div`
    float: left;
    width: ${DigitalOceanLogo.DigitalOceanLogoWidthXl};
    height: 100%;
    background-image: url(${images.Digital_Ocean_Logo});
  
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 10.5em auto;
    margin-left: 1em;
    @media (max-width: 1024px) {
      background-size: 8em auto;
      margin-left: 1em;
    }
    @media (max-width: 768px) {
      background-size: 7em auto;
      margin-left: 1em;
    }
    @media (max-width: 425px) {
      width: ${DigitalOceanLogo.DigitalOceanLogoWidthSm};
      background-size: 5em auto;
      margin-left: 0.8em;
    }
`;
export const RightContentWrapper = styled.div`
    width: auto;
    height: 100%;
    float: right;
    @media (max-width: 425px) {
      display: none;
    }
`;
