import axios from "axios";
import React, { use, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import Swal from "sweetalert2";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxios = () => {
  const { user, signOutUser, loading } = use(AuthContext);

  useEffect(() => {
    if (!loading && user?.accessToken) {
      const requestInterceptor = axiosInstance.interceptors.request.use(
        (config) => {
          config.headers.authorization = `Bearer ${user.accessToken}`;
          return config;
        }
      );

      const responseInterceptor = axiosInstance.interceptors.response.use(
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
                console.log(error);
              });
          }
          return Promise.reject(error);
        }
      );

      return () => {
        axiosInstance.interceptors.request.eject(requestInterceptor);
        axiosInstance.interceptors.response.eject(responseInterceptor);
      };
    }
  }, [user, loading]);
  // request interceptor

  return axiosInstance;
};

export default useAxios;
