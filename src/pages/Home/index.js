import React, {useState, useEffect} from "react";
import Auto from "../../components/Auto";
import Circle from "../../components/Circle";
import Day from "../../components/Day";
import Control from "../../components/Control";
import Footer from "../../components/Footer";
import City from "../../components/City";
import axios from 'axios';
import Key_api from "../../API_KEY";
import {Alert} from "./styles";

const Home = () => {
    const [location, setLocation] = useState(false);
    const [weather, setWeather] = useState(false);

    const getWeather = async (lat, long) => {
        const res = await axios.get("https://api.hgbrasil.com/weather", {
            params: {
                format: 'json-cors',
                locale: 'pt',
                lat: lat,
                lon: long,
                user_ip: 'remote',
                key: Key_api,
            }
        });
        setWeather(res.data);
        console.log(res.data)
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeather(position.coords.latitude, position.coords.longitude);
            setLocation(true)
        })
    }, []);

    if (location === false) {
        return <Alert>
            Você precisa habilitar a localização no navegador!
        </Alert>;
    } else if (weather === false) {
        return <Alert>
            Carregando...
        </Alert>;
    } else {
        return <>
            <ul>
                <li>Cidade: {}</li>
                <li>Dia: {}</li>
                <li>Temperatura atual: {}°</li>
                <li>Temperatura máxima: {}°</li>
                <li>Temperatura minima: {}°</li>
                <li>Velocidade do vento: {}km/h</li>
                <li>Humidade: {}%</li>
                <li>Previsão: {}</li>
            </ul>

            <City/>

            <Day/>

            <Circle/>

            <Control/>

            <Auto/>

            <Footer/>
        </>;
    }
};

export default Home;