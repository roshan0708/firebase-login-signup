import React from 'react';
import "./custom-button.styles.css";

const CustomButton = ({ children, inverted, loading, onClick }) => {

    return (
        <button
            className={`${inverted ? "inverted" : "normal"} custom-button`}
            disabled={loading} onClick={onClick}
        >
            {children}
        </button>
    );
}

export default CustomButton;