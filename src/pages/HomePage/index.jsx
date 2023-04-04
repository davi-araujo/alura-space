import Header from "../../components/Header";
import Menu from "../../components/Menu";

import banner from "./banner.png";

import styles from "./PaginaInicial.module.scss";

const HomePage = () => {
    return (
        <>
            <Header />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <div className={styles.principal__imagem}>
                        <h1>A galeria mais completa do espaço!</h1>
                        <img src={banner} alt="A imagem da terra vista do espaço" />
                    </div>
                </section>
            </main>
        </>
    );
};

export default HomePage;