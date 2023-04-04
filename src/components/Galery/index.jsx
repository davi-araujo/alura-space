import Tags from "../Tags";

import styles from './Galery.module.scss';

import pictures from './pictures.json';

import open from './images/open.png'
import favorito from './images/favorito.png'

const Galery = () => {
    return (
        <section className={styles.galeria}>
            <h2>Navegue pela galeria</h2>
            <Tags />
            <ul className={styles.galeria__cards}>
                {pictures.map(picture => {
                    console.log(picture)
                    return (
                        <li key={picture.id} className={styles.galeria__card}>
                            <img 
                                className={styles.galeria__imagem}
                                src={picture.imagem}
                                alt={picture.titulo}
                            />
                            <p className={styles.galeria__descricao}>{picture.titulo}</p>
                            <div>
                                <p>{picture.creditos}</p>
                                <span>
                                    <img src={favorito} alt="Ícone de coração de curtir" />
                                    <img src={open} alt="ícone de abrir modal" />
                                </span>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default Galery;