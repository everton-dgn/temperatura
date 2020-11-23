import { useEffect, useState } from 'react';
import { CompDay, ArrowL, ArrowR } from './styles';
import { useClime } from '../../context';

const Day = () => {
    const {
        day,
        setDay,
        month,
        setMonth,
        weather,
        setTemp,
        setUni,
        setCurrent,
    } = useClime();

    const [count, setCount] = useState(0);

    const changeL = () => {
        count > 0 ? setCount(count => count - 1) : setCount(0);
        console.log('valor: ', count)

        console.log(weather.forecast[count].weekday)
        console.log(weather.forecast[count].date)
        console.log(weather.forecast[count].description)
        console.log(weather.forecast[count].max)
        console.log(weather.forecast[count].min)
        setDay(weather.forecast[count].weekday);
        setMonth(weather.forecast[count].date);
        setUni('°C');
        setTemp(
            <small className="dayMaxMin">
                <span className="dayMax">Máx: {weather.forecast[count].max}</span>
                <span className="dayMin">Mín: {weather.forecast[count].min}</span>
            </small>
        );
        setCurrent('Previsão');
    };

    const changeR = () => {
        count < 9 ? setCount(count => count + 1) : setCount(9);
        console.log('valor: ', count)

        console.log(weather.forecast[count].weekday)
        console.log(weather.forecast[count].date)
        console.log(weather.forecast[count].description)
        console.log(weather.forecast[count].max)
        console.log(weather.forecast[count].min)
        setDay(weather.forecast[count].weekday);
        setMonth(weather.forecast[count].date);
        setUni('°C');
        setTemp(
            <small className="dayMaxMin">
                <span className="dayMax">Máx: {weather.forecast[count].max}</span>
                <span className="dayMin">Mín: {weather.forecast[count].min}</span>
            </small>
        );
        setCurrent('Previsão');
    };

    useEffect(() => {
        setDay(weather.forecast.map(item => item.weekday)[0]);
        setMonth(weather.date.slice(0, 5));
    }, [setDay, weather.forecast, setMonth]);

    return (
        <CompDay>
            <div>
                <button onClick={changeL}>
                    <ArrowL/>
                </button>
            </div>
            <div className="dayL">
                {day},
            </div>
            <div className="dayR">
                {month}
            </div>
            <div>
                <button onClick={changeR}>
                    <ArrowR/>
                </button>
            </div>
        </CompDay>
    );
};

export default Day;