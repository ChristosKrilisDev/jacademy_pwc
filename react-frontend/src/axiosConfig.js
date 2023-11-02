import axios from "axios";

const getBaseUrl = () => {
  // custom base URL logic examples:
  // - to request a current URL without the search parameters part:
  let baseUrl = window.location.href.slice(0, -window.location.search.length);

  // ensure slash at the end
  if (baseUrl[baseUrl.length - 1] !== '/') baseUrl = baseUrl + '/';

  return baseUrl;
};

const axiosConfig = {
  baseURL: getBaseUrl(),
};

export const axiosInstance = axios.create(axiosConfig);