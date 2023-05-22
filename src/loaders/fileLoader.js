import { FileService } from "../services";

export const fileLoader = async (id) => {
    const file = await FileService.getFile(id);

    return file;
};
