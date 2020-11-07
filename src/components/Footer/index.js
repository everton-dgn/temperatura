import {CompFooter, Ther, Update, Light, Dark, SearchBox} from './styles';

const Footer = () => {

    return (
        <CompFooter>
            <div>
                <SearchBox/>
            </div>

            <div>
                <Ther/>
            </div>

            <div>
                <Light/>
            </div>

            <div>
                <Update/>
            </div>
        </CompFooter>
    );
};

export default Footer