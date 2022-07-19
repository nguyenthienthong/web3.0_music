import service from "./axiosConfig";

const userService = {
  getAll: (params = {}) => {
    return service.get("/users", { params });
  },
  update: (id, data) => {
    return service.put(`/users/${id}`, data);
  },
};
export default userService;
