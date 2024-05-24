import { FaHeart } from 'react-icons/fa'
import styles from './Favorite.module.scss'
import { useState } from 'react'
import cn from 'classnames'
import { Props } from './types'

const Favorite = (props: Props) => {
    const [favorite, setFavorite] = useState(false)
    const classNames = cn(styles.root, {
        [styles.root_favorite]: favorite
    })
    const handleButton = () => {
        setFavorite(!favorite)
    }
    return (
        <button className={classNames} onClick={handleButton}>
            <FaHeart />
        </button>
    )
}

export default Favorite
