import { Outlet } from "react-router";
import styles from "./index.module.scss"

export default function Auth() {
    return (
        <div className={styles["wrap"]}>
            <h1>Авторизация</h1>

            <Outlet />
        </div>
    )
}