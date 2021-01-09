import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Tab1 from "./DashboardTabs/Tab1";
import Tab2 from "./DashboardTabs/Tab2";
export default function DashboardTabs() {
    return (
        <div className="dashboardtabs card">
            <Tabs>
                <TabList>
                    <Tab>Sub Menu 1</Tab>
                    <Tab>Sub Menu 2</Tab>
                    <Tab>Sub Menu 3</Tab>
                </TabList>
                <TabPanel>
                    <Tab1 />
                </TabPanel>
                <TabPanel>
                    <Tab2 />
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
}
