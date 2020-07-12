import React from 'react';
import "./cover.styles.css";
import FormComponent from "../Login and Signup/login-signup-form.component";
import BgImg from "../../assets/img/bg-2.jpg";
import Homepage from "../Homepage/homepage.component";

const Cover = ({currentUser}) => {
    return (
        <div className="cover">
        {
            !currentUser ? (
                <div style={{margin:"0",padding:"0",display:"flex"}}>
                    <img src={BgImg} alt="cover" className="cover-image"/>
                    <div className="cover-form">
                        <FormComponent />
                    </div>
                </div>
            ):(
                <Homepage />
            )
        }
        </div>
    )
}

export default Cover;
