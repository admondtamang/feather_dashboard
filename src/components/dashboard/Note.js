import React from "react";
import "./note.scss";
export default function Note({
    details,
    time,
    date,
    color,
    tab2,
    title,
    onClick,
}) {
    return (
        <div className="note" onClick={onClick}>
            <div
                className="rounded__avatar"
                style={{ background: color ? color : "yellow" }}
            ></div>
            <div className="note__details">
                {tab2 && <b>{title}</b>}
                <p>{details}</p>
                <span>{time}</span>
                <span>{date}</span>
            </div>
            {tab2 && <box-icon name="trash" color="red "></box-icon>}
        </div>
    );
}
