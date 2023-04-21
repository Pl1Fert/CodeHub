const API_URL = "http://localhost:8000";

export const API_URLS = {
    REGISTER: API_URL + "/users/",
    LOGIN: API_URL + "/tokens/",
    USER: API_URL + "/users/me/",
    REPOSITORIES: API_URL + "/repositories/",
    PINNED_REPOSITORIES: API_URL + "/repositories/pin/",
    COMMITS: API_URL + "/commits/",
    DATA: API_URL + "/data/",
};
