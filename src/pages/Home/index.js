import React, {useEffect} from "react";
import Auto from "../../components/Auto";
import Circle from "../../components/Circle";
import Day from "../../components/Day";
import Control from "../../components/Control";
import Footer from "../../components/Footer";
import City from "../../components/City";
import axios from 'axios';
import {Alert} from "./styles";
import {ClimeProvider, useClime} from '../../context/Temperature';

const Home = () => {

    const {
        location,
        setLocation,
        weather,
        setWeather
    } = useClime;

    console.log(weather)

    const getWeather = async (lat, long) => {
        const res = await axios.get("https://api.hgbrasil.com/weather", {
            params: {
                format: 'json-cors',
                locale: 'pt',
                lat: lat,
                lon: long,
                user_ip: 'remote',
                key: process.env.API_KEY,
            }
        });
        setWeather(res.data.results);
        console.log(res.data.results);
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeather(position.coords.latitude, position.coords.longitude);
            setLocation(true);
        });
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
            <ClimeProvider>

                <City
                    // city={weather.city}
                />

                <Day
                    // week={weather.forecast.map(item => item.weekday)[0]}
                    // month={weather.forecast.map(item => item.date)[0]}
                />

                <Circle
                    // temp={weather.temp}
                    uni={'°C'}
                    current={'Agora'}
                />

                <Control
                    // max={weather.forecast.map(item => item.max)[0]}
                    // min={weather.forecast.map(item => item.min)[0]}
                    // wind={weather.wind_speedy.replace(' km/h', '')}
                    // humidity={weather.humidity}
                />

                <Auto
                    // image={weather.img_id}
                    // description={weather.description}
                />

                <Footer/>
            </ClimeProvider>
        </>;
    }
};

export default Home;