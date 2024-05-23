import cn from 'classnames'
import styles from './Tooltip.module.scss'
import { Props } from './types'
import { Tooltip as BaseToolTip } from 'react-tooltip'
export const Tooltip = ({
    className,
    classNameArrow,
    border,
    classNameLink,
    ...props
}: Props) => {
    const classNames = cn(styles.root, className)
    const classNamesArrow = cn(styles.root__arrow, classNameArrow)
    const classNamesLink = cn(styles.root__link, classNameLink)
    return (
        <>
            <a className={classNamesLink} id={props.id}>
                {props.children}
            </a>
            <BaseToolTip
                anchorSelect={`#${props.id}`}
                border={border}
                className={classNames}
                classNameArrow={classNamesArrow}
                {...props}
            >
                {props.content}
            </BaseToolTip>
        </>
    )
}
