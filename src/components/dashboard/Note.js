import React from "react";

export default function Note({ details, time, date, color }) {
    return (
        <div className="note">
            <div
                className="rounded__avatar"
                style={{ background: color ? color : "yellow" }}
            ></div>
            <div className="note__details">
                <p>{details}</p>
                <span>{time}</span>
                <span>{date}</span>
            </div>
        </div>
    );
}
