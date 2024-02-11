import styled from "styled-components";
import "@fontsource/righteous";
import "@fontsource/raleway";

export const Container = styled.header`
  margin:23px 0 46px;
  padding:10px 40px 30px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  border-bottom:1px solid #f0f0f0;

  .title{
    font-family:"Righteous", sans-serif;
    font-weight: 400;
    font-size:40px;
    color:black;
    position:relative;
  }
`;

export const List = styled.ul`
  display:flex;
  gap:30px;

`;

export const ListItem = styled.li`
    transition: transform .15s ease;
    position: relative;
    cursor:pointer;

    &:hover::after {
        width: 80%;
    }
    &::after {
        content: "";
        display: block;
        width: ${({ active }) => active ? `80%` : "0"};
        height: 2px;
        position: absolute;
        background-color: #1C232C;
        left: 2px;
        transition: width .3s ease-in-out;
    }
    &:hover{
        transform: scale(1.08);
    }

    a{
      color:black;
    }
   
`;