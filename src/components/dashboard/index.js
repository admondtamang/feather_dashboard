import React from "react";
import "./dashboard.scss";

import DashboardHeader from "./DashboardHeader";
import DashboardNotification from "./DashboardNotification";
import "boxicons";
import DashboardCardUser from "./DashboardCardUser";
import DashboardCardNotes from "./DashboardCardNotes";
import DashboardTabs from "./DashboardTabs";
export default function Dashboard() {
    return (
        <div className="dashboard">
            <DashboardHeader />
            <DashboardNotification />
            <div className="dashboardContainer">
                <div className="dashboardContainer__left">
                    <DashboardCardUser />
                    <DashboardCardNotes />
                </div>
                <div className="dashboardcontainer__right">
                    <DashboardTabs />
                </div>
            </div>
        </div>
    );
}
