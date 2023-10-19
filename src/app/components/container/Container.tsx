import style from './style.module.css'

export default function Container({
    className,
    vertical = false,
    bordered = false,
    children,
}:{
    className?: string
    vertical?: boolean
    bordered?: boolean
    children?: React.ReactNode
}) {
    let classNames = style.container;

    if(vertical){
        classNames += ' ' + style.vertical;
    } else{
        classNames += ' ' + style.horizontal;
    }

    if (bordered) {
        classNames += " " + style.bordered;
    }

    if (className) {
        classNames += " " + className;
    }
    
    return (
        <div className={classNames}>
            {children}
        </div>
    )
}