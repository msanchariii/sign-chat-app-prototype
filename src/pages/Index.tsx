
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const authStatus = localStorage.getItem("isAuthenticated");
        const email = localStorage.getItem("userEmail");

        if (authStatus === "true" && email) {
            // If authenticated, redirect to chat list
            navigate("/chats");
        } else {
            // If not authenticated, redirect to login
            navigate("/login");
        }
    }, [navigate]);

    return null; // This page just redirects, so no UI needed
};

export default Index;
