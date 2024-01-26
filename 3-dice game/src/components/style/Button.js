import styled from "styled-components";

export const Button = styled.button`
min-width: 220px;
padding: 10px 18px;
border-radius: 5px;
color: white;
background: #000;
border:none;
cursor: pointer;
border: 1px transparent;
transition: 0.4s background ease-in;
font-size: 16px;
&:hover{
    background: #ffffff;
    color: black;
    border: 1px solid black;

    transition: 0.3s background ease-in-out;
}

`
// !--------------

export const OutLineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;

&:hover{
    color: black;
    border: 1px solid black;

    transition: 0.3s background ease-in-out;
}

`