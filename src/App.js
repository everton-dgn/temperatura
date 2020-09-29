import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/Home";
import {ClimeProvider} from "./context/Temperature";

function App() {

    return (
        <>
            <ClimeProvider>
            <GlobalStyles/>

                <Home/>
            </ClimeProvider>
        </>
    )
}

export default App;