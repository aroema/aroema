import style from './style.module.css'

export default function Button({
    type = 'button',
    text,
    className,
    primary = false,
    onClick,
}:{
    type?: 'button' | 'submit' | 'reset',
    text: string,
    className?: string,
    primary?: boolean,
    onClick?: () => void,
}) {
    let classNames = style.button

    if(primary) {
        classNames += " " + style.primary
    }

    if(className) {
        classNames += " " + className
    }

    return (
        <button 
            type={type} 
            className={classNames} 
            onClick={onClick}>
                {text}
        </button>
    )
}