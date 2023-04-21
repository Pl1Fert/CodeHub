import React from "react";
import { useLoaderData } from "react-router-dom";

import styles from "./filePage.module.scss";

export const FilePage = () => {
    const { data } = useLoaderData();
    console.log(data);

    return (
        <div>
            <p>{data.data}</p>
        </div>
    );
};
