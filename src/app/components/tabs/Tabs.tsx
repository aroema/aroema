import React from "react";
import style from './style.module.css'
import Container from "../container/Container";

export type ChildTab = {
    header: React.ReactElement;
    content: React.ReactElement;
}

export enum TabStyle {
    Primary,
    Secondary
}

export default function Tabs({
    childTabs,
    tabStyle = TabStyle.Primary,
}:{
    childTabs: ChildTab[]
    tabStyle?: TabStyle
}) {
    let classNames = style.tabs

    switch (tabStyle) {
        case TabStyle.Primary:
            classNames += ' ' + style.primary
            break
        case TabStyle.Secondary:
            classNames += ' ' + style.secondary
            break
    }
        
    return (
        <Container vertical className={classNames}>
            <Container bordered className={style.tabHeaderContainer}>
                {React.Children.toArray(childTabs.map((childTab) => childTab.header))}
            </Container>
            <Container className={style.tabContentContainer}>
                {React.Children.toArray(childTabs.map((childTab) => childTab.content))}
            </Container>
        </Container>
    )
}