import React from 'react'
import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom'
import Filter from '@/src/features/Filter/ui/Filter'
import { AuthModel } from '@/src/entities/Auth'
import ExitButton from '@/src/features/Auth/Exit/ui/Exit'
import { observer } from 'mobx-react-lite'

const Header = observer(() => {
    const token = AuthModel.AuthStore.token
    return (
        <>
            <header className={styles.root}>
                <div className={styles.root__logo}>
                    <div className={styles.root__logoText}>MyGallery</div>
                </div>
                <nav className={styles.root__nav}>
                    <menu className={styles.root__menu}>
                        <NavLink className={styles.root__item} to='/'>
                            Картины
                        </NavLink>
                        <NavLink
                            className={styles.root__item}
                            to='/collections'
                        >
                            Авторы
                        </NavLink>
                    </menu>
                    <div className={styles.root__actions}>
                        {!token ? (
                            <>
                                <NavLink
                                    to='/auth/login'
                                    className={styles.root__button}
                                >
                                    Войти
                                </NavLink>
                                <NavLink
                                    to={'/auth/register'}
                                    className={styles.root__button}
                                >
                                    Зарегестрироваться
                                </NavLink>
                            </>
                        ) : (
                            <ExitButton />
                        )}
                    </div>
                </nav>
            </header>

            <Filter />
        </>
    )
})

export default Header
