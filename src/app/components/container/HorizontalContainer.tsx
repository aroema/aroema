import Container from './Container';
import style from './style.module.css'

export default function HorizontalContainer({
    children,
}:{
    children?: React.ReactNode;
}) {
    return (
        <Container className={style.horizontal}>
            {children}
        </Container>
    )
}