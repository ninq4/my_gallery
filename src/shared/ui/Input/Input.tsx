import cn from 'classnames'
import styles from './Input.module.scss'
import {
    Input as AriaInput,
    FieldError,
    TextField
} from 'react-aria-components'
import { ForwardedRef, forwardRef } from 'react'
import { Props } from './types'

export const Input = forwardRef(
    (
        {
            className,
            inputClassName,
            'aria-label': ariaLabel,
            validate,
            ...props
        }: Props,
        ref: ForwardedRef<HTMLInputElement>
    ) => {
        const classNames = cn(className, styles.root)
        const inputClassNames = cn(inputClassName, styles.root__input)
        return (
            <TextField
                aria-label={ariaLabel}
                className={classNames}
                validate={validate}
                value={props.value as string}
            >
                <AriaInput
                    className={inputClassNames}
                    {...props}
                    ref={ref}
                ></AriaInput>
                <FieldError />
            </TextField>
        )
    }
)
