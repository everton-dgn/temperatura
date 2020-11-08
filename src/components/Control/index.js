import {useEffect} from 'react';
import {CompControl, Max, Min, Win, Wtr} from './styles';
import {useClime} from '../../context';

export const Control = () => {
    const {
        max,
        min,
        wind,
        temp,
        current,
        uni,
        humidity,
        setUni,
        setCurrent,
        setMax,
        setMin,
        setTemp,
        setWind,
        setHumidity,
        weather,
    } = useClime();

    useEffect(() => {
        setMax(weather.forecast.map(item => item.max)[0]);
        setMin(weather.forecast.map(item => item.min)[0]);
        setWind(weather.wind_speedy.replace(' km/h', ''));
        setHumidity(weather.humidity);
    }, [setHumidity, setMax, setMin, setWind, weather.forecast, weather.humidity, weather.wind_speedy]);

    const changeMax = () => {
        setTemp(max);
        setCurrent('Max.');
        setUni('°C');
    };

    const changeMin = () => {
        setTemp(min);
        setCurrent('Mín.');
        setUni('°C');
    };

    const changeWind = () => {
        setTemp(wind);
        setCurrent('Vento');
        setUni('Km/h');
    };

    const changeWtr = () => {
        setTemp(humidity);
        setCurrent('Umid.');
        setUni('%');
    };

    return (
        <CompControl>
            <div>
                <button onClick={changeMax}><Max/></button>
            </div>
            <div>
                <button onClick={changeMin}><Min/></button>
            </div>
            <div>
                <button onClick={changeWind}><Win/></button>
            </div>
            <div>
                <button onClick={changeWtr}><Wtr/></button>
            </div>
        </CompControl>
    );
};

export default Control;