import React from 'react'
import styles from './Modal.module.scss'
import AddComment from '@/src/features/AddComment/ui/AddComment'
import { Props } from './types'
import { Api } from '@/src/entities/Comment/api'
import { CommentModel } from '@/src/entities/Comment'

const Modal = ({ comments, ...props }: Props) => {
    // const test = () => {
    //     Api.send({
    //         data: {
    //             content: '123',
    //             author: 'test',
    //             picture: 1
    //         }
    //     })
    // }
    return (
        <div className={styles.root}>
            <div className={styles.root__modal}>
                <div className={styles.root__header}>
                    <button
                        onClick={props.onClose}
                        className={styles.root__close}
                    >
                        X
                    </button>
                </div>
                <div className={styles.root__content}>
                    <div className={styles.root__leftContent}>
                        <img
                            className={styles.root__image}
                            src={props.image}
                            alt=''
                        />
                        <div className={styles.root__info}>
                            <div className={styles.root__titleContent}>
                                <h4 className={styles.root__title}>
                                    {props.title}
                                </h4>
                                <p className={styles.root__date}>
                                    {props.date?.slice(0, 10)}
                                </p>
                            </div>
                            <p className={styles.root__description}>
                                {props.description}
                            </p>
                        </div>
                    </div>
                    <div className={styles.root__rightContent}>
                        <div className={styles.root__comments}>
                            {comments?.data.map(
                                (comment: any, index: number) => (
                                    <div
                                        key={index}
                                        className={styles.root__comment}
                                    >
                                        <h4
                                            className={styles.root__commentName}
                                        >
                                            {comment.attributes.author}
                                        </h4>
                                        <p className={styles.root__commentText}>
                                            {comment.attributes.content}
                                        </p>
                                    </div>
                                )
                            )}
                        </div>
                        <AddComment id={props.id as number} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
