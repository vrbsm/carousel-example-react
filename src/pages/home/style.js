import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  `;

export const Header = styled.div`
    order: 1;
    flex: 1 1 1;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  `;

export const Body = styled.div`
    order: 2;
    flex: 1 1 0;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  `;

export const Footer = styled.div`
    order: 3;
    flex: 1 1 1;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  `;