import service from "./axiosConfig";

const songService = {
  getAll: (params = {}) => {
    return service.get("/users", { params });
  },
  update: (id, data) => {
    return service.put(`/users/${id}`, data);
  },
};
export default songService;
