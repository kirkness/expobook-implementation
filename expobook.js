import React from 'react';
import createExpobook from 'expobook';
import { Text } from 'react-native';

const expobook = createExpobook();

expobook.add('Some Text', () => <Text>some text, blah blah blah</Text>);

export default expobook.build();
