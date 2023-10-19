import { useState } from "react";
import Tabs, { ChildTab, TabStyle } from "../../../../components/tabs/Tabs";
import Headers from "./Headers";
import QueryTab from "./query/QueryTab";

export default function Configuration() {
    const [selected, setSelected] = useState('query')

    const childTabs: ChildTab[] = [
        QueryTab({ 
            active: (selected === 'query'),
            onClick: () => setSelected('query')
        }),
        Headers({ 
            active: (selected === 'headers'),
            onClick: () => setSelected('headers')
        }),
    ]

    return (
        <Tabs tabStyle={TabStyle.Secondary} childTabs={childTabs} />
    )
}