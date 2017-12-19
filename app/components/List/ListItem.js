import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Icon from './icon';

const ListItem = ({
  text, onPress,
  checkmark = true,
  selected = false,
  visible = true,
  customIcon = null,
  iconBackground,
  }) => (
    <TouchableHighlight onPress={onPress} underlayColor={styles.$underlaycolor}>
      <View style={styles.row}>
        <Text style={styles.text}>{text}</Text>
        {selected ?
          <Icon checkmark={checkmark} visible={visible} iconBackground={iconBackground} />
          : <Icon />
        }
        {customIcon}
      </View>
    </TouchableHighlight>
);

ListItem.propTypes = {
  text: PropTypes.string,
  selected: PropTypes.bool,
  onPress: PropTypes.func,
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  customIcon: PropTypes.element,
  iconBackground: PropTypes.string,
};

export default ListItem;
