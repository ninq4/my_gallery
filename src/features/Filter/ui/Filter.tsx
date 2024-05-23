import React, { useState } from 'react'
import styles from './Filter.module.scss'
import { SortIcon } from '@/src/app/assets/icons'
import { Tooltip } from '@/src/shared/ui/Tooltip/Tooltip'

const Filter = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className={styles.root}>
            <button
                onClick={() => setOpen(!open)}
                className={styles.root__mainButton}
            >
                <SortIcon />
            </button>
            {open && (
                <div className={styles.root__buttons}>
                    <Tooltip
                        content='Сортировка'
                        id='tooltip-sort'
                        place='top-start'
                        classNameLink={styles.root__link1}
                    >
                        <button className={styles.root__button}>
                            <SortIcon />
                        </button>
                    </Tooltip>
                    <Tooltip
                        content='Сортировка'
                        id='tooltip-sort'
                        place='top-start'
                        classNameLink={styles.root__link2}
                    >
                        <button className={styles.root__button}>
                            <SortIcon />
                        </button>
                    </Tooltip>
                    <Tooltip
                        content='Сортировка'
                        id='tooltip-sort'
                        place='top-start'
                        classNameLink={styles.root__link3}
                    >
                        <button className={styles.root__button}>
                            <SortIcon />
                        </button>
                    </Tooltip>
                </div>
            )}
        </div>
    )
}

export default Filter
