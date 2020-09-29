import React, {createContext, useState, useContext} from "react";

const ClimeContext = createContext();

export const ClimeProvider = ({children}) => {
    const [location, setLocation] = useState(false);
    const [weather, setWeather] = useState(false);

    return <ClimeContext.Provider value={{
        location,
        setLocation,
        weather,
        setWeather
    }}>
        {children}
    </ClimeContext.Provider>
};

export const useClime = () => {
    const context = useContext(ClimeContext);

    if(!context) throw new Error("useClime não pode ser usado!");

    const {location, setLocation, weather, setWeather} = context;
    return {location, setLocation, weather, setWeather};
};