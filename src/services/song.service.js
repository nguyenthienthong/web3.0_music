import service from "./axiosConfig";

const songService = {
  getAll: (params = {}) => {
    return service.get("/songs", { params });
  },
  update: (id, data) => {
    return service.put(`/songs/${id}`, data);
  },
  search: (param) => {
    return service.get(`/songs/search?q=${param}`);
  },
  detail: (id) => {
    return service.get(`/songs/${id}`);
  },
};
export default songService;
