import api from '../config/api';
const headers = {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
};
export default function useProfile() {
    const getProfile = async (id) => {
        return await api.get(`/profile/${id}`, {
            headers: headers,
        });
    };

    const createProfile = async (data) => {
        return await api.post('/profile', data, {
            headers: headers,
        });
    };

    const updateProfile = async (id, data) => {
        return await api.patch(`/profile/${id}`, data, {
            headers: headers,
        });
    };

    const getUserAuthenticated = async () => {
        return await api.get('/user', {
            headers: headers,
        });
    };

    return { getProfile, getUserAuthenticated, createProfile, updateProfile };
}
