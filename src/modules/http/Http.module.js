/**
 * 请求工具
 */
import axios from 'axios';

class Http {
  constructor() {
    this.$http = axios.create({timeout: 10000000});
    this.init();
  }
  init() {
    this._defaultsConfig();
    this._interceptRequest();
    this._interceptResponse();
  }
  _defaultsConfig() {
    this.$http.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
    this.$http.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest';
    this.$http.defaults.responseType = 'json';
    this.$http.defaults.validateStatus = function() {
      return true;
    };
  }
  _interceptRequest() {
    this.$http.interceptors.request.use(
      request => request,
      error => Promise.reject(error)
    );
  }
  _interceptResponse() {
    this.$http.interceptors.response.use(
      response => {
        if (response.status === 200 && response.data && response.data.code === 0) {
          return Promise.resolve(response);
        }
        return Promise.reject(response);
      },
      error => {
        return Promise.reject(error);
      }
    );
  }
  get(url, params) {
    return this.$http.get(url, params);
  }
  post(url, params) {
    return this.$http.post(url, params);
  }
}

Http.of = function() {
  return new Http();
};

export default Http;
