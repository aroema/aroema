
import style from './style.module.css'
import RequestHeader from './components/RequestHeader'
import Configuration from './components/Configuration'
import Container from '../../../components/container/Container'
import { Request, RequestContext } from '../../../entity/Request'

export default function RequestEditor({
    request,
    setRequest,
}:{
    request: Request
    setRequest: (value: Request | ((request: Request) => Request)) => void
}) {
    return (
        <RequestContext.Provider value={{request, setRequest}}>
            <Container vertical className={style.requestContainer}>
                <Container>
                    <RequestHeader />
                </Container>
                <Container className={style.grow}>
                    <Configuration  />
                </Container>
            </Container>
        </RequestContext.Provider>
    )
}