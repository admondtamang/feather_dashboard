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
                    <DashboardTabs
                        tab1="Documents"
                        tab2="Notes"
                        tab3="Communication Log"
                    />
                </div>
            </div>
            <footer>
                <h1>Feather UI</h1>
                <ul>
                    <li>About the company</li>
                    <li>Privacy Policy</li>
                    <li>Terms and condition</li>
                    <li>Contact</li>
                </ul>
            </footer>
        </div>
    );
}
