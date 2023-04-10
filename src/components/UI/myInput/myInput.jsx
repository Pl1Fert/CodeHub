import React from "react";

export const MyInput = ({ className, ...props }) => {
    return <input className={className} {...props} />;
};
