// BackButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = ({ theme }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    };

    return (
        <button
            onClick={handleClick}
            className={`px-4 py-2 rounded ${
                theme === 'dark'
                    ? 'bg-gray-800 text-white'
                    : 'bg-gray-200 text-gray-800'
            }`}
        >
            Back
        </button>
    );
};

export default BackButton;
