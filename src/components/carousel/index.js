import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Carousel,
  Container,
  Back,
  Next,
  CurrentProduct,
  RecommendProduct,
  RecommendContainer,
  Title,
} from './style';
import Item from './item';

class index extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      position: 0,
      moving: true,
      direction: '',
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
    const { position } = this.state;
    const { recommendation } = this.props;
    const numItems = recommendation.length || 1;
    this.moveCarousel('next', position === numItems - 1 ? 0 : position + 1);
  };
  
  prevCarousel = () => {
    const { position } = this.state;
    const { recommendation } = this.props;
    const numItems = recommendation.length || 1;
  
    this.moveCarousel('prev', position === 0 ? (numItems - 1) : position - 1);
  };
  
  moveCarousel = (direction, position) => {
    this.setState({
      moving: true,
      direction,
      position
    });
    setTimeout(() => {
      this.setState({
        moving: false
      })
    }, 10);
  };
  
  render() {
    const { item, recommendation } = this.props;
    const { moving, direction } = this.state;
    return (
      <Container>
        <CurrentProduct>
          <Title>Você visitou: </Title>
          <Item item={item} moving={true}/>
        </CurrentProduct>
        <RecommendContainer>
          <Back onClick={() => this.prevCarousel()}>
            >
          </Back>
          <RecommendProduct>
            <Title>e talvez se interesse por: </Title>
            <Carousel>
              {recommendation.map((r, index) =>
                <Item key={r.businessId} order={this.handleOrder(index)} item={r} moving={moving}
                      direction={direction}/>
              )}
              
            </Carousel>
          </RecommendProduct>
          <Next onClick={() => this.nextCarousel()}>
            >
          </Next>
        </RecommendContainer>
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
