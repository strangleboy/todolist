import axios from 'axios'
import router from './router'
import './main.js'

// 请求拦截
axios.interceptors.request.use(config => {
  if (localStorage.wxUserToken) {
    config.headers.Authorization = localStorage.wxUserToken
  }
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截
axios.interceptors.response.use(response => {
  return response
}, error => {
  // 错误提醒
  const { status } = error.response
  if (status === 401) {
    alert('token过期，请重新登录')
    // 清除token
    localStorage.removeItem('wxUserToken')
    // 页面跳转
    router.push('/login')
  } else alert(error.response.data)

  return Promise.reject(error)
})

export default axios
