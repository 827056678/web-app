import request from "@/utils/request";
import type { ApiResponse } from "@/types";
import type { UserInfo } from "@/types";
// 用户相关接口
export const login = (loginName: string, passWord: string) => {
  return request.get<ApiResponse<{ token: string; userInfo: UserInfo }>>(
    "/login",
    { loginName, passWord }
  );
};
