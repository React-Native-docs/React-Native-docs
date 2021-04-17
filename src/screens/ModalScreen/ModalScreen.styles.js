import styled from '@emotion/native';

export const ModalContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ModalView = styled.View`
    width: 100%;
    background-color: #ffffff;
    flex: 1;
    padding: 8%;
    padding-top: 70px;
`;

export const CloseButton = styled.TouchableOpacity`
    z-index: 10;
    align-self: flex-end;
`;
