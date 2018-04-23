import styled from 'styled-components';
import { primaryColor } from './../../utils/colors';


export const Carousel = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;
export const Container = styled.div`
    width: 100%;
    height: 300px;
    flex-direction: row;
    display: flex;
`;
export const CurrentProduct = styled.div`
    flex: 1 1 1;
    display: flex;
    padding: 5px;
    flex-direction: column;
`;
export const RecommendContainer = styled.div`
    display: flex;
    flex: 1 1 0;
    flex-direction: row;
    overflow: hidden;
`;

export const RecommendProduct = styled(RecommendContainer)`
    flex-direction: column;
`;
export const Title = styled.strong`
  color: ${primaryColor}
`;
export const Next = styled.strong`
    width: 30px;
    height: 30px;
    text-align: center;
    font-size: xx-large;
    cursor: pointer;
    flex: 1 1 1;
    display: flex;
    color: ${primaryColor};
    align-self: center;
    padding: 10px;
    `;
export const Back = styled(Next)`
    transform: rotate(180deg);
`;
