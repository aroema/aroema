import React from "react";
import style from './style.module.css'

export default function TabHeader({
    active = false,
    text,
    onClick,
    children,
}:{
    active: boolean;
    text?: string;
    onClick?: () => void;
    children?: React.ReactNode;
}) {
    let classNames = style.tabHeader

    if(active){
        classNames += ' ' + style.active
    }
    return (
        <div onClick={onClick} className={classNames}>
            {children ?? (
                <span>{text}</span>
            )}
        </div>
    )
}