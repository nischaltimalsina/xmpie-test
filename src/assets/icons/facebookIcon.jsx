import React from 'react';
import PropTypes from 'prop-types';

const Facebook = ({ color }) => {
    return (
        <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M22.3733 12.2036C22.3733 6.58995 17.8173 2.03394 12.2036 2.03394C6.58995 2.03394 2.03394 6.58995 2.03394 12.2036C2.03394 17.1257 5.53231 21.2241 10.1697 22.1699V15.2545H8.13575V12.2036H10.1697V9.6612C10.1697 7.69845 11.7663 6.10181 13.7291 6.10181H16.2715V9.15271H14.2376C13.6782 9.15271 13.2206 9.61035 13.2206 10.1697V12.2036H16.2715V15.2545H13.2206V22.3225C18.3563 21.814 22.3733 17.4817 22.3733 12.2036Z"
                fill={color}
            />
        </svg>
    );
};

export default Facebook;
Facebook.propTypes = {
    color: PropTypes.string
};
