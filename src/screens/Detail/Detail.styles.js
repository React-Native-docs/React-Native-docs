import { Platform, StatusBar } from 'react-native';
import styled from '@emotion/native';

export const Container = styled.ScrollView`
	flex: 1;
	background-color: #ffffff;
  margin-top: ${Platform.OS === 'ios' ? `66px` : `${StatusBar.currentHeight + 66}px`};
  z-index: 1;
`;

export const LogoText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
`;
