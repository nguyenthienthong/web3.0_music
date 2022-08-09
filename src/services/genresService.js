import service from "./axiosConfig";

const genreService = {
  getAll: (params = {}) => {
    return service.get("/genres?_page=1&_size=16&_sort=createdAt&_order=desc", {
      params,
    });
  },
  update: (id, data) => {
    return service.put(`/genres/${id}`, data);
  },
  create: (data) => {
    return service.post(`/genres`, data);
  },
  delete: (id) => {
    return service.delete(`/genres/${id}`);
  },
};
export default genreService;
