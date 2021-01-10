import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Tab1 from "./DashboardTabs/Tab1";
import Tab2 from "./DashboardTabs/Tab2";
import Tab3 from "./DashboardTabs/Tab3/Tab3";
export default function DashboardTabs({ tab1, tab2, tab3 }) {
    return (
        <div className="dashboardtabs card">
            <Tabs>
                <TabList>
                    <Tab>{tab1}</Tab>
                    <Tab>{tab2}</Tab>
                    <Tab>{tab3}</Tab>
                </TabList>
                <TabPanel>
                    <Tab1 />
                </TabPanel>
                <TabPanel>
                    <Tab2 />
                </TabPanel>
                <TabPanel>
                    <Tab3 />
                </TabPanel>
            </Tabs>
        </div>
    );
}
