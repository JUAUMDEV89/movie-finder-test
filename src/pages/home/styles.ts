import styled from 'styled-components';

export const Page = styled.main`
  width: 100%;
  height: 100vh;
  background: #d8d4d9;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const Content = styled.main`
  display:flex;
  flex-direction: column;
  max-width: 600px;

  h3{
    font-size: 3rem;
  }

  h4{
     font-size: 1.3rem;
  }

  div > div{
    margin-top: 0.7rem;
  }

  form{
    margin-top: 5rem;

    strong{
      font-size: 1rem;
    }

  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #b3aead;
  border-radius: 0.4rem;
  width: 100%;
  height: 2rem;
  margin-top: 1rem;

  input{
    flex: 14;
    height: 100%;
    border: none;
    padding-left: 0.8rem;
  }

  button{
    flex:1;
    background-color: #fff;
    width: 3rem;
    border: none;
    border-left: 1px solid #b3aead;
    height: 100%;
    cursor:pointer;
  }
`;