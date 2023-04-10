import React from "react";

export const MyButton = ({ children, className, ...props }) => {
    return (
        <button className={className} {...props}>
            {children}
        </button>
    );
};
