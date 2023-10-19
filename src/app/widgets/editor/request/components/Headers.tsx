import { ChildTab } from "../../../../components/tabs/Tabs";
import TabContent from "../../../../components/tabs/TabContent";
import TabHeader from "../../../../components/tabs/TabHeader";

export function HeadersHeader({ 
    active,
    onClick
}: {
    active: boolean,
    onClick: () => void,
}) {
    return (
        <TabHeader active={active} text="Headers" onClick={onClick} />
    )
}

export function HeadersContent({ 
    active 
}: { 
    active: boolean 
}) {
    return (
        <TabContent active={active}>
            <span>TabHeadersContent</span>
        </TabContent>
    )
}

export default function ({ 
    active,
    onClick,
}: {
    active: boolean,
    onClick: () => void,
}): ChildTab {
    return {
        header: <HeadersHeader active={active} onClick={onClick} />,
        content: <HeadersContent active={active} />,
    } as ChildTab
}