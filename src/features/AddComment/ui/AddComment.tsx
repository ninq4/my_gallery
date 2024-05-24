import { Input } from '@/src/shared/ui/Input/Input'
import cn from 'classnames'
import React, { FormEvent, useState } from 'react'
import { Props } from './types'
import styles from './AddComment.module.scss'
import { CommentModel } from '@/src/entities/Comment'
import { AuthModel } from '@/src/entities/Auth'
import { TCreateComment } from '@/src/entities/Comment/api/types'
import { useSend } from '../model'
import { queryClient } from '@/src/shared/config/react-query'

const AddComment = (props: Props) => {
    const [content, setContent] = useState<string>('')
    const classNames = cn(styles.root, props.className)
    const userName = AuthModel.AuthStore
    const resp = {
        data: {
            content: content,
            author: userName.userName,
            picture: props.id
        }
    }
    const hook = CommentModel.Hooks.useSendComment({})
    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        await hook.mutate(resp)
        setContent('')
        await queryClient.invalidateQueries({ queryKey: ['pictures'] })
    }
    return (
        <form onSubmit={onSubmit} className={classNames}>
            <Input
                className={styles.root__input}
                inputClassName={styles.root__inputInner}
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button className={styles.root__button}>Отправить</button>
        </form>
    )
}

export default AddComment
