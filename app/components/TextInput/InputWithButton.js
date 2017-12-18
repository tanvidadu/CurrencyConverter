import React from 'react';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import { PropTypes } from 'prop-types';
import styles from './styles';
import color from 'color';

const InputWithButton = (props) => {
  const { onPress, buttonText, editable = true } = props;
  const underlayColor = color(styles.$buttonBackgroundColorBase)
  .darken(styles.$buttonBackgroundColorModifier);
  const containerStyle = [styles.container];
  if (editable === false) {
    containerStyle.push(styles.containerDisabled);
  }
  return (
    <View style={styles.container}>
      <TouchableHighlight
        underlayColor={underlayColor}
        style={styles.buttonContainer}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput style={styles.input} underlineColorAndroid="transparent" {...props} />
    </View>
  );
};

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
};
export default InputWithButton;
