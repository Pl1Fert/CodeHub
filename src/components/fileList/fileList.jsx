import React from "react";

import { FileItem } from "../fileItem";

import styles from "./fileList.module.scss";

export const FileList = ({ files }) => {
    return (
        <ul className={styles.fileList}>
            {files.length !== 0 ? (
                files.map((file) => <FileItem file={file} key={file.id} />)
            ) : (
                <p style={{ textAlign: "center" }}>No Files</p>
            )}
        </ul>
    );
};
