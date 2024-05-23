import React from 'react'
interface Props extends React.SVGProps<SVGSVGElement> {}

const SortIcon = (props: Props) => (
    <svg
        width='14'
        height='22'
        viewBox='0 0 14 22'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <path
            d='M13.375 8.875H0.625L7 0.375L13.375 8.875ZM0.625 13.125H13.375L7 21.625L0.625 13.125Z'
            fill='#64D370'
        />
    </svg>
)

export { SortIcon }
