import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import CurrencyList from './screens/CurrencyList';

EStyleSheet.build({
  $primaryblue: '#4F6D7A',
  $white: '#FFFFFF',
  $border: '#E2E2E2',
  $inputText: '#797977',
  $lightGray: '#F0F0F0',
  $darktext: '#343434',
});

export default () => <CurrencyList />;
