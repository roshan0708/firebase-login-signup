import React from 'react';
import "./homepage.styles.css";
import CustomButton from "../Custom-button/custom-button.component";
import {auth} from "../../firebase/firebase.utils";

const Homepage = () => {
    return (
        <div>
            You're Logged In!!!
            <CustomButton onClick={() => auth.signOut()} type="button">Log Out</CustomButton>
        </div>
    )
}

export default Homepage;
