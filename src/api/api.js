import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "9cd95faf-e3e2-4cf0-98bc-1c2dd95ef7e8",
    }
});
export const authAPI = {
    me() {
        return (
            instance.get(`auth/me`)
                .then(response => response.data)
        )
    }
}
export const usersAPI = {
    getUsers(pageNumber, pageSize) {
        return (
            instance.get(`users?page=${pageNumber}&count=${pageSize}`)
                .then(response => response.data)
        )
    },
    unfollowUser(id) {
        return (
            instance.delete(`follow/${id}`)
                .then(response => response.data)
        )
    },
    followUser(id) {
        return (
            instance.post(`follow/${id}`, {})
                .then(response => response.data)
        )
    },
    getProfile(userId) {
        console.warn("method is deprecated, use profileAPI")
        return profileAPI.getProfile(userId);
    },
}

export const profileAPI = {
    getProfile(userId) {
        return (
            instance.get(`profile/${userId}`)
                .then(response => response.data)
        )
    },
    getStatus(userId) {
        return (
            instance.get(`profile/status/${userId}`)
                .then(response => response.data)
        )
    },
    updateStatus(status) {
        instance.put(`profile/status`, {status: status})
    },
}
