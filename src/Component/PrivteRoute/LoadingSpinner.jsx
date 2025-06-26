import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='h-screen flex items-center justify-center'>

            <div class="loader">
                <span className="item"></span>
                <span className="item"></span>
                <span className="item"></span>
                <span className="item"></span>
            </div>

        </div>
    );
};

export default LoadingSpinner;