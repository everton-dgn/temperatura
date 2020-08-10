import React from "react";

const Teste = () => {
    const URL = 'https://api.hgbrasil.com/weather?locale=pt&format=json-cors&key=1239f74b';

    const locale = 'locale=pt';

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