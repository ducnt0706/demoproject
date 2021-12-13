import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
});

const Typography = props => {
  const {
    label = '',
    bold = false,
    italic = false,
    style = {},
    color = 'black',
    children,
    ...rest
  } = props;

  const addingStyles = [];
  if (bold) {
    addingStyles.push(styles.bold);
  }
  if (italic) {
    addingStyles.push(styles.italic);
  }

  return (
    <Text {...rest} style={[...addingStyles, style, {color: color}]}>
      {label || children}
    </Text>
  );
};

export default Typography;
