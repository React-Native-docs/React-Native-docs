import styled from '@emotion/native';

export const DropdownContainer = styled.ScrollView`
  width: 100%;
  flex: 1;
  padding-top: 35px;
  margin-left: 6%;
`;

export const DropdownButton = styled.TouchableOpacity`
  width: 85%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #F2F2F2;
  padding: 12px 18px;
  border-radius: 10px;
`;

DropdownButton.Text = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #7A7A7A;
`;

export const DropdownBox = styled.View`
  flex: 1;
`;

export const PageButton = styled.TouchableOpacity``;

PageButton.Text = styled.Text`
  font-size: 14px;
  color: #1C1E21;
  margin-top: 15px;
  padding-left: 18px;
`;
