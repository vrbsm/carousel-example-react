import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Carousel,
  Container,
  Back, Next,
  CurrentProduct,
  RecommendProduct,
  Title,
} from './style';
import Item from './item';

class index extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      position: 0
    }
  }
  handleOrder = (index) => {
    const { position } = this.state;
    const { recommendation } = this.props;
    const numItems = recommendation.length || 1;
    if (index - position < 0) {
      return numItems - Math.abs(index - position)
    }
    return index - position;
  }
  
  nextCarousel = () => {
    console.log(this.state);
    const { position } = this.state;
    const { recommendation } = this.props;
    const numItems = recommendation.length || 1;
    this.setState({
      position: position === numItems - 1 ? 0 : position + 1
    })
  };
  prevCarousel = () => {
    console.log(this.state);
    const { position } = this.state;
    const { recommendation } = this.props;
    const numItems = recommendation.length || 1;
    this.setState({
      position: position === 0 ? (numItems - 1) : position - 1
    })
  };
  
  render() {
    const { item, recommendation } = this.props;
    return (
      <Container>
        <CurrentProduct>
          <Title>Você visitou: </Title>
          <Item item={item} />
        </CurrentProduct>
        <RecommendProduct>
          <Title>e talvez se interesse por: </Title>
          <Carousel>
            <Back onClick={() => this.prevCarousel()}>
              >
            </Back>
            {recommendation.map((r, index) =>
                <Item key={r.businessId} order={this.handleOrder(index)} item={r} />
            )}
            <Next onClick={() => this.nextCarousel()}>
              >
            </Next>
          </Carousel>
        </RecommendProduct>
      </Container>
    );
  }
}
Item.propTypes = {
  item: PropTypes.object,
  recommendation: PropTypes.array,
};
Item.defaultProps = {
  item: { },
  recommendation: [],
};

export default index;
