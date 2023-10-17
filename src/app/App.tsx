import './theme.css';
import HorizontalContainer from './components/container/HorizontalContainer';
import VerticalContainer from './components/container/VerticalContainer';
import TitleBar from "./widgets/titlebar/TitleBar";
import StatusBar from './widgets/statusbar/StatusBar';
import style from './style.module.css'
import PrimaryBar from './widgets/primarybar/PrimaryBar';
import EmptyEditor from './widgets/editor/empty/EmptyEditor';

export default function App() {
  return (
    <div className={style.app}>
      <VerticalContainer>
        <TitleBar />
        <HorizontalContainer>
          <PrimaryBar />
          <EmptyEditor />
        </HorizontalContainer>
        <StatusBar />
      </VerticalContainer>
    </div>
  );
}