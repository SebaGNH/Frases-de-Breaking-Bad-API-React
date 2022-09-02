import styled from 'styled-components';

export const DivContenedorFrase = styled.div` 
  background-color: #fff;   
  color: #000;
  max-width: 800px;
  border-radius: .5rem;
  padding: 3rem;
  margin: 50px;
  @media (min-width: 992px){
    margin-top: 10rem;
  }


  h1{
    font-family: Arial, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;
    letter-spacing: 1px;
    &::before{
      content: open-quote;
      font-size: 10rem;
      color: #000;
      position: absolute;
      left: -1rem;
      top: -4rem;
    }    
  }


  p{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.4rem;
    font-weight: bold;
    text-align: right;
    color: #666;
    margin-top: 2rem;
  }
`;