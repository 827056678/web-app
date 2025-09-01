// 扩展 AxiosRequestConfig
declare module 'axios' {
  interface AxiosRequestConfig {
    // 自定义配置项
    silent?: boolean // 是否静默处理错误
    retry?: number   // 重试次数
  }
}

// API 响应数据基础结构
export interface ApiResponse<T = any> {
  code: number
  data: T
  message: string
}