// axiosConfig.js
import axios from "axios"

export const requestData = async (route, method, data, headers = {}) =>
    await axios
        .request({
            url: `http://127.0.0.1:8000/api/${route}`,
            method,
            data,
            headers: {
                "Content-Type": "application/json",
                ...headers,
            },
        })
        .then((res) => {
            return res.data
        })
export const getMessages = async (route, method, data = null, headers = {}) => {
    try {
        const response = await axios.request({
            url: `http://127.0.0.1:8000/api/${route}`,
            method,
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
        });
        return response.data; // Return the data from the function
    } catch (error) {
        console.error('Error in getMessages:', error);
        throw error;
    }
}