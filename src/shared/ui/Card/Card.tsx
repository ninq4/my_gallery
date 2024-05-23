import React, { useState } from 'react'
import styles from './Card.module.scss'
import Button from '../Button/Button'
import { Props } from './types'
import Modal from '../Modal/Modal'

const Card = (props: Props) => {
    const [open, setOpen] = useState(false)
    if (open === true) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }
    console.log(props.comment)
    return (
        <>
            <div className={styles.root}>
                <img className={styles.root__image} src={props.image} alt='' />
                <div className={styles.root__content}>
                    <h4 className={styles.root__title}>{props.title}</h4>
                    <p className={styles.root__date}>
                        {props.data.slice(0, 10)}
                    </p>
                </div>
                <Button
                    onClick={() => setOpen(true)}
                    className={styles.root__button}
                >
                    Посмотреть полностью
                </Button>
            </div>
            {open && (
                <Modal
                    onClose={() => setOpen(false)}
                    description={props.description}
                    title={props.title}
                    date={props.data}
                    image={props.image}
                    comments={props.comment}
                />
            )}
        </>
    )
}

export default Card
