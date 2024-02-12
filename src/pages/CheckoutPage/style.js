import styled from 'styled-components';
import colors from '../../constants/colors.js';

export const FinalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
`
export const FinalMessage = styled.p`
    font-family:"Raleway", sans-serif;
    font-weight:700;
    font-size:80px;
    width:100%;
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const HomeButton = styled.div`
  padding-top: 43px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  button{
    width: 431px;
    height: 57px;
    background: ${colors.primaryColor};
    font-family: 'Raleway';
    font-weight: 600;
    font-size: 18px;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 44px;
  }
`