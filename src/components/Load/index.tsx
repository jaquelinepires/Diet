import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components/native';


export function Load(){
  const {COLORS}= useTheme()

  return (
    <ActivityIndicator
      size="large"
      color={COLORS.GRAY_300}
      style={{ flex: 1 }}
    />
  );
}