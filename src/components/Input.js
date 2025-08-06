import styled from "styled-components";

const InputStyle = styled.input`
    border: none;
    width: auto;
    background-color: aliceblue;
    margin: 5px;
    padding: 10px;
    border-radius: 50px;
`

function Input({type, placeholder, onChange, value}) {
    return(
        <InputStyle value={value} onChange={onChange} type={type} placeholder={placeholder}></InputStyle>
    )
}
export default Input;