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
            <div className="load"
                 style={{
                     transform: 'rotate(-90deg)',
                     background: temp * 1.5 > 51 ?
                         `linear-gradient(to left, #00b3b3 50%, transparent 50%, transparent), linear-gradient(${90 + (3.6 * temp * 1.5)}deg, #212429 50%, #00b3b3 50%)` :
                         `linear-gradient(to right, #212429 50%, transparent 50%, transparent), linear-gradient(${90 + (3.6 * temp * 1.5)}deg, #00b3b3 50%, #212429 50%)`
                 }}
            />
        </CompCircle>
    );
};

export default Circle;