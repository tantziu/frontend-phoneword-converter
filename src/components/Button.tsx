type Props = {
    className: string
    children: React.ReactNode
    disabled: boolean
    onClick: () => void
}

const Button = ({className, children, disabled, onClick}:Props) => {
    return (
        <button 
            type='button'
            className={disabled ? className + " disabled" : className + " active"}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    ) 
}

export default Button
