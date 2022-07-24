import service from "./axiosConfig";

const authService = {
  loginGoogle: (data) => {
    return service.post("/auth/login-google", data);
  },
  getProfile: () => {
    return service.get("/auth/profile");
  },
  loginUser: (data) => {
    return service.post("/auth/login", data);
  },
  register: (data) => {
    return service.post("/auth/register", data);
  },
};

export default authService;
