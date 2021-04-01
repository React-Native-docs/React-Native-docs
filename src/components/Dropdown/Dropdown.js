import React from 'react';
import { Text } from 'react-native';
import PAGE from '~/constants/page';
import { DropdownButton, DropdownBox } from './Dropdown.styles';

const Dropdown = (props) => {
  const { title, pageTitle } = props;

  return (
    <>
        <DropdownButton>
        <Text>{title}</Text>
        </DropdownButton>
        <DropdownBox>
            {Object.keys(PAGE[pageTitle]).map((name) => (
                <Text key={name}>{name}</Text>
            ))}
        </DropdownBox>
    </>
  );
};
 
export default Dropdown;
