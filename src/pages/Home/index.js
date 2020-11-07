import { useEffect } from 'react';
import Auto from '../../components/Auto';
import Circle from '../../components/Circle';
import Day from '../../components/Day';
import Control from '../../components/Control';
import Footer from '../../components/Footer';
import City from '../../components/City';
import axios from 'axios';
import { Alert } from './styles';
import { useClime } from '../../context';

const Home = () => {

    const {
        location,
        setLocation,
        weather,
        setWeather,
    } = useClime();

    const getWeather = async (lat, long) => {
        const res = await axios.get('https://api.hgbrasil.com/weather', {
            params: {
                format: 'json-cors',
                locale: 'pt',
                lat: lat,
                lon: long,
                user_ip: 'remote',
                key: process.env.REACT_APP_API_KEY,
            },
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

            <Control/>

            <Auto/>

            <Footer/>
        </>;
    }
};

export default Home;