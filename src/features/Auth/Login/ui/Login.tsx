import { Input } from '@/src/shared/ui/Input/Input'
import styles from './Login.module.scss'
import React, { useState } from 'react'
import { useAuth } from '../model'
import { observer } from 'mobx-react-lite'
import Button from '@/src/shared/ui/Button/Button'

const Login = observer(() => {
    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('')
    const { auth, errorMessage } = useAuth()
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        auth({ identifier, password })
    }
    return (
        <form onSubmit={onSubmit} className={styles.root}>
            <h1 className={styles.root__title}>Вход</h1>
            <Input
                required
                aria-label='Логин'
                placeholder='Логин'
                type='text'
                className={styles.root__input}
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
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
            <Button className={styles.root__button}>Войти</Button>
        </form>
    )
})

export default Login
