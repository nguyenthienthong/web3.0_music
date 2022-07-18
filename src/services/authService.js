import service from "./axiosConfig";

const authService = {
  loginGoogle: (data) => {
    return service.post("/auth/login-google", data);
  },
  getProfile: () => {
    return service.get("/auth/profile");
  },
};

export default authService;
