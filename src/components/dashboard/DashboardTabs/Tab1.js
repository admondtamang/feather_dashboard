import React from "react";
import TabPost from "./TabPost";

export default function Tab1() {
    return (
        <>
            <div className="dasboardtabs__upload">
                <div className="upload__detail">
                    <b>Document</b>
                    <p>Please upload yourdocument</p>
                </div>
                <a href="#" className="outline">
                    Upload Document
                </a>
            </div>
            <div className="tabs__document">
                <ul className="tabs__doculument_ul">
                    <li className="active_tab">
                        <box-icon
                            type="solid"
                            name="file-blank"
                            color="#FFCD00"
                        ></box-icon>
                        My Document
                    </li>
                    <li>
                        <box-icon
                            type="solid"
                            name="file-blank"
                            color="#FFCD00"
                        ></box-icon>
                        Document Shared
                    </li>
                    <li>
                        <box-icon name="download" color="#5D5D5D"></box-icon>
                        Downlaod All
                    </li>
                </ul>

                <div className="tab__content">
                    <ul>
                        <li className="tab__post">
                            <TabPost />
                        </li>
                        <li className="tab__post">
                            <TabPost />
                        </li>
                        <li className="tab__post">
                            <TabPost />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
