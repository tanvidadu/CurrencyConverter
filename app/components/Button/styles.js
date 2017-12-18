import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: '$white',
    fontWeight: '300',
    paddingVertical: 20,
  },
  icon: {
    width: 19,
    marginRight: 11,
  },
});
