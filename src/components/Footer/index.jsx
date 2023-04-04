import facebook from './images/facebook.svg';
import twitter from './images/twitter.svg';
import instagram from './images/instagram.svg';

import './Footer.modules.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__social_media">
                <img src={facebook} alt="Logotipo do Facebook" />
                <img src={twitter} alt="Logotipo do Twitter" />
                <img src={instagram} alt="Logotipo do Instagram" />
            </div>
            <p>Desenvolvido por Alura.</p>
        </footer>
    );
}

export default Footer;