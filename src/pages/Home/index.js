import React from 'react';
import {Title, City, Circle, Control, Auto} from './styles';

const Home = () => {
    return <>
        <Title>
            <div>
                <h1>TEMPERATURA</h1>
            </div>
        </Title>

        <City>
            <div>
                <button>AA</button>
            </div>
            <div>Cidade</div>
            <div>
                <button>BB</button>
            </div>
        </City>

        <Circle>
            <div className="circleColor">
                <div className="circleMain">
                    <div className="unity">°C</div>
                    <div className="Temperature">29</div>
                    <div className="current">29°C agora</div>
                </div>
            </div>
        </Circle>

        <Control>
            <div>
                <button>Ma</button>
            </div>
            <div>
                <button>Mi</button>
            </div>
            <div>
                <button>Up</button>
            </div>
        </Control>

        <Auto>

        </Auto>

        <div>

        </div>
    </>;
};

export default Home;