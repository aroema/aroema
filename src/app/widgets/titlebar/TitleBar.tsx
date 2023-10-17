import Title from '../../components/title/Title'
import Logo from '../../components/logo/Logo'
import style from './style.module.css'

export default function TitleBar() {
    return (
        <nav className={style.titleBar}>
            <div className={style.titleBarLeft}>
                <Logo className={style.logo} />
            </div>
            <div className={style.titleBarCenter}>
                <Title />
            </div>
            <div className={style.titleBarRight}>
                <Logo className={style.logo} />
                <div className={style.titleBarOverlay}></div>
            </div>
        </nav>
    )
}