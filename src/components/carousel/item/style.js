import styled from 'styled-components';
import { primaryColor, red } from './../../../utils/colors';

export const Container = styled.div`
  width: 213px;
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
   &:hover {
    color: ${primaryColor};
    span{
        border: 1px solid ${primaryColor};
    }
  }
  order: ${props => props.order}
  transition: ${props => (props.moving ? 'none' : 'transform 0.5s ease-in 0s')};
  transform: ${(props) => {
    if (!props.moving) { return 'translateX(-110%)'; }
    if (props.direction === 'prev') { return 'translateX(calc(2 * (-110%)))'; }
    return 'translateX(0%)';
  }};
  `;

export const ImageContainer = styled.span`
    text-align: center;
    flex: 1 1 1;
`;
export const Image = styled.img`
    width: 150px;
    height: 150px;
`;

export const Name = styled.strong`
    font-weight: normal;
    white-space: normal;
    font-size: 12px;
    overflow: hidden;
    flex: 1 1 1;
  `;

export const Price = styled.strong`
  color: ${red}
  font-size: 12px;
  `;
export const PriceNumber = styled(Price)`
  font-size: 18px;
  font-weight: normal;
  `;
