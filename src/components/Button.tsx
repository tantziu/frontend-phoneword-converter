import '../styles/Button.scss'

type Props = {
    className: string
    children: React.ReactNode
    disabled: boolean
    onClick: () => void
}

const Button = ({className, children, disabled, onClick}:Props) => {
    const _className = disabled ?  className + " disabled" : className + " active"
    return (
        <button 
            type='button'
            className={_className}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    ) 
}

export default Button
