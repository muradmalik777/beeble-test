import axios from "axios";

const base_url = 'http://localhost:8081';

export const getList = (endpoint, params,) => {
    let url = `${base_url}${endpoint}`;
    let config = {};
    config.params = params;
    let axiosGetList = axios.get(url, config).then(resp => {
        return resp.data;
    });

    return axiosGetList;
}

export const post = (endpoint, data) => {
    let url = `${base_url}${endpoint}`;
    return axios.post(url, data).then(resp => resp);
}

export const deleteItem = (endpoint, id) => {
    let url = `${base_url}${endpoint}`;
    if (id) {
        url = `${url}/${id}`;
    }
    return axios.delete(url);
}
