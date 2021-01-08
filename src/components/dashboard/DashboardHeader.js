import React from "react";

export default function DashboardHeader() {
    return (
        <>
            <header className="dashboard__header">
                <div className="header__breadcrum">
                    <span> Dashboard / List Page</span> <b>/ Single Page</b>
                </div>
                <div className="header__right">
                    <div className="header__right_buttons">
                        <a href="#" className="contain">
                            Call to action
                        </a>
                        <a href="#" className="outline">
                            Support
                        </a>
                    </div>
                    <div className="header__right_icons">
                        <box-icon
                            name="notification"
                            color="#5D5D5D"
                        ></box-icon>
                        <box-icon
                            name="message-square-detail"
                            color="#5D5D5D"
                        ></box-icon>

                        <img src="avatar.png" alt="avatar" />
                    </div>
                </div>
            </header>
        </>
    );
}
