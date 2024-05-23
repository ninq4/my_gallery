import React from 'react'
import { Props } from './types'
import styles from './Button.module.scss'
import cn from 'classnames'

const Button = (props: Props) => {
    const classNames = cn(styles.root, props.className)
    return (
        <button className={classNames} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button
