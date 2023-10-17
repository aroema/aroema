import Container from './Container';
import style from './style.module.css'

export default function VerticalContainer({
    children,
}:{
    children?: React.ReactNode;
}) {
    return (
        <Container className={style.vertical}>
            {children}
        </Container>
    )
}