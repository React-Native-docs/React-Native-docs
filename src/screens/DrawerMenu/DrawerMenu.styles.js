import { Platform, StatusBar } from 'react-native';
import styled from '@emotion/native';

export const Container = styled.ScrollView`
	flex: 1;
  background-color: #ffffff;
  margin-top: ${Platform.OS === 'ios' ? `66px` : `${StatusBar.currentHeight + 66}px`};
  z-index: 1;
`;

export const MenuView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: 8px;
  padding: 12px 0;
`;

MenuView.Text = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #ffffff;
`;