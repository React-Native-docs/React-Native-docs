import React from 'react';
import { css } from '@emotion/native';
import PAGE from '~/constants/page';
import { DropdownContainer, DropdownButton, DropdownBox, PageButton } from './Dropdown.styles';
import DropdownIcon from '~/assets/icons/dropdown-icon.svg';

const Dropdown = (props) => {
  const { title, pageTitle } = props;

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
            {Object.keys(PAGE[pageTitle]).map((name) => (
                <PageButton>
                  <PageButton.Text key={name}>{name}</PageButton.Text>
                </PageButton>
            ))}
        </DropdownBox>
    </DropdownContainer>
  );
};
 
export default Dropdown;
