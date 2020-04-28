import React from 'react';
import Text from '../Text';
import {
  Container
} from './style';

export default function (props) {
  return (
    <Container>
      <Text
        as={'h1'}
        text="what 2 do?"
        fontSize={24}
      />
    </Container>
  );
}