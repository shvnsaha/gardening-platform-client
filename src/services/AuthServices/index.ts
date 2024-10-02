/* eslint-disable @typescript-eslint/no-explicit-any */

"use server"

import nexiosInstance from "@/config/nexios.config";
import { jwtDecode } from "jwt-decode";
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
  
  export const getCurrentUser = async () => {
    const accessToken = cookies().get("accessToken")?.value;
  
    let decodedToken = null;
  
    if (accessToken) {
      decodedToken = await jwtDecode(accessToken);
  
      return {
        _id: decodedToken._id,
        email: decodedToken.email,
        role: decodedToken.role,
        
      };
    }
  
    return decodedToken;
  };