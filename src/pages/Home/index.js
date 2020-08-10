import React from 'react';
import Auto from "../../components/Auto";
import Circle from "../../components/Circle";
import Day from "../../components/Day";
import Control from "../../components/Control";
import Footer from "../../components/Footer";
import City from "../../components/City";
import Teste from "../../API";

const Home = () => {
    return <>
        <Teste/>

        <City/>

        <Day/>

        <Circle/>

        <Control/>

        <Auto/>

        <Footer/>
    </>;
};

export default Home;