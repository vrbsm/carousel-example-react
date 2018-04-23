import styled from 'styled-components';
import { red } from './../../../utils/colors';

export const Container = styled.div`
  width: 213px;
  height: 300px;
  display: flex;
  flex-flow: column wrap;
  `;

export const ImageContainer = styled.span`
    text-align: center;
`
export const Image = styled.img`
    width: 150px;
    height: 150px;
`

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