import { RequestContext } from "../../../../../entity/Request";
import TabContent from "../../../../../components/tabs/TabContent";
import style from "./style.module.css";
import { useContext } from "react";

export function QueryTabContent({ 
    active 
}: { 
    active: boolean 
}) {
    const requestContext = useContext(RequestContext)
    function onclick() {
        requestContext.setRequest(request => {
            const req = {...request}
            req.query.push({
                key: 'key' + (request.query.length + 1),
                value: 'value' + (request.query.length + 1)
            })
            return req
        })
    }
    return (
        <TabContent active={active}>
            <div className={style.tabContainer}>
                <table className={style.table}>
                    <thead>
                        <tr>
                            <th>Key</th>
                            <th>Value
                                <button onClick={onclick}>Add</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {requestContext.request.query.map(query => (
                            <tr key={query.key}>
                                <td>{query.key}</td>
                                <td>{query.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </TabContent>
    )
}
