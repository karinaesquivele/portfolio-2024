

function Button({ children, variant = 'primary', size = 'md', disabled = false }) {
    const buttonClass = `button button--${variant} button--${size} ${disabled ? 'button--disabled' : ''}`;

    return (
        <button className={buttonClass} disabled={disabled}>
            {children}
        </button>
    );
}

export default Button;