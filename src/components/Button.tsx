type Props = {
    className: string
    children: any
    onClick: () => void
}

const Button = ({className, children, onClick}:Props) => {
    <button 
        type='button'
        className={className}
        onClick={onClick}
    >
        {children}
    </button>
}

export default Button