function Button({ children, variant = 'primary', size = 'md', disabled = false, onClick }) {
    const buttonClass = `button button--${variant} button--${size} ${disabled ? 'button--disabled' : ''}`;

    return (
        <button className={buttonClass} onClick={!disabled ? onClick : undefined} disabled={disabled}>
            {children}
        </button>
    );
}

export default Button;
