import service from './axiosConfig';

const genreService = {
    getAll: (params = {}) => {
        return service.get('https://api-music-dapp.herokuapp.com/apiapi/genres?_page=1&_size=9', { params });
    },
    // update: (id, data) => {
    //     return service.put(`/users/${id}`, data);
    // },
};
export default genreService;
