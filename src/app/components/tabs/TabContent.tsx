import style from './style.module.css'

export default function TabContent({
    active = false,
    children,
}:{
    active: boolean;
    children: React.ReactNode;
}) {
    return (
        <>{active && children}</>
    )
}