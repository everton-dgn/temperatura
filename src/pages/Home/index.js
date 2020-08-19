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
        setWeather(res.data.results);
        console.log(res.data.results)
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeather(position.coords.latitude, position.coords.longitude);
            setLocation(true);
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
            {/*  {weather.forecast.map(item => item.max)[0]}

                {weather.forecast.map(item => item.min)[0]}

                {weather.wind_speedy.replace(' km/h', '')}

                {weather.humidity}*/}

            <City
                city={weather.city}
            />

            <Day
                week={weather.forecast.map(item => item.weekday)[0]}
                month={weather.forecast.map(item => item.date)[0]}
            />

            <Circle
                temp={weather.temp}
                uni={'°C'}
                current={'Agora'}
            />

            <Control/>

            <Auto
                image={weather.img_id}
                description={weather.forecast.map(item => item.description)[0]}
            />

            <Footer/>
        </>;
    }
};

export default Home;