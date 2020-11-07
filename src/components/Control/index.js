import { useEffect } from 'react';
import { CompControl, Max, Min, Win, Wtr } from './styles';
import { useClime } from '../../context';

export const Control = () => {
    const {
        max,
        min,
        wind,
        setMax,
        setMin,
        setWind,
        setHumidity,
        weather,
    } = useClime();

useEffect(()=>{
    setMax(weather.forecast.map(item => item.max)[0]);
    setMin(weather.forecast.map(item => item.min)[0]);
    setWind(weather.wind_speedy.replace(' km/h', ''));
    setHumidity(weather.humidity);
}, [setHumidity, setMax, setMin, setWind, weather.forecast, weather.humidity, weather.wind_speedy]);

    return (
        <CompControl>
            <div>
                <button><Max/></button>
            </div>
            <div>
                <button><Min/></button>
            </div>
            <div>
                <button><Win/></button>
            </div>
            <div>
                <button><Wtr/></button>
            </div>
        </CompControl>
    );
};

export default Control;