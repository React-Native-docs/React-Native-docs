import { Platform, StatusBar } from 'react-native';
import styled from '@emotion/native';

export const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  background-color: #20232A;
  padding-top: ${Platform.OS === 'ios' ? 0 : `${StatusBar.currentHeight}px`};
`;

Container.Box = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const IconButton = styled.TouchableOpacity`
  padding: 20px;
`;
