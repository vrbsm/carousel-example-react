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
    super(props);
    this.paginationRef = {};
    this.scrollCont = 0;
  }
  

  nextPagination = () => {
    if(this.paginationRef) {
      const element = ReactDOM.findDOMNode(this.paginationRef);
      const maxScrollLeft = element.scrollWidth - element.clientWidth;
      this.scrollCont = this.scrollCont + 300 > maxScrollLeft ? maxScrollLeft : this.scrollCont + 300;
      ReactDOM.findDOMNode(this.paginationRef).scroll({left: this.scrollCont, behavior: "smooth"});
    }
  };
  
  prevPagination = () => {
    if(this.paginationRef) {
        this.scrollCont = this.scrollCont - 300 > 0 ? this.scrollCont - 300 : 0;
        ReactDOM.findDOMNode(this.paginationRef).scroll({left: this.scrollCont, behavior: "smooth"});
    }
  };

  onClickItem = (detailUrl) => {
      this.props.onClickItem(detailUrl);
  }

  render() {
    const { item, recommendation } = this.props;
    return (
      <Container>
        <CurrentProduct >
          <Title>Você visitou: </Title>
          <Item item={item} onClickItem={this.onClickItem}/>
        </CurrentProduct>
        <RecommendContainer>
          <Title>e talvez se interesse por: </Title>
        <SlickContainer>
          <Back onClick={() => this.prevPagination()}>
            >
          </Back>
          <PaginationContainer ref={(pag) => this.paginationRef = pag }>
            <Pagination >
              {recommendation.map((r) =>
                <Item key={r.businessId}  item={r} onClickItem={this.onClickItem}/>
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
  onClickItem: PropTypes.func.isRequired
};
Item.defaultProps = {
  item: { },
  recommendation: [],
};

export default index;
