import axios from "axios";
import { mainConfigs } from "../Configs/main_configs";

export const ApiServices = {
    loginUser : (count=1) => {
        const url = `${mainConfigs.baseUrl}/users/${count}`;
        return axios
            .get(url)
            .then(response => response.data);
    },
    getAllUsers: (count) => {
        const url = `${mainConfigs.baseUrl}/users?page=${count}`;
        return axios
            .get(url)
            .then(response => response.data);
    }
};