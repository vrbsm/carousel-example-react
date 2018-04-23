import React from 'react';
import PropTypes from 'prop-types';
import { Container, Image, ImageContainer, Name, Price, PriceNumber } from './style';

export default function Item(props) {
  return (
    <Container order={props.order}>
      <ImageContainer>
        <Image src={props.item.imageName} />
      </ImageContainer>
      <Name>{props.item.name}</Name>
      <Price>Por: <PriceNumber>{props.item.price}</PriceNumber></Price>
      {props.item.productInfo &&
      <Price dangerouslySetInnerHTML={{ __html: props.item.productInfo.paymentConditions }} />
      }
    </Container>
  );
}
Item.propTypes = {
  item: PropTypes.object,
  order: PropTypes.number,
};
Item.defaultProps = {
  item: {
    name: '',
    price: '',
    imageName: '',
    productInfo: {},
  },
  order: 0,
};
