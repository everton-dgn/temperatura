import React, {useState, useEffect} from "react";
import Key_api from "./API_KEY";

const Teste = () => {
    const [location, setLocation] = useState(false);
    const [weather, setWeather] = useState(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            // getWeather(position.coords.latitude, position.coords.longitude);
            setLocation(true)
        })
    }, [])

    const locale = 'locale=pt';
    // const lat = 'lat=';
    // const log = 'log=';
    const ip = 'user_ip=remote';

    const URL = `
    https://api.hgbrasil.com/weather?format=json-cors&key=
    ${Key_api}&
    ${locale}&
    ${ip}
    `;

    const Api = async (url) => {
        const response = await fetch(url);
        const json = await (await response.json()).results;
        console.log(json)
    }
    Api(URL);

    return (
        <section>
            <h3>Clima nas suas Coordenadas</h3>
            <hr/>
            <ul>
                <li>Temperatura atual: {}°</li>
                <li>Temperatura máxima: {}°</li>
                <li>Temperatura minima: {}°</li>
                <li>Velocidade do vento: {}km/h</li>
                <li>Humidade: {}%</li>
            </ul>
        </section>
    );
};

export default Teste;