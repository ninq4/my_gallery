import { Input } from '@/src/shared/ui/Input/Input'
import cn from 'classnames'
import React, { FormEvent } from 'react'
import { Props } from './types'
import styles from './AddComment.module.scss'

const AddComment = (props: Props) => {
    const classNames = cn(styles.root, props.className)
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }
    return (
        <form onSubmit={onSubmit} className={classNames}>
            <Input
                className={styles.root__input}
                inputClassName={styles.root__inputInner}
            />
            <button className={styles.root__button}>Отправить</button>
        </form>
    )
}

export default AddComment
