import React from "react";
import "./message.scss";
export default function Message({ time, date, name, message, sent }) {
    return (
        <div
            className="message"
            style={{ flexDirection: sent && "row-reverse" }}
        >
            <img src="avatar.png" alt="as" />
            <div
                className="message__content"
                style={{ alignItems: sent && "flex-end" }}
            >
                <b>{name}</b>
                <p className={`${sent && "sent__message"}`}>{message}</p>
                <div className="dateandtime">
                    <span>{time}</span>
                    <span>{date}</span>
                </div>
            </div>
        </div>
    );
}
