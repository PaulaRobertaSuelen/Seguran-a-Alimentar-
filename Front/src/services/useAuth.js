import api from '../config/api';

export default function useAuth() {
    const login = async (data) => {
        return await api.post('/login', data);
    };

    const register = async (data) => {
        return await api.post('/register', data);
    };

    return { login, register };
}
