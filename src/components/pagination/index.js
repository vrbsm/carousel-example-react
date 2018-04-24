import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {
  Pagination,
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
  
  nextPagination = () => {
    if(this.refs['pagination9'])
      ReactDOM.findDOMNode(this.refs['pagination9']).scrollIntoView({behavior: "smooth", block: "end"});
  };
  
  prevPagination = () => {
    if(this.refs['pagination0'])
      ReactDOM.findDOMNode(this.refs['pagination0']).scrollIntoView({behavior: "smooth"});
  };
  
  render() {
    const { item, recommendation } = this.props;
    return (
      <Container>
        <CurrentProduct>
          <Title>Você visitou: </Title>
          <Item item={item} />
        </CurrentProduct>
        <RecommendContainer>
          <Back onClick={() => this.prevPagination()}>
            >
          </Back>
          <RecommendProduct>
            <Title>e talvez se interesse por: </Title>
            <Pagination>
              {recommendation.map((r, index) =>
                <Item key={r.businessId}  ref={`pagination${index}`} item={r}/>
              )}
              
            </Pagination>
          </RecommendProduct>
          <Next onClick={() => this.nextPagination()}>
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
