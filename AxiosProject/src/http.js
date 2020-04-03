import axios from 'axios'
import qs from 'querystring'

// 环境的切换
if (process.env.NODE_ENV === 'development') {    
    axios.defaults.baseURL = 'https://www.baidu.com';
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
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截
axios.interceptors.request.use( config => {
        // 一般在这个位置判断token是否存在 config.headers.Authorization = token
        return config;
    }, error => {
        // 对请求错误做些什么
        return Promise.reject(error);
});

// 响应拦截
axios.interceptors.response.use( response => {
        // 处理响应数据
        if (response.status === 200) {            
            return Promise.resolve(response);        
        } else {            
            return Promise.reject(response);        
        }
    }, error => {
    // 处理响应失败
    return Promise.reject(error);
});

// get
export function get(url, params){    
    return new Promise((resolve, reject) =>{        
        axios.get(url, {            
            params: params        
        }).then(res => {
            resolve(res.data);
        }).catch(err =>{
            console.log(err)
            reject(err.data)        
        })    
    });
}


// post
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(params))
        .then(res => {
            resolve(res.data);
        })
        .catch(err =>{
            reject(err.data)
        })
    });
}
