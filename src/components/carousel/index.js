import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Carousel, Container, Back, Next, CurrentProduct, RecommendProduct, Title } from './style';
import Item from './item';

class index extends Component {
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
            <Back>
              >
            </Back>
            <Next>
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
