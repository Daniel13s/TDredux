import styled from "styled-components";

const DivStyle = styled.div`
    display: flex;
    flex-direction: ${props => props.$flexdirection === "column" ? "column" : ""};
    justify-content: space-around;
    align-items: center;
    font-family: "Arial";
`


function Div({children, $flexdirection}) {
    return(
        <DivStyle $flexdirection={$flexdirection}>{children}</DivStyle>
    )
}

export default Div;