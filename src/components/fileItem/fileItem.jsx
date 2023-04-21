import React from "react";
import { Link } from "react-router-dom";

import { APP_ROUTES } from "../../constants";

import styles from "./fileItem.module.scss";

export const FileItem = ({ file }) => {
    return (
        <div className={styles.fileItem}>
            <Link to={`/${APP_ROUTES.FILES}${file.id}`}>{file.file_name}</Link>
        </div>
    );
};
