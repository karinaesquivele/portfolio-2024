function Typography({ variant, children }) {
    const Tag = variant === 'super-title' ? 'h1' :
                   variant === 'super-subtitle' ? 'h2' :
                   variant === 'main-text' ? 'p' :
                   variant === 'super-text' ? 'p' :
                   variant === 'title' ? 'h3' :
                   variant === 'subtitle' ? 'h4' :
                   'span'; // Valor predeterminado para un span
    
        return (
            <Tag className={variant}>
                {children}
            </Tag>
        );
}

export default Typography;
