import React from "react";

import { MyInput } from "../UI";

export const RepositoryFilter = ({ filter, setFilter, className }) => {
    return (
        <>
            <MyInput
                type="text"
                placeholder="Search"
                className={className}
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
        </>
    );
};
