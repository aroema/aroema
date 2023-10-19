import './theme.css';
import TitleBar from "./widgets/titlebar/TitleBar";
import StatusBar from './widgets/statusbar/StatusBar';
import style from './style.module.css'
import PrimaryBar from './widgets/primarybar/PrimaryBar';
import RequestEditor from './widgets/editor/request/RequestEditor';
import Container from './components/container/Container';
import { Request } from './entity/Request';
import { useState } from 'react';

export default function App() {
  const requestObj: Request = {
    url: 'https://www.example.com',
    method: 'GET',
    headers: [],
    query: [{
        key: 'key',
        value: 'value'
      },
      {
        key: 'key2',
        value: 'value2'
    }],
  }
  const [request, setRequest] = useState<Request>(requestObj)

  function updateRequest(value: Request | ((request: Request) => Request)) {
    setRequest(value)
  }

  return (
    <div className={style.app}>
      <Container vertical>
        <TitleBar />
        <Container className={style.editor}>
          <PrimaryBar />
          <RequestEditor request={request} setRequest={updateRequest} />
          <PrimaryBar />
        </Container>
        <StatusBar />
      </Container>
    </div>
  );
}