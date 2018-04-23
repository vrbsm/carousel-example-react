import styled from 'styled-components';
import { primaryColor } from './../../utils/colors';


export const Carousel = styled.div`
    display: flex;
    margin: 0 0 20px 20px;
    flex-direction: row;
    width: 100%;
`;
export const Container = styled.div`
    width: 100%;
    max-height: 300px;
    flex-direction: row;
    display: flex;
`;
export const CurrentProduct = styled.div`
    flex: 1 1 1;
    display: flex;
    padding: 5px;
    flex-direction: column;
`;
export const RecommendProduct = styled.div`
    display: flex;
    flex: 1 1 0;
    flex-direction: column;
    overflow: hidden;
`;
export const Title = styled.strong`
  color: ${primaryColor}
`
const Arrow = styled.strong`
    position: absolute;
    width: 30px;
    height: 30px;
    text-align: center;
    font-size: 25px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 20px;
    color: ${primaryColor};
    line-height: 30px;
    margin-top: 85px;
    z-index: 1000;`
export const Back = styled(Arrow)`
    transform: rotate(180deg);
`;

export const Next = styled(Arrow)`
    left: 680px;
`;