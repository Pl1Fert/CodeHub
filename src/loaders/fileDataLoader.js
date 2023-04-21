import { FileService } from "../services";

export const fileDataLoader = async (id) => {
    const data = await FileService.getFileData(id);

    return data;
};
