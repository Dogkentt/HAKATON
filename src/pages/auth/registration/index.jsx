import { Button, Input } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import styles from "./index.module.scss"

const Registration = () => {
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
            <p>Зарегестрируйте аккаунт,если он у вас есть - <Link to={`/auth/login`}>Войти в аккаунт</Link></p>

            <form className={styles["form"]} onSubmit={handleSubmit(onSubmit)}>
                <Input
                    placeholder="Имя"
                    { ...register("name", {
                        required: true
                    })}
                    error={errors.name}
                />
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
                        required: true, 
                    })} 
                    error={errors.password}
                    
                />

                <Button variant="outlined" type="submit" >Регистрация</Button>
            </form>
        </>
    )
}

export default Registration;