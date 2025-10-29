import { Button } from "@mui/material";
import styles from "./index.module.scss";
import { Link } from "react-router";

export default function Home() {
    return (
        <div className={styles["wrap"]}>
            <h1 className={styles["wrap-title"]}>Система организации сорвенований по полиатлону</h1>

            <p className={styles["wrap-text"]}>
                Разработана с душой для удобного проведения соревнований
            </p>

            <Link to={`/competitions`}>
                <Button variant="contained" color="success" size="large" style={{ marginTop: "14px", minWidth: "200px", borderRadius: "12px"}}>
                    Создать
                </Button>
            </Link>
        </div>
    )
}