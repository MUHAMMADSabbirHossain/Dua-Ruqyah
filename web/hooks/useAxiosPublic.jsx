import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    // baseURL: `http://localhost:5000/`,
});

const useAxiosPublic = () => {
    return (instance);
};

export default useAxiosPublic;