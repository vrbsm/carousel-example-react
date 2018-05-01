import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {
  Pagination,
  Container,
  Back,
  Next,
  CurrentProduct,
  RecommendContainer,
  PaginationContainer,
  SlickContainer,
  Title,
} from './style';
import Item from './item';

class index extends Component {

  constructor(props){
    super(props)
    this.contPagination = 0;
  }

  isInViewport = (element) => {
    if(element.offsetTop<window.innerHeight &&
      element.offsetTop>-element.offsetHeight
      && element.offsetLeft>-element.offsetWidth
      && element.offsetLeft<window.innerWidth){
      return true;
    } else {

      return false;
    }
  }

  nextPagination = () => {
    this.contPagination+=1;
    let page = `pagination${this.contPagination}`;
    if(this.refs[page]) {
      ReactDOM.findDOMNode(this.refs[page]).scrollIntoView({behavior: "smooth"});
      if(this.isInViewport(ReactDOM.findDOMNode(this.refs[page]))) {
        this.nextPagination();
      }
    }
  };
  
  prevPagination = () => {
    this.contPagination = 0;
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
          <Title>e talvez se interesse por: </Title>
        <SlickContainer>
          <Back onClick={() => this.prevPagination()}>
            >
          </Back>
          <PaginationContainer>
            <Pagination>
              {recommendation.map((r, index) =>
                <Item key={r.businessId}  ref={`pagination${index}`} item={r}/>
              )}
            </Pagination>
          </PaginationContainer>
          <Next onClick={() => this.nextPagination()}>
            >
          </Next>
        </SlickContainer>
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
