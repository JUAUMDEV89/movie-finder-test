import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
    :root{
        --red: #e52e4d;
        --blue: #5429cc;
        --green: #33cc95;
        --blue-light: #6933ff;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --background: 'red';
        --shape: #ffffffff;
    }
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
   
`;