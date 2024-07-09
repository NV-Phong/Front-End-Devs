"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import "@/styles/style.css";

const SERVER_PORT = process.env.NEXT_PUBLIC_PORT;
function MyComponent() {
   const [data, setData] = useState<any>(null);
   const [error, setError] = useState<string | null>(null);

   const router = useRouter(); 

    const handleLogout = async () => {
        try {
            await axios.post(`${SERVER_PORT}Auth/Logout`, { withCredentials: true });
            Cookies.remove("token");
            router.push("/Auth"); // Redirect to login page
        } catch (error) {
            console.error("Logout Error:", error);
            // Consider adding a toast notification for error feedback
        }
    };
    
   useEffect(() => {
      const fetchData = async () => {
         try {
            const token = Cookies.get("token");
            console.log("Token:", token);

            const response = await axios.get(`${SERVER_PORT}Roles`, {
               headers: {
                  Authorization: `Bearer ${token}`,
               },
            });

            setData(response.data);
         } catch (error: any) {
            if (error.response) {
               // Xử lý lỗi cụ thể từ server (ví dụ: 401 Unauthorized)
               setError(
                  error.response.data.message || error.response.statusText
               );
            } else if (error.request) {
               // Yêu cầu đã được gửi nhưng không nhận được phản hồi
               setError("No response from server");
            } else {
               // Xử lý các lỗi khác
               setError(error.message);
            }
         }
      };

      fetchData();
   }, []);

   if (error) return <div>Lỗi: {error}</div>;
   if (!data) return <div>Đang tải...</div>;

   return (
      <div>
         {/* Hiển thị dữ liệu */}
         <pre>{JSON.stringify(data, null, 2)}</pre>
         <Button className="glow1" onClick={handleLogout}>Logout</Button>
      </div>
   );
}

export default MyComponent;
