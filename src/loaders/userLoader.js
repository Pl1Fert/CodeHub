import { UserService } from "../services";

export const userLoader = async () => {
    const user = await UserService.getUser();

    return user;
};
