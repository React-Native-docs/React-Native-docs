import React from 'react';
import { ModalContainer, ModalView, CloseButton } from './ModalScreen.styles';
import CloseIcon from '~/assets/icons/close-icon.svg';

const ModalScreen = ({ navigation, route }) => {
  return (
    <ModalContainer>
        <ModalView>
          <CloseButton onPress={() => navigation.goBack()}>
              <CloseIcon />
          </CloseButton>
          {route.params.exampleFile}
        </ModalView>
    </ModalContainer>
  );
};

export default ModalScreen;
