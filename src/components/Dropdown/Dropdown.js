import React from 'react';
import { css } from '@emotion/native';
import PAGE from '~/constants/page';
import { DropdownContainer, DropdownButton, DropdownBox, PageButton } from './Dropdown.styles';
import DropdownIcon from '~/assets/icons/dropdown-icon.svg';

const Dropdown = (props) => {
  const { title, pageTitle, navigation } = props;
  return (
    <DropdownContainer style={
      title === 'Example' &&
      css`
        padding-bottom: 35px;
      `}>
      <DropdownButton>
        <DropdownButton.Text>{title}</DropdownButton.Text>
        <DropdownIcon />
      </DropdownButton>
      <DropdownBox>
        {/*
        Warning: Each child in a list should have a unique "key" prop.
        Check the render method of `Dropdown`. See https://fb.me/react-warning-keys for more information.
        in emotion(Styled) (at Dropdown.js:22)
     */}
        {Object.keys(PAGE[pageTitle]).map((name, i) => (
          <PageButton key={i}>
            <PageButton.Text key={name} onPress={() => navigation.navigate("Detail", { pageTitle: pageTitle, pageName:name })}>{name}</PageButton.Text>
          </PageButton>
        ))}
      </DropdownBox>
    </DropdownContainer>
  );
};

export default Dropdown;
