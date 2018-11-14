import axios from 'axios'
import qs from 'qs'
var menu = require('./menu.js')
var menu2 = require('./menu2.js')

// 模拟直接向服务器获取数据
// var mockServer = '/webcorp/'
var mockServer = ''
// mockServer = 'http://22.96.12.16:9080/webcorp'
// 钟
// mockServer = 'http://22.96.12.123:8080/webcorp'
axios.defaults.baseURL = mockServer;

// 实例化请求
var indexAxios = axios.create()
window.indexAxios = indexAxios

// 选择使用哪个 host
indexAxios.interceptors.request.use((config) => {
  // if (typeof(config.data) == Array ) {
  //
  // }
  // 解决中文乱码问题
  config.headers['Content-type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
  // 解决 session 问题
  config.headers['X-HTTP-Code-System'] = 'Default massage for Server'
  config.headers['X-Requested-With'] = 'XMLHttpRequest'

  return config
}, (err) => {
  return Promise.reject(err)
})

indexAxios.interceptors.response.use((response) => {
  return response
}, (error) => {
  if (error && error.response) {
    switch (error.response.status) {
      case 403:
        error.message = '请求有些问题'
        // 重新登陆
        window.clientManager.browserSessionExpired()
        alert('请重新登录')
        break;
      default:
        alert('服务器出错')
        error.message = '连接出错'
    }
  }
})

export const apiFunObj = () =>{
  var obj = {}
  Object.assign(obj, menu.apiFun(indexAxios, qs), menu2.apiFun(indexAxios, qs))
  return obj
}
