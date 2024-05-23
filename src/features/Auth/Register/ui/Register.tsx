import { Input } from '@/src/shared/ui/Input/Input'
import styles from './Register.module.scss'
import React, { FormEvent, useState } from 'react'
import { observer } from 'mobx-react-lite'
import Button from '@/src/shared/ui/Button/Button'
import useRegister from '../model'

const Register = observer(() => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const [email, setEmail] = useState('')
    const { register } = useRegister()
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        register({ email, username, password })
    }
    return (
        <form onSubmit={onSubmit} className={styles.root}>
            <h1 className={styles.root__title}>Регистрация</h1>
            <Input
                required
                aria-label='Почта'
                placeholder='Почта'
                type='email'
                className={styles.root__input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                required
                aria-label='Логин'
                placeholder='Логин'
                type='text'
                className={styles.root__input}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <Input
                required
                aria-label='Пароль'
                placeholder='Пароль'
                type='password'
                className={styles.root__input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {errorMessage && (
                <p className={styles.root__error}>{errorMessage}</p>
            )}
            <Button className={styles.root__button}>Зарегестрироваться</Button>
        </form>
    )
})

export default Register
