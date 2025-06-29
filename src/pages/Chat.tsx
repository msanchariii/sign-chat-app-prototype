
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ChatContainer from "@/components/ChatContainer";
import AccessibilitySettings from "@/components/AccessibilitySettings";
import { Button } from "@/components/ui/button";
import { AccessibilityConfig, Message } from "@/types/chat";
import { LogOut, ArrowLeft } from "lucide-react";
import { Conversation } from "@/types/conversation";
import { mockConversations } from "@/lib/data";

const Chat = () => {
    const navigate = useNavigate();
    const { chatId } = useParams<{ chatId: string }>();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);

    useEffect(() => {
        const authStatus = localStorage.getItem("isAuthenticated");
        const email = localStorage.getItem("userEmail");

        if (authStatus === "true" && email) {
            setIsAuthenticated(true);
            setUserEmail(email);
            
            if (chatId) {
                // Find the conversation in our mock data
                const conversation = mockConversations.find(c => c.id === chatId);
                if (conversation) {
                    setSelectedConversation(conversation);
                    // Generate messages from the conversation
                    setMessages([conversation.lastMessage]);
                } else {
                    // If conversation not found, redirect to chat list
                    navigate("/chats");
                }
            } else {
                // If no chatId is provided, redirect to chat list
                navigate("/chats");
            }
        } else {
            navigate("/login");
        }
    }, [navigate, chatId]);

    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userName");
        navigate("/login");
    };

    const handleBackToChats = () => {
        navigate("/chats");
    };

    const [messages, setMessages] = useState<Message[]>([]);

    const [accessibilityConfig, setAccessibilityConfig] =
        useState<AccessibilityConfig>({
            highContrast: false,
            dyslexiaFont: false,
            preferredInput: "text",
            preferredOutput: "text",
            largeText: false,
            voiceEnabled: false,
        });

    const handleSendMessage = (text: string) => {
        const newMessage: Message = {
            id: Date.now().toString(),
            text,
            sender: "user",
            timestamp: new Date(),
            hasSignLanguage: true,
        };
        setMessages((prev) => [...prev, newMessage]);

        // Simulate assistant response
        setTimeout(() => {
            const response: Message = {
                id: (Date.now() + 1).toString(),
                text: "I understand! Let me help you with that.",
                sender: "assistant",
                timestamp: new Date(),
                hasSignLanguage: true,
            };
            setMessages((prev) => [...prev, response]);
        }, 1000);
    };

    if (!isAuthenticated || !selectedConversation) {
        return null; // This will briefly show while redirecting
    }

    // Get the other participant's name for display
    const otherParticipant = selectedConversation.isGroup 
      ? null 
      : selectedConversation.participants.find(p => p.email !== userEmail);
    
    const displayName = selectedConversation.isGroup 
      ? selectedConversation.groupName 
      : otherParticipant?.name;

    return (
        <div
            className={`h-screen flex flex-col ${
                accessibilityConfig.highContrast
                    ? "bg-black"
                    : "bg-gradient-to-br from-sky-50 to-purple-50"
            }`}
        >
            {/* Header with user info and logout */}
            <div
                className={`flex justify-between items-center p-4 border-b ${
                    accessibilityConfig.highContrast
                        ? "border-gray-600 bg-gray-900"
                        : "border-gray-200 bg-white/50 backdrop-blur-sm"
                }`}
            >
                <div className="flex items-center">
                    <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={handleBackToChats} 
                        className="mr-2"
                        aria-label="Back to chats"
                    >
                        <ArrowLeft className="w-4 h-4" />
                    </Button>
                    <span
                        className={`font-medium ${
                            accessibilityConfig.highContrast
                                ? "text-white"
                                : "text-gray-700"
                        }`}
                    >
                        {displayName}
                        {selectedConversation.isGroup && " (Group)"}
                    </span>
                </div>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleLogout}
                    className={`${
                        accessibilityConfig.highContrast
                            ? "text-white hover:bg-gray-800"
                            : ""
                    }`}
                    aria-label="Log out"
                >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                </Button>
            </div>

            {/* Main Chat Container */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <ChatContainer
                    messages={messages}
                    onMessageClick={() => {}} // No longer needed since sign language is integrated
                    onSendMessage={handleSendMessage}
                    config={accessibilityConfig}
                />
            </div>

            {/* Accessibility Settings */}
            <AccessibilitySettings
                config={accessibilityConfig}
                onConfigChange={setAccessibilityConfig}
            />
        </div>
    );
};

export default Chat;
