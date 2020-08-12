import React, {useState, useEffect} from "react";
import axios from 'axios';
import Key_api from "./API_KEY";

const Climate = () => {
    const [location, setLocation] = useState(false);
    const [weather, setWeather] = useState(false);

    const getWeather = async (lat, long) => {
        const res = await axios.get("https://api.hgbrasil.com/weather", {
            params: {
                format:'json-cors',
                locale: 'pt',
                lat: lat,
                lon: long,
                user_ip: 'remote',
                key: Key_api,
            }
        });
        setWeather(res.data);
    }

    useEffect(()=> {
        navigator.geolocation.getCurrentPosition((position)=> {
            getWeather(position.coords.latitude, position.coords.longitude);
            setLocation(true)
        })
    }, []);

    return (
        <section>
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
        </section>
    );
};

export default Climate;