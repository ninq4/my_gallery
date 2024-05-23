import React, { useEffect } from 'react'
import Login from '@/src/features/Auth/Login/ui/Login'
import { observer } from 'mobx-react-lite'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthModel } from '@/src/entities/Auth'
import styles from './page.module.scss'
import cn from 'classnames'

const LoginPage = observer(() => {
    const navigate = useNavigate()
    useEffect(() => {
        if (AuthModel.AuthStore.token !== '') {
            navigate('/')
        }
    }, [AuthModel.AuthStore.token])
    return (
        <div className={styles.root}>
            <div className={styles.root__wrapper}>
                <Login />
                <NavLink to={'/auth/register'} className={styles.root__link}>
                    Зарегестрироваться
                </NavLink>
            </div>
            <div
                className={cn(styles.root__wrapper, styles.root__wrapper_green)}
            >
                <div className={styles.root__logo}>MyGallery</div>
            </div>
        </div>
    )
})

export default LoginPage
