import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "@/styles/style.css";
import Login from "@/components/Auth/Login";
import Register from "@/components/Auth/Register";

const Auth: React.FC = () => {
   return (
      <div>
         <Tabs defaultValue="login" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
               <TabsTrigger value="login">Login</TabsTrigger>
               <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <Login />
            <Register />
         </Tabs>
      </div>
   );
};

export default Auth;
