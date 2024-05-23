import { ReactNode } from 'react'
import { ITooltip } from 'react-tooltip'

export type Props = ITooltip & {
    children: ReactNode
    classNameLink?: string
}
