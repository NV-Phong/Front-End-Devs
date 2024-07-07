'use client'
import React, { useState, useEffect } from 'react';

interface UserProfileProps {
  UserName: string | null; // Cho phép tên người dùng là null khi chưa đăng nhập
}

const UserProfile: React.FC<UserProfileProps> = ({ UserName }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Kiểm tra trạng thái đăng nhập (ví dụ: kiểm tra localStorage/sessionStorage)
    const storedUserName = localStorage.getItem('UserName');
    if (storedUserName) {
      setIsLoggedIn(true); 
    }
  }, []); // Chạy một lần khi component được gắn kết

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h2>Xin chào, {UserName}!</h2>
          {/* Các nội dung khác dành cho người dùng đã đăng nhập */}
        </>
      ) : (
        <p>Bạn chưa đăng nhập.</p>
      )}
    </div>
  );
};

export default UserProfile;
