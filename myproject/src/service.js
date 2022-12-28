import axios from 'axios'

const service = axios.create({

  // baseURL: 'http://rap2api.taobao.org/app/mock/308461/',
  // baseURL: 'https://demo.crudapi.cn/api/business/',
  baseURL: '/api',
  timeout: 5000, // request timeout 请求超时中断
  headers: {
    'Content-type': 'application/json;cahrset=utf-8',
  },
  auth: {
    username: 'superadmin',
    password: '1234567890'
  },
})
// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // 在发送请求前做些什么
  return config;
}, function (error) {
  return Promise.reject(error);
})

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 对响应数据做些什么
  return response;
}, function (error) {
  return Promise.reject(error);
})

export default service;