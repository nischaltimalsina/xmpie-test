import React from 'react';

const ErrorComponent = ({ error }) => {
    return (
        <div className={` ${error ? 'pt-4' : ''} w-full  bg-white  `}>
            {error && (
                <div className=" border-red-600 border-[1px] p-4 mx-4 text-red-600  font-normal">
                    <p>Before you proceed:</p>
                    <ul className="ml-8 list-disc my-4">
                        <li>{error}</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ErrorComponent;
ErrorComponent.propTypes = false;
