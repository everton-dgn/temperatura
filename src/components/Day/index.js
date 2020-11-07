import React, { useEffect } from 'react';
import { CompDay, ArrowL, ArrowR } from './styles';
import { useClime } from '../../context';

const Day = () => {
    const {
        day,
        setDay,
        month,
        setMonth,
        weather,
    } = useClime();

    useEffect(() => {
        setDay(weather.forecast.map(item => item.weekday)[0]);
        setMonth(weather.forecast.map(item => item.date)[0]);
    }, [setDay, weather.forecast, setMonth]);

    return (
        <CompDay>
            <div>
                <button>
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
                <button>
                    <ArrowR/>
                </button>
            </div>
        </CompDay>
    );
};

export default Day;