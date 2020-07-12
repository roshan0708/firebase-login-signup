import React from 'react';
import "./cover.styles.css";
import LoginComponent from "../Login/login-form.component";
import BgImg from "../../assets/img/bg-2.jpg";

const Cover = () => {
    return (
        <div className="cover">
            <img src={BgImg} alt="cover" className="cover-image"/>
            <div className="cover-form">
                    <LoginComponent />
            </div>
        </div>
    )
}

export default Cover;
