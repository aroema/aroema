import style from './style.module.css'

export default function InputGroup({
    className,
    children,
}:{
    className?: boolean;
    children: React.ReactNode;
}) {
    let classNames = style.inputGroup;

    if (className) {
        classNames += " " + className;
    }
    
    return (
        <div className={classNames}>
            {children}
        </div>
    )
}