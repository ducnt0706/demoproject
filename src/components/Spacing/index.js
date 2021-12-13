import React from 'react';
import {View} from 'react-native';

const Spacing = ({ width = 0, height = 0 }) => {
  return (
    <View
      style={{
        width: width,
        height: height,
      }}
    />
  );
};

export default Spacing;
