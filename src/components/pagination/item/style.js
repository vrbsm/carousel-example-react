import styled from 'styled-components';
import { primaryColor, red, white } from './../../../utils/colors';

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
  `;
export const ImageContainer = styled.span`
    text-align: center;
    flex: 1 1 1;
    border: 1px solid ${white};
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
