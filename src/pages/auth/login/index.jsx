import { Button, Input } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import styles from "./index.module.scss"

const Login = () => {
    const {  
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
            <p>Войдите в свой аккаунт или <Link to={`/auth/registration`}>Зарегестрироваться</Link></p>

            <form className={styles["form"]} onSubmit={handleSubmit(onSubmit)}>
                <Input
                    placeholder="Логин"
                    { ...register("login", {
                        required: true
                    })}
                    error={errors.login}
                />
                <Input
                    placeholder="Пароль"
                    { ...register("password", {
                        required: true
                    })} 
                    error={errors.password}
                    
                />

                <Button variant="outlined" type="submit" >Войти</Button>
            </form>
        </>
    )
}

export default Login;