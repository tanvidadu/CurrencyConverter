import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

export default EStyleSheet.create({
  $buttonBackgroundColorBase: '$white',
  $buttonBackgroundColorModifier: 0.3,
  container: {
    backgroundColor: '$white',
    width: '90%',
    height: INPUT_HEIGHT,
    borderRadius: BORDER_RADIUS,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 11,
  },
  containerDisabled: {
    backgroundColor: '$lightGray',
  },
  buttonContainer: {
    height: INPUT_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$white',
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 20,
    paddingHorizontal: 16,
    color: '$primaryblue',
  },
  border: {
    height: INPUT_HEIGHT,
    width: StyleSheet.hairlinewidth,
    backgroundColor: '$border',
  },
  input: {
    height: INPUT_HEIGHT,
    fontSize: 18,
    flex: 1,
    paddingHorizontal: 8,
    color: '$inputText',  	
  },
});
