import React from 'react'
import { Props } from './types'
import styles from './Container.module.scss'
import cn from 'classnames'

const Container = (props: Props) => {
    const classNames = cn(styles.root, props.className)
    return <div className={classNames}>{props.children}</div>
}

export default Container
