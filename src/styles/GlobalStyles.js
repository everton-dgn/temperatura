import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-weight: 500;
        text-decoration: none;
        outline: none;
        -webkit-font-smoothing: antialiased!important;
        font-family: 'Roboto', sans-serif;
    }

    //html, body, #root {
    //    height: 100%;
    //}

    button, input {
        border: 0;
        outline: 0;
    }

    button {
        cursor: pointer;
    }

    :root {
       --primary: #36393f;

  }
`;