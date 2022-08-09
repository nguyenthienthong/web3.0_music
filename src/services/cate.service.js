import service from './axiosConfig';

const cateService = {
    getAll: (params = {}) => {
        return service.get(
            'https://api-music-dapp.herokuapp.com/api/cates?_page=1&_size=10&_sort=name&_order=desc&adadas=a12313',
            { params },
        );
    },
    // update: (id, data) => {
    //     return service.put(`/users/${id}`, data);
    // },
};
export default cateService;
