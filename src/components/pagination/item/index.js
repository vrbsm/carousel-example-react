import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Image,
  ImageContainer,
  Name,
  Price,
  PriceNumber,
} from './style';

class index extends Component {
  render() {
    const { item } = this.props;
    return (
      <Container>
        <ImageContainer>
          <Image src={item.imageName} />
        </ImageContainer>
        <Name>{item.name}</Name>
        <Price>Por: <PriceNumber>{item.price}</PriceNumber></Price>
        {item.productInfo &&
        <Price dangerouslySetInnerHTML={{ __html: item.productInfo.paymentConditions }} />
        }
      </Container>
    );
  }
}
export default index;
index.propTypes = {
  item: PropTypes.object,
};
index.defaultProps = {
  item: {},
};
