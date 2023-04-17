import React from "react";

export const RepositoryFilter = ({ filter, setFilter, className }) => {
    return (
        <>
            <input
                type="text"
                placeholder="Search"
                className={className}
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                maxLength={50}
            />
        </>
    );
};
