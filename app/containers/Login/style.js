import styled from 'styled-components';
import backgroundimage from '../../components/images/bg.jpg';

export const Hero = styled.section`
    background-image: url(${backgroundimage});
    background-size: cover;
    background-position: center center;
    min-height: 100%;
    min-width: 100%;
    width: auto;
    height: auto;
    margin: 0;
    position: absolute;


    &:after {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: block;
    left: 0;
    top: 0;
    content: "";
    background-color: rgba(0, 0, 0, 0.4);
}
`;

export const HeroContainer = styled.div`
    z-index: 3;
    position: relative;
 `;

export const HeroCard =styled.div`
    background: rgba(0,0,0,0.7);

`
export const CardBlock= styled.div`
@media (min-width:576px){
    section{
        padding: 40px 0px;
    }
    .hero .card .card-block{
        padding-left: 4rem;
        padding-right: 4rem;
    }
}

`