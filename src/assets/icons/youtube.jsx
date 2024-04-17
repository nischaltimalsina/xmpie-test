import React from 'react';
import PropTypes from 'prop-types';

const Youtube = ({ color }) => {
    return (
        <svg
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8.36426 10.2545L13.6423 7.20362L8.36426 4.15271V10.2545ZM20.1204 2.29166C20.2526 2.76964 20.3442 3.41033 20.4052 4.2239C20.4764 5.03747 20.5069 5.73918 20.5069 6.34936L20.5679 7.20362C20.5679 9.43078 20.4052 11.0681 20.1204 12.1156C19.8662 13.0308 19.2763 13.6207 18.3611 13.8749C17.8831 14.0071 17.0085 14.0987 15.6661 14.1597C14.344 14.2309 13.1338 14.2614 12.0152 14.2614L10.3982 14.3224C6.1371 14.3224 3.48281 14.1597 2.43534 13.8749C1.52007 13.6207 0.930224 13.0308 0.675982 12.1156C0.543776 11.6376 0.452249 10.9969 0.391231 10.1833C0.320043 9.36976 0.289534 8.66805 0.289534 8.05787L0.228516 7.20362C0.228516 4.97646 0.391231 3.33914 0.675982 2.29166C0.930224 1.37639 1.52007 0.786547 2.43534 0.532305C2.91331 0.400099 3.7879 0.308572 5.1303 0.247554C6.45236 0.176366 7.66255 0.145857 8.78122 0.145857L10.3982 0.0848389C14.6593 0.0848389 17.3136 0.247554 18.3611 0.532305C19.2763 0.786547 19.8662 1.37639 20.1204 2.29166Z"
                fill={color}
            />
        </svg>
    );
};

export default Youtube;
Youtube.propTypes = {
    color: PropTypes.string
};