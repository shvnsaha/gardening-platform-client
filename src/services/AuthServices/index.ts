
"use server"

import nexiosInstance from "@/config/nexios.config";
import { cookies } from "next/headers";

export const loginUser = async (userData:any) => {
    try {
      const { data }:any = await nexiosInstance.post("/auth/login", userData);

      console.log(data);
  
      if (data?.success) {
        cookies().set("accessToken", data?.accessToken);
      }
  
      return data;
    } catch (error: any) {
      throw new Error(error);
    }
  };
  