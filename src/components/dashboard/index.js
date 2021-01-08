import React from "react";
import "./dashboard.scss";

import DashboardHeader from "./DashboardHeader";
import DashboardNotification from "./DashboardNotification";
import "boxicons";
export default function Dashboard() {
    return (
        <div className="dashboard">
            <DashboardHeader />
            <DashboardNotification />
            <div className="dashboardContainer">
                <div className="dashboardContainer__left">
                    <div className="feather__card card">
                        <div className="feather__card_menu">
                            <box-icon
                                name="message-square-detail"
                                color="#5D5D5D"
                            />
                        </div>
                        <img src="avatar.png" alt="avatar" />
                        <h1>Featherwebs Inc</h1>
                        <span>
                            256 Priscilla Dale Suite 602
                            <br /> christy_cartwright@yahoo.com
                            <br />
                            140-085-4934
                        </span>
                        <a href="#" className="contain">
                            Main Button
                        </a>
                        <span>Date of Registration</span>
                        <p>18/09/2018</p>
                        <hr />
                        <div className="profile">
                            <img src="avatar.png" alt="avt" />
                            <div className="profile__right">
                                <h1>John Maharjan</h1>
                                <span>
                                    johnmarg@gmail.com <br /> 98454545454
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <dashboardcontainer__right></dashboardcontainer__right>
            </div>
        </div>
    );
}
