import styled from "styled-components/native";

const StyleComponentBg = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.backgroundColor || "white"};
`;

const StyleText = styled.Text`
    color: ${props => props.color || "white"};
    font-size: 20px;
`;

export { StyleComponentBg, StyleText };
