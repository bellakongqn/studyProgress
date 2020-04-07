import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

// 环境的切换
if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = '/api';
}
// 超时取消请求
axios.defaults.timeout = 10000;
// post 请求头
axios.defaults.headers.post['Content-Type'] = 'application/json';

// 请求拦截
axios.interceptors.request.use( (config: AxiosRequestConfig) => {
    let token = window.localStorage.getItem('token');
    if( token ){
        config.headers.Authorization = token
    }
    return config;
}, (error: any) => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 响应拦截
axios.interceptors.response.use(
    (response: AxiosResponse<any>) => {
        // 处理响应数据
        if (response.status === 200) {
            return Promise.resolve(response.data);
        } else {
            return Promise.reject(response);
        }
    }, 
    (error:any) => {
        if (error && error.status === 401) {
            window.location.href = '/login'
        }
        // 处理响应失败
        return Promise.reject(error)
    }
);

// get
export function get<T = {}>(url:string, params:any):Promise <T>{
    return axios.get(url, {
        params: params
    }) 
}

// post
export function post<T = {}>(url:string, params:any):Promise <T> { 
    return axios.post(url, params)
}

// put
export function put<T = {}>(url:string, params:any):Promise <T>{
    return axios.put(url, params )
}

// delete
export function deleteFc<T = {}>(url:string, params:any):Promise <T>{
    return axios.delete(url, params)
}

/*
export const gettt = <T = {}>(url:string, config?: AxiosRequestConfig) => axios.get<AxiosResponse <T>>(url, config)
*/