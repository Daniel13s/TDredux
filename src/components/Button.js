import styled from "styled-components";

const ButtonStyle = styled.button`
    background-color: ${props => props.$isComplete ? "#a1aaa4ff" : "#c9d1d8ff"};
    border: none;
    border-radius: 50px;

`

function Button({children, onClick, $isComplete}) {
    return(
        <ButtonStyle $isComplete={$isComplete} onClick={onClick}>{children}</ButtonStyle>
    )
}

export default Button;