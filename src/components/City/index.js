import React, { useEffect } from 'react';
import { CompCity } from './styles';
import { useClime } from '../../context';

const City = () => {
    const {
        city,
        setCity,
        weather,
    } = useClime();

    useEffect(() => {
        setCity(weather.city)
    }, [setCity, weather.city]);

    return <>
        <CompCity>
            <div>
                <h1>{city}</h1>
            </div>
        </CompCity>
    </>;

};

export default City;