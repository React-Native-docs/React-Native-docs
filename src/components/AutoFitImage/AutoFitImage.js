import React from 'react';
import { Dimensions } from 'react-native';
import { Image } from './AutoFitImage.styles';

const AutoFitImage = (props) => {
  const dimensions = Dimensions.get('window');
  const imageHeight = Math.round(dimensions.width);

  return <Image {...props} height={imageHeight} resizeMode="contain" />;
};

export default AutoFitImage;
