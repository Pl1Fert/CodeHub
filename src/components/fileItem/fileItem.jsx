import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { APP_ROUTES } from "../../constants";

import styles from "./fileItem.module.scss";

export const FileItem = ({ file }) => {
    const { darkMode } = useSelector((state) => state.mode);

    const linkStyles = [styles.fileLink];
    if (darkMode === true) {
        linkStyles.push(styles.fileLink_dark);
    }

    return (
        <div className={styles.fileItem}>
            <Link
                to={`${APP_ROUTES.HOME}${APP_ROUTES.FILES}${file.id}`}
                className={linkStyles.join(" ")}>
                {file.file_name}
            </Link>
        </div>
    );
};
