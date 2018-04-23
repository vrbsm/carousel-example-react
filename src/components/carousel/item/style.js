import styled from 'styled-components';
import { red } from './../../../utils/colors';

export const Container = styled.div`
  width: 213px;
  height: 300px;
  display: flex;
  flex-flow: column wrap;
  margin-left: 10px;
  margin-right: 10px;
  order: ${props => props.order}
  transition: ${props => (props.moving ? 'none' : 'transform 1s ease')};
  transform: ${(props) => {
    if (!props.moving) { return 'translateX(-100px)'; }
    if (props.direction === 'prev') { return 'translateX(calc(2 * (-80%)))'; }
    return 'translateX(0%)';
  }};
  `;

export const ImageContainer = styled.span`
    text-align: center;
`;
export const Image = styled.img`
    width: 150px;
    height: 150px;
`;

export const Name = styled.strong`
    display: block;
    font-weight: normal;
    margin-bottom: 6px;
    white-space: normal;
    font-size: 12px;
    overflow: hidden;
  `;

export const Price = styled.strong`
  color: ${red}
  font-size: 12px;
  `;
export const PriceNumber = styled(Price)`
  font-size: 18px;
  font-weight: normal;
  `;
