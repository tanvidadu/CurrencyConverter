import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Navigator from './config/routes';
import { Provider }  from 'react-redux';
import { AlertProvider } from './components/Alert';
import store from './config/store';

EStyleSheet.build({
  $primaryblue: '#4F6D7A',
  $primaryorange: '#D57A66',
  $primarygreen: '#00BD9D',
  $primarypurple: '#9E768F',

  $white: '#FFFFFF',
  $border: '#E2E2E2',
  $inputText: '#797977',
  $lightGray: '#F0F0F0',
  $darktext: '#343434',
});

export default () => (
  <Provider store={store}>
    <AlertProvider>
      <Navigator />
    </AlertProvider>
  </Provider>
);

