import MenuItem from "../MenuItem";

import home from "./icons/home-ativo.png";
import maisCurtidas from "./icons/mais-curtidas-inativo.png";
import maisVistas from "./icons/mais-vistas-inativo.png";
import novas from "./icons/novas-inativo.png";
import surpreendame from "./icons/surpreenda-me-inativo.png";

import styles from "./Menu.module.scss";

const Menu = () => {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                <MenuItem 
                    className={styles.menu__item}
                    text="Início"
                    image={home}
                    alt="Ícone início"
                />
                <MenuItem 
                    className={styles.menu__item}
                    text="Mais curtidas"
                    image={maisCurtidas}
                    alt="Ícone mais curtidas"
                />
                <MenuItem
                    className={styles.menu__item} 
                    text="Mais vistas"
                    image={maisVistas}
                    alt="Ícone mais vistas"
                />
                <MenuItem 
                    className={styles.menu__item}
                    text="Novas"
                    image={novas}
                    alt="Ícone novas"
                />
                <MenuItem 
                    className={styles.menu__item}
                    text="Surpreenda-me"
                    image={surpreendame}
                    alt="Ícone surpreenda-me"
                />
            </ul>
        </nav>
    );
}

export default Menu;