import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Tooltip } from 'react-tooltip';

const InfoComponent = ({ text }) => {
    return (
        <div className="ml-4 flex items-center">
            <FaInfoCircle
                data-tooltip-id="my-tooltip"
                data-tooltip-content={text}
                className="inline-block"
            />
            <Tooltip
                place="top"
                effect="solid"
                id="my-tooltip"
                style={{ fontSize: '12px', fontWeight: '400' }}
            />
        </div>
    );
};

export default InfoComponent;
InfoComponent.propTypes = {
    text: PropTypes.string.isRequired
};
