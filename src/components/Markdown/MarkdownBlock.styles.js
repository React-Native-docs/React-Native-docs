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
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 5;
`;
