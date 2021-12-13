import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
  });

const Button = props => {
  const {label='', disabled= false, onPress=()=>{}, style, labelStyle,  ...rest} = props;
  return (
    <TouchableOpacity {...rest} disabled={disabled} onPress={onPress} style={[style, styles.container]}>
      <View>
        <Text style={[labelStyle]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
