import { ChildTab } from "../../../../../components/tabs/Tabs";
import TabHeader from "../../../../../components/tabs/TabHeader";
import { QueryTabContent } from "./QueryTabContent";

export function QueryTabHeader({ 
    active,
    onClick
}: {
    active: boolean,
    onClick: () => void,
}) {
    return (
        <TabHeader active={active} text="Query" onClick={onClick} />
    )
}

export default function QueryTab({ 
    active,
    onClick
}: {
    active: boolean,
    onClick: () => void,
}): ChildTab {
    return {
        header: <QueryTabHeader active={active} onClick={onClick} />,
        content: <QueryTabContent active={active} />,
    } as ChildTab
}