import React from "react";

export default function TabPost() {
    return (
        <>
            <box-icon name="checkbox-checked"></box-icon>
            <box-icon name="file-blank" size="lg"></box-icon>
            <div className="document_name">
                <b>Document Cover</b>
                <span>Opened 13 week ago</span>
            </div>
            <div className="tab__post_buttons">
                <a href="#" className="outline" style={{ color: "blue" }}>
                    <box-icon
                        name="cloud-download"
                        type="solid"
                        color="blue"
                    ></box-icon>
                    Upload
                </a>
                <a href="#" className="outline" style={{ color: "green" }}>
                    <box-icon
                        name="cloud-download"
                        type="solid"
                        color="green"
                    ></box-icon>
                    Upload
                </a>
            </div>
        </>
    );
}
