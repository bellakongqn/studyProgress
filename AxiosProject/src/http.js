import axios from 'axios'

// 环境的切换
if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = '/api';
}
else if (process.env.NODE_ENV === 'debug') {
    axios.defaults.baseURL = 'https://www.ceshi.com';
}
else if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = 'https://www.production.com';
}
// 超时取消请求
axios.defaults.timeout = 10000;
// post 请求头
axios.defaults.headers.post['Content-Type'] = 'application/json';

// 请求拦截
axios.interceptors.request.use(config => {
    // 一般在这个位置判断token是否存在 config.headers.Authorization = token
    // getToken()
    return config;
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 响应拦截
axios.interceptors.response.use(
    response => {
        // 处理响应数据
        if (response.status === 200) {
            return Promise.resolve(response.data);
        } else {
            return Promise.reject(response);
        }
    }, 
    error => {
        // 处理响应失败
        console.log(error)
        alert('请求出现错误')
        // return new Error;
        // throw new Error('lalal')
        // return Promise.reject()
    }
);

// get
export function get(url, params) {
    return axios.get(url, {
        params: params
    })
}


// post
export function post(url, params) { 
    return axios.post(url, params)
}
