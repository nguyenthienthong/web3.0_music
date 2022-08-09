import service from './axiosConfig';

const songService = {
    getAll: (params = {}) => {
        return service.get('https://api-music-dapp.herokuapp.com/api/songs', { params });
    },
    // update: (id, data) => {
    //     return service.put(`/users/${id}`, data);
    // },
};
export default songService;
