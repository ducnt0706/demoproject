import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
});

const Card = props => {
  const {style = {}, children = null} = props;
  return <View style={[styles.container, style]}>{children}</View>;
};

export default Card;
