import React from 'react'
import styles from './page.module.scss'
import Register from '@/src/features/Auth/Register/ui/Register'
import cn from 'classnames'
import { NavLink } from 'react-router-dom'

export default function RegisterPage() {
    return (
        <div className={styles.root}>
            <div
                className={cn(styles.root__wrapper, styles.root__wrapper_green)}
            >
                <div className={styles.root__logo}>MyGallery</div>
            </div>
            <div className={styles.root__wrapper}>
                <Register />
                <NavLink to={'/auth/login'} className={styles.root__link}>
                    Войти
                </NavLink>
            </div>
        </div>
    )
}
