import { InputProps } from 'react-aria-components'

export type Props = Omit<InputProps, 'ref'> & {
    inputClassName?: string
    validate?: (value: string) => true | string
    inputStyle?: `${inputStyle}`
}

enum inputStyle {
    DEFAULT = 'default',
    WITHOUTBORDER = 'withOutBorder'
}
