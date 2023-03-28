import logo from './images/logo.png';
import search from './images/search.png';

const Header = () => {
    return (
        <header>
            <img src={logo} alt="Logo do Alura Space" />
            <div>
                <input type="text" placeholder="O que você procura?" />
                <img src={search} alt="Ícone de lupa" />
            </div>
        </header>
    );
};

export default Header;