import React, { Component } from 'react';
import { Carousel } from '../../components';
import { Container, Header, Footer, Body } from './style';
import Recommendation from '../../service/api/Recommendation';

class index extends Component {
  componentDidMount() {
    Recommendation.recommendationProduct()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <Container>
        <Header>
          <h1>Welcome to React</h1>
        </Header>
        <Body>
        To get started, edit <code>src/App.js</code> and save to reload.
        </Body>
        <Footer>
          <Carousel />
        </Footer>
      </Container>
    );
  }
}

export default index;
