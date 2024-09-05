import axios from "axios";


const api = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 5000,
    headers: {'Content-Type': 'application/json'}
});
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    console.log(token)
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
        config.headers['Access-Control-Allow-Origin'] = '*';
    }
    return config
})
api.interceptors.response.use((response) => { 
    console.log(response.headers)
    return response
})
export default api

