import { FaAirbnb } from 'react-icons/fa';
import styled from "styled-components";
export const Container = styled.header`
    background-color: #b6ffc1;
    padding: 20px;
    width: 100%;

`;

export const TopHeader = styled.header`
    background-color: lightseagreen;
    border-bottom: 2px solid lightgray;
    position: sticky; 
    top: 0;
    padding: 35px 0px;

`
export const CenterElem = styled.div`
    text-align: center;
`;
export const StyledSearchBar = styled.input`
    border-radius: 35px;
    height: 1cm;
    width: 5cm;
    &:hover{
        background-color: lightgray;
        height:1.2cm;

    }
`


export const StyledButton = styled.button`
    width: 120px;
    height: 60px;
    background-color: blue;
`;


