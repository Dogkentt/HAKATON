import { NavLink } from "react-router";
import headerData from "../../shared/data/header.json";
import cn from "classnames";
import styles from "./index.module.scss";

const Header = () => {
    return (
        <div className={styles["header"]}>
            { headerData.map((item, i) => (
                <NavLink 
                    key={i} 
                    className={({isActive}) => (cn(styles["header__item"], {
                        [styles["header__item--active"]]: isActive
                    }))} 
                    to={item.path}
                >
                    
                    { item.title }
                </NavLink>
            )) }
        </div>
    )
}

export default Header;