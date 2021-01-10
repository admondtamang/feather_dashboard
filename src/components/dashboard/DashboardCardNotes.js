import React from "react";
import "boxicons";
import Note from "./Note";
export default function DashboardCardNotes() {
    return (
        <div className="feather__card card">
            <header className="card__header">
                <p>Recent Notes</p>
                <box-icon name="plus-circle" type="solid"></box-icon>
            </header>
            <div className="notes">
                <Note
                    details="The function of logo..."
                    time="9:47 AM"
                    date="18/10/2020"
                    color="red"
                />
                <Note
                    details="Fragrances can often reflect our mood and personality..."
                    time="9:47 AM"
                    date="18/10/2020"
                    color="blue"
                />
                <Note
                    details="Fragrances can often reflect our mood and personality..."
                    time="9:47 AM"
                    date="18/10/2020"
                />
                <Note
                    details="Fragrances can often reflect our mood and personality..."
                    time="9:47 AM"
                    date="18/10/2020"
                    color="blue"
                />
                <Note
                    details="Fragrances can often reflect our mood and personality..."
                    time="9:47 AM"
                    date="18/10/2020"
                />
                <Note
                    details="Fragrances can often reflect our mood and personality..."
                    time="9:47 AM"
                    date="18/10/2020"
                />
                <Note
                    details="Fragrances can often reflect our mood and personality..."
                    time="9:47 AM"
                    date="18/10/2020"
                    color="blue"
                />
                <Note
                    details="Fragrances can often reflect our mood and personality..."
                    time="9:47 AM"
                    date="18/10/2020"
                />
            </div>
        </div>
    );
}
