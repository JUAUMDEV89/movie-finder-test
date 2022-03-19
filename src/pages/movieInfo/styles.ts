import styled from 'styled-components';

export const Page = styled.main`
  width: 100%;
  height: 100vh;
  background: transparent linear-gradient(180deg, #FEFCFF 0%, #DCD6E0 100%) 0% 0% no-repeat padding-box;
  display: flex;
  align-items: center;
  flex-direction: column;

  section{
    display: flex;
    flex-direction: column;
    height: 60%;
    width: 80%;
    margin: auto;

    a{
      text-decoration: none;
      color:#9E76B9;
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
    color:  var(--text);
  }

  h3{
    margin-bottom: 2rem;
    color:  var(--text);
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
          color:  var(--text);
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