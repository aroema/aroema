import style from "./style.module.css";
import ProjectFolders from "../projectfolder/ProjectFolders";


export default function PrimaryBar() {
    return (
        <div className={style.primaryBar}>
            <ProjectFolders></ProjectFolders>
        </div>
    )
}