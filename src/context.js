import { createContext, useState, useContext } from 'react';

const ClimeContext = createContext();

export const ClimeProvider = ({ children }) => {
    const [location, setLocation] = useState(false);
    const [weather, setWeather] = useState(false);
    const [city, setCity] = useState(false);
    const [day, setDay] = useState(false);
    const [month, setMonth] = useState(false);
    const [uni, setUni] = useState(false);
    const [temp, setTemp] = useState(false);
    const [current, setCurrent] = useState(false);

    const [max, setMax] = useState(false);
    const [min, setMin] = useState(false);
    const [wind, setWind] = useState(false);
    const [humidity, setHumidity] = useState(false);

    const [image, setImage] = useState(false);
    const [description, setDescription] = useState(false);

    return <ClimeContext.Provider value={{
        location,
        setLocation,
        weather,
        setWeather,

        city,
        setCity,

        day,
        setDay,
        month,
        setMonth,

        uni,
        setUni,
        temp,
        setTemp,
        current,
        setCurrent,

        max,
        min,
        wind,
        humidity,
        setMax,
        setMin,
        setWind,
        setHumidity,

        image,
        setImage,
        description,
        setDescription,
    }}>
        {children}
    </ClimeContext.Provider>;
};

export const useClime = () => {
    const context = useContext(ClimeContext);

    if (!context) throw new Error('useClime não pode ser usado!');

    const {
        location, setLocation, weather, setWeather, city, setCity, day,
        setDay, month, setMonth, uni, setUni, temp, setTemp, current, setCurrent,
        max, min, wind, humidity, setMax, setMin, setWind, setHumidity, image,
        setImage, description, setDescription,
    } = context;
    return {
        location, setLocation, weather, setWeather, city, setCity, day,
        setDay, month, setMonth, uni, setUni, temp, setTemp, current,
        setCurrent, max, min, wind, humidity, setMax, setMin, setWind, setHumidity,
        image, setImage, description, setDescription, wind_speedy: undefined,
        forecast() {
            return undefined;
        },
        img_id() {

        },
    };
};