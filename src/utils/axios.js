import axios from 'axios'

// 测试环境
axios.defaults.baseURL = "http://192.168.1.25:8080"

// 生产环境
// axios.defaults.baseURL = "http://47.106.71.3:8080"

// Vue.prototype.$axios = axios
export default axios

// var OLDURL = axios.create({
//   baseURL: 'http://39.108.103.150:8989'
// })

// export default OLDURL
