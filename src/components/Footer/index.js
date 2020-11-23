import { CompFooter, Ther, Update, Light, Dark, SearchBox } from './styles';
import { useClime } from '../../context';

const Footer = () => {

    const {
        setUni,
        setCurrent,
        setTemp,
        weather,
    } = useClime();

    const changeDefault = () => {
        setTemp(weather.temp);
        setCurrent('Agora');
        setUni('°C');
    };

    return (
        <CompFooter>
            <div>
                <button>
                    <SearchBox />
                </button>
            </div>

            <div>
                <button>
                    <Ther />
                </button>
            </div>

            <div>
                <button>
                    <Light />
                </button>
            </div>

            <div>
                <button onClick={changeDefault}>
                    <Update />
                </button>
            </div>
        </CompFooter>
    );
};

export default Footer;