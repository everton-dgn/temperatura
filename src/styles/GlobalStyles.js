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
        color: var(--colorWhite);
    }

    html, body, #root {
        height: 100%;
        background: var(--bgMain);
        display: flex;
        flex-direction: column;
    }

    #root > div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        flex: 1;
    }

    button, input {
        border: 0;
        outline: 0;
    }

    button {
        cursor: pointer;
    }

    :root {
        --fontP: 15px;
        --fontH1: 30px;
        --fontH2: 20px;
        --fontTemp: 130px;
        --fontDay: 25px;
        --bgMain: #212429;
        --bgButton: #292d33;
        --colorWhite: #fff;
        --green: #00b3b3;
        --red: #E43F39;
        --blue: #3E9BF8;
  }
`;