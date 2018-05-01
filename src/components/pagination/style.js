import styled from 'styled-components';
import { primaryColor, secondColor } from './../../utils/colors';


export const Pagination = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1 1 0;
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
    flex-direction: column;
`;
export const RecommendContainer = styled.div`
    display: flex;
    flex: 1 1 0;
    flex-direction: column;
    overflow: hidden;
`;
export const SlickContainer = styled.div`
    display: flex;
    flex-direction: row;
    overflow: hidden;
    flex: 1 1 0;
`;
export const PaginationContainer = styled.div`
    display: flex;
    flex-direction: row;
    overflow: hidden;
    flex: 1 1 0;
`;

export const Title = styled.strong`
  color: ${primaryColor}
  background: ${secondColor};
  padding: 10px;
`;
export const Next = styled.strong`
    font-size: xx-large;
    cursor: pointer;
    flex: 1 1 1;
    display: flex;
    color: ${primaryColor};
    align-self: center;
    padding: 5px;
    `;
export const Back = styled(Next)`
    transform: rotate(180deg);
`;
