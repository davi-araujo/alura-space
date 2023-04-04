import logo from './images/logo.png';
import search from './images/search.png';
import styles from './Cabecalho.module.scss'

const Header = () => {
    return (
        <header className={styles.cabecalho}>
            <img src={logo} alt="Logo do Alura Space" />
            <div className={styles.cabecalho__container}>
                <input type="text" placeholder="O que você procura?" className={styles.cabecalho__input}/>
                <img src={search} alt="Ícone de lupa" />
            </div>
        </header>
    );
};

export default Header;