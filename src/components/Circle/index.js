import { useEffect } from 'react';
import { CompCircle } from './styles';
import { useClime } from '../../context';

const Circle = () => {
    const {
        uni,
        setUni,
        temp,
        setTemp,
        current,
        setCurrent,
        weather,
    } = useClime();

    useEffect(() => {
        setUni('°C');
        setTemp(weather.temp);
        setCurrent('Agora');
    }, [setCurrent, setTemp, setUni, weather.temp]);

    return (
        <CompCircle>
            <div className="circleColor">

                <div className="circleMain">
                    <div className="unity">
                        {uni}
                    </div>
                    <div className="Temperature">
                        {temp.length >= 3 ? <span>{temp}</span> : temp}
                    </div>
                    <div className="current">
                        {current}
                    </div>
                </div>
            </div>
            <div className="load"></div>
        </CompCircle>
    );
};

export default Circle;