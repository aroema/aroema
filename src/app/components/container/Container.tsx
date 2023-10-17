import style from './style.module.css'

export default function Container({
    className,
    children,
}:{
    className?: boolean;
    children?: React.ReactNode;
}) {
    let classNames = style.container;

    if (className) {
        classNames += " " + className;
    }
    
    return (
        <div className={classNames}>
            {children}
        </div>
    )
}