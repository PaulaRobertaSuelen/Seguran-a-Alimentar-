import api from '../config/api';

export default function useAuth() {
    const login = async (data) => {
        return await api.post('/login', data);
    };

    const register = async (data) => {
        return await api.post('/register', data);
    };

    const userByEmail = async (email) => {
        return await api.get(`/user/${email}`);
    };

    const updateUser = async (id, data) => {
        return await api.patch(`/user/${id}`, data);
    };

    return { login, register, userByEmail, updateUser };
}
