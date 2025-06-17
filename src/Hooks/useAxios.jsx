import axios from "axios";
import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import Swal from "sweetalert2";

const axiosInstance = axios.create({
  baseURL: "https://primelodge-bookify.vercel.app",
});

const useAxios = () => {
  const { user, signOutUser } = use(AuthContext);

  // request interceptor
  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });

  // response interceptor
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.status === 401 || error.status === 403) {
        signOutUser()
          .then(() => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title:
                "You have been signed out due to unauthorized access (401/403).",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => {
            // console.log(error);
          });
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;

  /* const { user, signOutUser, loading } = use(AuthContext);

  useEffect(() => {
    if (!loading && user?.accessToken) {
      // Add request interceptor
      const requestInterceptor = axiosInstance.interceptors.request.use(
        (config) => {
          config.headers.Authorization = `Bearer ${user.accessToken}`;
          return config;
        }
      );

      // Add response interceptor
      const responseInterceptor = axiosInstance.interceptors.response.use(
        (res) => res,
        (err) => {
          if (err?.response?.status === 401 || err?.response?.status === 403) {
            signOutUser()
              .then(() => {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title:
                    "You have been signed out due to unauthorized access (401/403).",
                  showConfirmButton: false,
                  timer: 1500,
                });
              })
              .catch(console.error);
          }
          return Promise.reject(err);
        }
      );

      // Cleanup to prevent multiple interceptors on re-renders
      return () => {
        axiosInstance.interceptors.request.eject(requestInterceptor);
        axiosInstance.interceptors.response.eject(responseInterceptor);
      };
    }
  }, [user, loading]);

  return axiosInstance; */
};

export default useAxios;
