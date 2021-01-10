import React, { useState } from "react";
import Note from "../Note";
import Tab2_Detail from "./Tab2_Detail";
import "./tabs.scss";
export default function Tab2() {
    const [show, setShow] = useState(false);
    function onToggle() {
        setShow(!show);
    }
    return (
        <div className="tab2">
            {!show && (
                <div className="notes">
                    <Note
                        details="Fragrances can often reflect our mood and personality"
                        time="9:47 AM"
                        date="18/10/2020"
                        color="blue"
                        title="The function of logo"
                        onClick={onToggle}
                        tab2
                    />
                    <Note
                        details="Fragrances can often reflect our mood and personality..."
                        time="9:47 AM"
                        date="18/10/2020"
                        color="blue"
                        title="how are u?"
                        tab2
                        onClick={onToggle}
                    />
                    <Note
                        details="Fragrances can often reflect our mood and personality..."
                        time="9:47 AM"
                        date="18/10/2020"
                        color="blue"
                        title="how are u?"
                        onClick={onToggle}
                        tab2
                    />
                </div>
            )}
            <Tab2_Detail
                onClick={onToggle}
                show={show}
                time="9:47 AM"
                date="18/10/2020"
                color="blue"
                title="The function of logo"
                details="Fragrances can often reflect our mood and personality"
            />
        </div>
    );
}
