import cn from "classnames";
import styles from "./Block.module.scss";

const Block = ({ children, className }) => {
    return (
        <div className={cn(styles["block"], className)}>
            { children }
        </div>
    )
}

export default Block;