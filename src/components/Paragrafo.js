import styled from "styled-components"

const PStyle = styled.p`
    text-decoration: ${props => props.$isComplete ? "line-through" : "none"};
    margin: 10px;
    overflow: hidden;
    width: 5rem;
    height: 3rem;
`

function Paragrafo({children, $isComplete, onClick}) {
    return(
        <PStyle onClick={onClick} $isComplete={$isComplete}>{children}</PStyle>
    )
}

export default Paragrafo