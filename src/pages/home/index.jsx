import { Button } from "@mui/material";
import styles from "./index.module.scss";

export default function Home() {
    return (
        <div className={styles["wrap"]}>
            <h1 className={styles["wrap-title"]}>Панель управления для проведения сорвенований</h1>

            <p className={styles["wrap-text"]}>
                Разработана с душой для удобного проведения соревнований
            </p>

            <Button variant="contained" color="success" size="large" style={{ marginTop: "14px", minWidth: "200px", borderRadius: "12px"}}>
                Создать
            </Button>
        </div>
    )
}