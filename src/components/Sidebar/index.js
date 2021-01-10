import React from "react";
import { Link } from "react-router-dom";
import "boxicons";
import "./sidebar.scss";
export default function Sidebar() {
    return (
        <div className="sidebar">
            <h1>Feather UI</h1>
            <ul>
                <Link to="/">
                    <li>
                        <box-icon name="rocket"></box-icon>
                        <span>Dashboard</span>
                        <box-icon
                            name="chevron-down"
                            color="#00D1B2"
                            type="solid"
                        ></box-icon>
                    </li>
                </Link>{" "}
                <Link to="/">
                    <li className="active_menu">
                        <box-icon name="rocket"></box-icon>
                        <span>Dashboard</span>
                        <box-icon
                            name="chevron-down"
                            color="#00D1B2"
                            type="solid"
                        ></box-icon>
                    </li>
                </Link>{" "}
                <Link to="/">
                    <li>
                        <box-icon name="rocket"></box-icon>
                        <span>Dashboard</span>
                        <box-icon
                            name="chevron-down"
                            color="#00D1B2"
                            type="solid"
                        ></box-icon>
                    </li>
                </Link>{" "}
                <Link to="/">
                    <li>
                        <box-icon name="rocket"></box-icon>
                        <span>Dashboard</span>
                        <box-icon
                            color="#00D1B2"
                            name="chevron-down"
                            type="solid"
                        ></box-icon>
                    </li>
                </Link>
            </ul>
        </div>
    );
}
