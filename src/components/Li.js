import styled from "styled-components";

const LiStyled = styled.li`
    background-color: ${props => props.$isComplete ? "#ccdad0ff" : "aliceblue"};
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 50px;
    width: 30rem;
    padding: 10px;
    height: 3rem;
`

function Li({children, $isComplete, onClick}) {
    return(
        <LiStyled onClick={onClick} $isComplete={$isComplete}>{children}</LiStyled>
    )
}

export default Li;