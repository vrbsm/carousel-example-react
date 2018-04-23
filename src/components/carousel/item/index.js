import React from 'react';
import PropTypes from 'prop-types';
import { Container, Image, ImageContainer, Name, Price, PriceNumber } from './style';

export default function Item({ item, order, moving, direction }) {
  return (
    <Container order={order} moving={moving} direction={direction}>
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
Item.propTypes = {
  item: PropTypes.object,
  order: PropTypes.number,
  moving: PropTypes.bool,
  direction: PropTypes.string,
};
Item.defaultProps = {
  item: {
    name: '',
    price: '',
    imageName: '',
    productInfo: {},
  },
  order: 0,
  moving: true,
  direction: '',
};
