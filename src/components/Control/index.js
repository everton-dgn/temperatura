import {useEffect} from 'react';
import {CompControl, Max, Min, Win, Wtr} from './styles';
import {useClime} from '../../context';

export const Control = () => {
    const {
        max,
        min,
        wind,
        humidity,
        setUni,
        setCurrent,
        setMax,
        setMin,
        setTemp,
        setWind,
        setHumidity,
        weather,
        setCount,
        setDay,
        setMonth,
        setDescription,
        setDesc,
    } = useClime();

    useEffect(() => {
        setMax(weather.forecast.map(item => item.max)[0]);
        setMin(weather.forecast.map(item => item.min)[0]);
        setWind(weather.wind_speedy.replace(' km/h', ''));
        setHumidity(weather.humidity);
        setCount(0)
    }, [setHumidity, setMax, setMin, setWind, weather.forecast, weather.humidity, weather.wind_speedy]);

    const clearDay = () => {
        setDesc(true);
        setDescription(weather.description);
        setCount(0);
        setDay(weather.forecast.map(item => item.weekday)[0]);
        setMonth(weather.date.slice(0, 5));
    }

    const changeMax = () => {
        setTemp(max);
        setCurrent('Max.');
        setUni('°C');

        clearDay();
    };

    const changeMin = () => {
        setTemp(min);
        setCurrent('Mín.');
        setUni('°C');

        clearDay();
    };

    const changeWind = () => {
        setTemp(wind);
        setCurrent('Vento');
        setUni('Km/h');

        clearDay();
    };

    const changeWtr = () => {
        setTemp(humidity);
        setCurrent('Umid.');
        setUni('%');

        clearDay();
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