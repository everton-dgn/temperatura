import React, { useEffect } from 'react';
import Auto from '../../components/Auto';
import Circle from '../../components/Circle';
import Day from '../../components/Day';
import Control from '../../components/Control';
import Footer from '../../components/Footer';
import City from '../../components/City';
import axios from 'axios';
import { Alert } from './styles';
import { useClime } from '../../context';
import Popup from '../../components/Popup';

const Home = () => {

    const {
        location,
        setLocation,
        weather,
        setWeather,
        showPopup,
        paramSearch,
    } = useClime();

    const getWeather = async (lat, long) => {
        const res = await axios.get('https://api.hgbrasil.com/weather', {
            params: {
                format: 'json-cors',
                locale: 'pt',
                lat: paramSearch === false ? lat : '',
                lon: paramSearch === false ? long : '',
                user_ip: 'remote',
                city_name: paramSearch === false ? '' : paramSearch,
                key: process.env.REACT_APP_API_KEY,
            }
        });
        setWeather(res.data.results);
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeather(position.coords.latitude, position.coords.longitude).then(r => r);
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

            <City/>

            <Day/>

            <Circle/>

            <Auto/>

            <Control/>

            <Footer/>

            {showPopup ? <Popup /> : null}
        </>;
    }
};

export default Home;