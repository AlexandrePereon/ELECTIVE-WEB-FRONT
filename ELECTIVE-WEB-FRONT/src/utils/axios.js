import axios from "axios";

const axiosReq = axios.create({
    baseURL: "http://app.localhost",
    });

export default axiosReq;