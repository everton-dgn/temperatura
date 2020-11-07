import React, { useEffect } from 'react';
import { CompAuto } from './styles';
import { useClime } from '../../context';

const Auto = () => {

    const {
        setImage,
        description,
        setDescription,
        weather,
    } = useClime();

    let img = weather.img_id;

    useEffect(() => {
        setDescription(weather.description);
        setImage(img);
    }, [img, setDescription, setImage, weather.description, weather.img_id]);

    return <>
        <CompAuto>
            <div>
                <img src={require('../../images/'+ img + '.png')} alt='Imagem'/>
                <p>
                    {description}
                </p>
            </div>
        </CompAuto>
    </>;
};

export default Auto;