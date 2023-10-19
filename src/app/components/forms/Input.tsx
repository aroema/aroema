import style from './style.module.css'

export default function Input({
    id,
    name,
    type = 'text',
    value,
    required = false,
    placeholder,
    className,
    props,
}:{
    id?: string,
    name: string,
    type?: string,
    value?: string,
    required?: boolean,
    placeholder?: string,
    className?: string,
    props?: object,
}) {
    let classNames = style.input

    if(className) {
        classNames += " " + className
    }

    return (
        <input
            id={id ?? name}
            name={name}
            type={type}
            value={value}
            required={required}
            placeholder={placeholder}
            className={classNames}
            {...props}
        />
    )
}