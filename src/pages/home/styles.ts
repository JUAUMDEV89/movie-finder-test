import styled from 'styled-components';

export const Page = styled.main`
  width: 100%;
  height: 100vh;
  background:  transparent linear-gradient(180deg, #FEFCFF 0%, #DCD6E0 100%) 0% 0% no-repeat padding-box;
  display: flex;
 
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.main`
  display:flex;
  flex-direction: column;
  max-width: 600px;
  margin: auto;

  overflow-y: hidden;
  h3{
    font-size: 3rem;
    color: var(--text);
  }
  h4{
     font-size: 1.3rem;
     color: var(--text);
  }
  div > div{
    margin-top: 0.7rem;
    color: var(--text);
  }
  form{
    margin-top: 5rem;
    
    strong{
      font-size: 1rem;
      color: var(--text);
    }
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #DCD6E0;
  border-radius: 0.4rem;
  width: 100%;
  height: 2rem;
  margin-top: 1rem;
  input{
    flex: 14;
    height: 100%;
    border: none;
    padding-left: 0.8rem;
    color: #ADABAB;
  }

  input:focus{
      border: 1px solid #9E76B9;
  }

  button{
    flex:1;
    background-color: #fff;
    width: 3rem;
    border: none;
    border-left: 1px solid #DCD6E0;
    height: 100%;
    cursor:pointer;
  }
`;