import styled from 'styled-components';
import "@fontsource/raleway";

export const MainContainer = styled.div`
  padding:0 72px;
  display:grid;
  grid-template-columns: 1fr 1fr;
  font-family:"Raleway", sans-serif;
`;

export const LeftColumn = styled.div`
  
`;

export const BigMiniature = styled.div`
    height:511px;
    position:relative;
    display:flex;
    justify-content: center;

    img{
        height: 100%;
        position: absolute;
        bottom:0;
    }
  
`;

export const Miniature = styled.span`
  width:187px;
  height:140px;
  display:inline-block;
  background-color:#F6F6F6;
  overflow:hidden;

  img{

  }
`;

export const MiniatureArea = styled.div`
  margin-top:31px;   
  margin-bottom:80px;
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap:20px;
`;

export const RightColumn = styled.div`
margin-left:60px;
  p{
    display:flex;
    align-items:center;
    margin-bottom:20px;
    svg{
        font-size:22px;
        color:#F9CB3C;    
    }
  }
`;

export const ProductDetailArea = styled.div`
  padding-bottom:14px;
  border-bottom:1px solid #E3E3E3;

  h4{
    font-weight:700;
    font-size:32px;
  }

  span{
    margin-right:10px;
    margin-top:10px;
  }

`;

export const SizeArea = styled.div`
    margin-top:34px;
    padding-bottom:14px;
    border-bottom:1px solid #E3E3E3;
`;

export const SizeButton = styled.button`
  width:52px;
  height:52px;
  transition: all .2s ease;
  background-color: ${({ selected }) => selected ? "#1D242D" : "transparent"};
  border:1px solid ${({ selected }) => selected ? "transparent" : "#B2B4B8"};
  color:${({ selected }) => selected ? "white" : "#1D242D"};
  border-radius:10px;
  font-family:"Raleway", sans-serif;
  font-weight: 700;
  font-size:20px;
  cursor:pointer;
`;

export const SizeButtonArea = styled.div`
  display:flex;
  gap:10px;
  
`;

export const Price = styled.div`
  font-weight:700;
  font-size:32px;
`;

export const FinishOrderArea = styled.div`
  margin-top:65px;
  display:flex;
  gap:50px;
  padding-bottom:14px;
 
`;

export const Quantity = styled.div`
  width:129px;
  height:59px;
  border:1px solid #D9D9D9;
  border-radius:6px;
  display:flex;
  align-items:center;
  justify-content: center;

  input{
    font-family:"Raleway", sans-serif;
    font-weight:700;
    color:black;
    font-size:20px;
    width:60px;
    height:100%;
    background-color:transparent;
    border:0;
    text-align:center;
  }

  button{
    margin-top:5px;
    width:50px;
    height:100%;
    background-color:transparent;
    border:0;
    cursor:pointer;
    font-size:20px;
    color:black;
  }

  button:nth-child(1){
    margin-left:5px;
    position:relative;

    &::after{
        content:"";
        height:20px;
        width:1px;
        background-color:#D9D9D9;
        position:absolute;
        right:-10px;
    }
  }

  button:nth-child(3){
    margin-right:5px;
    position:relative;

    &::before{
        content:"";
        height:20px;
        width:1px;
        background-color:#D9D9D9;
        position:absolute;
        left:-10px;
    }
  }
`;

export const AddToCart = styled.div`
  width:217px;
  height:55px;
  background-color:#1D242D;
  display:flex;
  align-items:center;
  justify-content: center;
  gap:10px;
  color:white;
  font-family:"Raleway", sans-serif;
  font-size:14px;
  cursor:pointer;
  border-radius:6px;

  svg{
    font-size:20px;
  }
`;

export const DescriptionArea = styled.div`
  padding:0 72px;
  margin-bottom:140px;
  h4{
    font-weight:700;
    font-size:32px;
    border-bottom:1px solid #E3E3E3;
    padding-bottom:14px;
  }

  p{
    padding-top:14px;
  }
`;