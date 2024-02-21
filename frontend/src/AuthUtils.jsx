// AuthUtils.jsx
import {jwtDecode} from 'jwt-decode';

export const setAuthToken = (token) => {
  localStorage.setItem('token', token);
};

export const getAuthToken = () => {
  return localStorage.getItem('token');
};

export const decodeToken = () => {
  const token = getAuthToken();
  return token ? jwtDecode(token) : null;
};

export const userIsAdmin = () => {
  const decodedToken = decodeToken();
  return decodedToken?.roles?.includes('ADMIN');
};
export const userIsClient = () => {
  const decodedToken = decodeToken();
  return decodedToken?.roles?.includes('CLIENT');
};