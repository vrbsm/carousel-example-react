import React, { Component } from 'react';
import { Carousel } from '../../components';
import { Container, Header, Footer, Body } from './style';
import Recommendation from '../../service/api/Recommendation';

class index extends Component {
  
  state = {
    reference: {},
    recommendation: []
  }
  
  componentDidMount() {
    Recommendation.recommendationProduct()
      .then((response) => {
        this.setState({
          recommendation: response.recommendation,
          reference: response.reference.item
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const { reference, recommendation } = this.state;
    return (
      <Container>
        <Header>
          <h1>Welcome</h1>
        </Header>
        <Body>
        This is my challenge. My component is bellow
        </Body>
        <Footer>
          <Carousel item={reference} recommendation={recommendation} />
        </Footer>
      </Container>
    );
  }
}

export default index;
