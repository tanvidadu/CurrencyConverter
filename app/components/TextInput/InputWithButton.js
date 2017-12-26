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
  const buttonTextStyles = [styles.buttonText];
  if (props.textColor) {
    buttonTextStyles.push({ color: props.textColor });
  }
  return (
    <View style={styles.container}>
      <TouchableHighlight
        underlayColor={underlayColor}
        style={styles.buttonContainer}
        onPress={onPress}
      >
        <Text style={buttonTextStyles}>{buttonText}</Text>
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
  textColor: PropTypes.string,
};
export default InputWithButton;
