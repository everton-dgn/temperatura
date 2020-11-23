import { useEffect } from 'react';
import { CompAuto } from './styles';
import { useClime } from '../../context';

const Auto = () => {

    const {
        setImage,
        description,
        setDescription,
        weather,
        desc,
    } = useClime();

    let img = weather.img_id;

    useEffect(() => {
        setDescription(weather.description);
        setImage(img);
    }, [img, setDescription, setImage, weather.description, weather.img_id]);

    return <>
        <CompAuto>
            {desc &&
                <div>
                    <img src={require(`../../images/${img}.png`).default}
                         alt='Imagem' />
                    <p>
                        {description}
                    </p>
                </div>
            }
            {!desc &&
                <div>
                    <p>
                        {description}
                    </p>
                </div>
            }
        </CompAuto>
    </>;
};

export default Auto;