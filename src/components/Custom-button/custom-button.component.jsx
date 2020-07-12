import React from 'react';
import "./custom-button.styles.css";

const CustomButton = ({ children, inverted, loading, onClick, isGoogleSignIn}) => {

    return (
        <button
            className={`${inverted ? 'inverted' : 'normal'} 
            ${isGoogleSignIn ? 'google-sign-in' : 'normal'} 
            custom-button `}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default CustomButton;