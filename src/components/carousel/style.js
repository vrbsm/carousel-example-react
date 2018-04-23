import styled from 'styled-components';
import { primaryColor } from './../../utils/colors';


export const Carousel = styled.div`
    overflow: hidden;
    position: relative;
    margin-top: 3px;
    height: 300px;
    width: 100%;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
`;
export const Container = styled.div`
    overflow: hidden;
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
`;
export const Title = styled.strong`
  color: ${primaryColor}
`
export const List = styled.ul`

`
export const Item = styled.li`
    text-align: center;
    color: white;
    position: absolute;
    transition: height 1s, width 1s, left 1s, margin-top 1s, line-height 1s, background-color 1s;
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
