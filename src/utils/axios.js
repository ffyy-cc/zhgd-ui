import axios from 'axios'
var ui = require('element-ui')

// 测试环境
axios.defaults.baseURL = "http://localhost:8080"

// 添加请求拦截器
// axios.interceptors.request.use(function (config) {
//   // 在发送请求之前做些什么
//   console.log(config)
//   return config;
// }, function (error) {
//   // 对请求错误做些什么
//   console.log(error)
//   return Promise.reject(error);
// });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // console.log(response)
  if (response && response.data && response.data.code && response.data.code !== 0) {
    ui.Message({
      message: response.data.msg || '页面加载失败',
      type: 'warning'
    })
  } else {
    return response;
  }
  // return response;
}, function (error) {
  // 对响应错误做点什么
  // console.log(error)
  return Promise.reject(error);
});

// Vue.prototype.$axios = axios
export default axios


