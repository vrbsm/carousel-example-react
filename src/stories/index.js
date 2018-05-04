import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Pagination, NotFound } from '../components';
import Recommendation from '../service/api/Recommendation';

storiesOf('Pagination', module)
  .add('with a item and some recommendation', () => (
    <Pagination
      onClickItem={action('clicked')}
      recommendation={Recommendation.recommandationProduct().data.recommendation}
      item={Recommendation.recommandationProduct().data.reference.item}
    />
  ));
storiesOf('NotFound', module)
  .add('with message', () => (<NotFound message="Page not found" />));
