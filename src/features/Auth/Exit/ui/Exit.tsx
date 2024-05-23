import { observer } from 'mobx-react-lite'
import useExit from '../model'
import styles from './Exit.module.scss'
import cn from 'classnames'
import { Props } from './types'

const ExitButton = observer((props: Props) => {
    const exit = useExit()
    const classNames = cn(styles.root, props.className)
    return (
        <button className={classNames} onClick={exit}>
            Выйти
        </button>
    )
})

export default ExitButton
