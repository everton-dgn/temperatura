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
        count,
        setCount,
        setDescription,
        setDesc,
    } = useClime();

    useEffect(() => {
        setDay(weather.forecast.map(item => item.weekday)[0]);
        setMonth(weather.date.slice(0, 5));
    }, [setDay, weather.forecast, setMonth, setCount]);

    const changeL = () => {
        setDesc(false);
        if (count > 0) {
            setCount(() => count - 1);
            setDescription(weather.forecast[count].description)
            setDay(weather.forecast[count - 1].weekday);
            setMonth(weather.forecast[count - 1].date);
            setUni('°C');
            setTemp(
                <small className="dayMaxMin">
                    <span
                        className="dayMax">
                        Máx: {weather.forecast[count - 1].max}
                    </span>
                    <span
                        className="dayMin">
                        Mín: {weather.forecast[count - 1].min}
                    </span>
                </small>,
            );
            setCurrent('Previsão');
        }
    };

    const changeR = () => {
        setDesc(false);
        if (count < 9) {
            setCount(() => count + 1);
            setDescription(weather.forecast[count].description)
            setDay(weather.forecast[count + 1].weekday);
            setMonth(weather.forecast[count + 1].date);
            setUni('°C');
            setTemp(
                <small className="dayMaxMin">
                    <span className="dayMax">
                        Máx: {weather.forecast[count + 1].max}
                    </span>
                    <span className="dayMin">
                        Mín: {weather.forecast[count + 1].min}
                    </span>
                </small>,
            );
            setCurrent('Previsão');
        }
    };

    return (
        <CompDay>
            <div>
                <button onClick={changeL}>
                    <ArrowL />
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
                    <ArrowR />
                </button>
            </div>
        </CompDay>
    );
};

export default Day;