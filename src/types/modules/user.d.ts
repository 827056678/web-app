export interface UserInfo {
  id: number | string      // 用户ID（兼容字符串和数字）
  username: string         // 用户名
  avatar: string           // 头像URL
  roles: ('admin' | 'editor' | 'guest')[] // 角色数组
}