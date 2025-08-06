import styled from "styled-components";

const UlStyle = styled.ul`
    display: flex;
    width: auto;
    align-items: center;
    height: 70vh;
    overflow: scroll;
    flex-direction: column;
    gap: 1rem;
`

function Ul({children}) {
    return(
        <UlStyle>{children}</UlStyle>
    )
}

export default Ul;