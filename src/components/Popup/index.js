import { BackgroundPopup, Closed, Light, Dark } from './styles';
import { SearchBox } from '../Footer/styles';
import React, { useEffect, useState } from 'react';
import { useClime } from '../../context';
import axios from 'axios';

const Popup = () => {

    const {
        setWeather,
        setShowPopup,
    } = useClime();

    const [resut, setResult] = useState(false);

    const handleClickOut = (e) => {
        if (e.target === e.currentTarget) setShowPopup(false);
    };

    const changeValue = (e) => {
        setResult(e.target.value);
    };

    const changeKey = (e) => {
        const key = e.which || e.keyCode;
        if (key === 13) searchResult();
    };

    const searchResult = () => {
        setShowPopup(false);

        const getWeather = async () => {
            const res = await axios.get('https://api.hgbrasil.com/weather', {
                params: {
                    format: 'json-cors',
                    locale: 'pt',
                    lat: '',
                    lon: '',
                    user_ip: '',
                    city_name: resut,
                    key: process.env.REACT_APP_API_KEY,
                },
            });
            setWeather(res.data.results);
            console.log(res.data.results);
        };
        getWeather();
    };

    return (
        <BackgroundPopup onClick={handleClickOut}>
            <div className="containerPopup">
                <div className="close" onClick={() => setShowPopup(false)}>
                    <Closed /></div>
                <h1>Consulte a previsão do tempo para a sua cidade!</h1>
                <div className="searchCity">
                    <input type="text" placeholder="Buscar por cidade..."
                           onKeyUp={changeKey} onChange={changeValue}
                           autoFocus />
                    <button onClick={searchResult}><SearchBox /></button>
                </div>
            </div>
        </BackgroundPopup>
    );
};

export default Popup;