import React, { useCallback } from 'react';
import { css } from '@emotion/native';
import PAGE from '~/constants/page';
import { DropdownContainer, DropdownButton, DropdownBox, PageButton } from './Dropdown.styles';
import DropdownIcon from '~/assets/icons/dropdown-icon.svg';

const Dropdown = (props) => {
  const { title, pageTitle, show, textFocus, onToggleShow, onPageButtonClick, navigation } = props;

  const handleToggleShow = useCallback(() => {
    onToggleShow?.(pageTitle);
  }, [onToggleShow]);

  const handlePageButtonClick = useCallback((name) => {
    onPageButtonClick?.(name);
  }, [onPageButtonClick]);

  return (
    <DropdownContainer style={
      title === 'Example' &&
      css`
        padding-bottom: 35px;
      `}>
      <DropdownButton onPress={handleToggleShow}>
        <DropdownButton.Text style={
          show === pageTitle &&
          css`
            color: #1C1E21;
          `}>
          {title}
        </DropdownButton.Text>
        <DropdownIcon style={
          show === pageTitle &&
          css`
            transform: rotate(90deg);
          `}
        />
      </DropdownButton>
      {show === pageTitle &&
        <DropdownBox>
          {Object.keys(PAGE[pageTitle]).map((name, i) => (
            <PageButton key={i}>
              <PageButton.Text style={
                textFocus === name &&
                  css`
                    color: #05BCED;
                  `
                }
                key={name}
                onPress={() => {
                  handlePageButtonClick(name);
                  navigation.navigate("Detail", { pageTitle: pageTitle, pageName:name });
                }}
                >{name}</PageButton.Text>
            </PageButton>
          ))}
        </DropdownBox>
      }
    </DropdownContainer>
  );
};

export default Dropdown;
