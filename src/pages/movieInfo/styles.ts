import styled from 'styled-components';

export const Page = styled.main`
  width: 100%;
  height: 100vh;
  background: #d8d4d9;
  display: flex;
  justify-content: center;
  align-items: center;

  section{
    display: flex;
    flex-direction: column;
    height: 60%;
    width: 80%;

    a{
      text-decoration: none;
      color:#b967c7;
      cursor: pointer;
      font-weight: bold;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      span{
        margin-left: 0.5rem;
      }
    }
  }

`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: none;
  border-radius: 2rem;
  width: 100%;
  padding: 2rem;
  padding-left: 3rem;
  align-items: flex-start;

  strong{
    margin-bottom: 0.5rem;
  }

  h3{
    margin-bottom: 2rem;
  }

  div{
    display: flex;
    flex-direction: row;
    
    img{
      width: 180px;
      height: 280px;
      border-radius: 13px;
    }

    div{
      display:flex;
      flex-direction: column;
      margin-top: 1rem;
      padding-left: 2rem;

      div{
        p{
          font-size: 0.8rem;
          width: 500px;
        }
      }

      .vote{
        display: flex;

        p{
          display: flex;
          font-weight: bold;
          justify-content: flex-start;
          align-items: center;
          font-size: 1.5rem;
          span{
            font-size: 1rem;
          }
        }
      }
    }
  }
`;