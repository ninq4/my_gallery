import React from 'react'
import styles from './Footer.module.scss'
import Container from '@/src/shared/ui/Container/Container'
import { NavLink } from 'react-router-dom'
import ExitButton from '@/src/features/Auth/Exit/ui/Exit'
import { AuthModel } from '@/src/entities/Auth'

const Footer = () => {
    const token = AuthModel.AuthStore.token
    return (
        <footer className={styles.root}>
            <Container className={styles.root__container}>
                <div className={styles.root__content}>
                    <NavLink className={styles.root__link} to='/'>
                        Картины
                    </NavLink>
                    <NavLink className={styles.root__link} to='/'>
                        Авторы
                    </NavLink>
                </div>
                <div className={styles.root__logo}>MyGallery</div>
                <div className={styles.root__content}>
                    {!token ? (
                        <>
                            <NavLink
                                to='/auth/login'
                                className={styles.root__link}
                            >
                                Войти
                            </NavLink>
                            <NavLink
                                to={'/auth/register'}
                                className={styles.root__link}
                            >
                                Зарегестрироваться
                            </NavLink>
                        </>
                    ) : (
                        <ExitButton className={styles.root__link} />
                    )}
                </div>
            </Container>
        </footer>
    )
}

export default Footer
