import React from "react";

export default function DashboardCardUser() {
    return (
        <div className="feather__card card">
            <div className="feather__card_menu">
                <box-icon
                    name="dots-vertical-rounded"
                    color="#5D5D5D"
                ></box-icon>
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
                <img src="user.png" alt="avt" />
                <div className="profile__right">
                    <h1>John Maharjan</h1>
                    <span>
                        johnmarg@gmail.com <br /> 98454545454
                    </span>
                </div>
            </div>
        </div>
    );
}
