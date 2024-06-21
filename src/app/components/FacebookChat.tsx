"use client";
import React, { useEffect } from "react";

const FacebookChatPlugin = () => {
  useEffect(() => {
    // Thêm SDK của Facebook vào DOM
    const script = document.createElement("script");
    script.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    // Thêm div fb-root vào DOM
    const fbRoot = document.createElement("div");
    fbRoot.id = "fb-root";
    document.body.appendChild(fbRoot);

    // Thêm div fb-customerchat vào DOM
    const fbCustomerChat = document.createElement("div");
    fbCustomerChat.className = "fb-customerchat";
    fbCustomerChat.setAttribute("attribution", "setup_tool");
    fbCustomerChat.setAttribute(
      "page_id",
      "https://www.facebook.com/havan.nguyenthi.14"
    ); // Thay thế YOUR_PAGE_ID bằng ID trang Facebook của bạn
    fbCustomerChat.setAttribute("theme_color", "#0084ff");
    fbCustomerChat.setAttribute(
      "logged_in_greeting",
      "Hi! How can we help you?"
    );
    fbCustomerChat.setAttribute(
      "logged_out_greeting",
      "Hi! How can we help you?"
    );
    document.body.appendChild(fbCustomerChat);

    return () => {
      // Cleanup script và div khi component bị hủy
      document.body.removeChild(script);
      document.body.removeChild(fbRoot);
      document.body.removeChild(fbCustomerChat);
    };
  }, []);

  return null; // Không render bất kỳ nội dung gì
};

export default FacebookChatPlugin;
