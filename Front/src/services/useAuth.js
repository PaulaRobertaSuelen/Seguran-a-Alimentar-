import api from './authService';

export default function useAuth() {
    const login = async (data) => {
        return await api.post('/login', data);
    };

    const register = async (data) => {
        return await api.post('/user/create', data);
    };

    const userByEmail = async (email) => {
        return await api.get(`/user/${email}`);
    };

    const updateUser = async (id, data) => {
        return await api.patch(`/user/${id}`, data);
    };
    const regist = async (data) => {
        return await api.post('/regist', data);
    };

    const authStatus = async () => {
        return await api.get('/auth-status'); // Verifica o status de autenticação
    };

    return { login, register, userByEmail, updateUser, authStatus };
}
