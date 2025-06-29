
import React from "react";
import { Message, AccessibilityConfig } from "@/types/chat";
import { Card } from "@/components/ui/card";
import { Hand } from "lucide-react";

interface MessageBubbleProps {
    message: Message;
    onClick: () => void;
    config: AccessibilityConfig;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({
    message,
    onClick,
    config,
}) => {
    const isUser = message.sender === "user";

    // Show sign language content if preferred output is sign
    const showSignLanguage = config.preferredOutput === "sign";

    return (
        <div
            className={`flex ${
                isUser ? "justify-end" : "justify-start"
            } mb-4 p-2 mx-4`}
        >
            <div
                className={`max-w-xs md:max-w-md ${isUser ? "ml-12" : "mr-12"}`}
            >
                <Card
                    className={`p-4 font-semibold cursor-pointer transition-all duration-200 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2  ${
                        config.highContrast
                            ? isUser
                                ? "bg-white text-black border-white focus:ring-sky-500"
                                : "bg-gray-800 text-white border-gray-600 focus:ring-sky-500"
                            : isUser
                            ? "bg-gradient-to-r from-sky-600 to-purple-600 text-white border-none shadow-lg focus:ring-orange-500"
                            : "bg-white border-sky-200 shadow-md focus:ring-sky-500"
                    }`}
                    onClick={onClick}
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            onClick();
                        }
                    }}
                    role="button"
                    aria-label={`Message: ${message.text}. Click to view sign language translation.`}
                >
                    <div className="space-y-3">
                        {/* Sign Language Icons Section - only show if preferred output is sign */}
                        {showSignLanguage && message.hasSignLanguage && (
                            <div className={`p-3 rounded-lg ${
                                config.highContrast
                                    ? "bg-gray-700"
                                    : isUser 
                                    ? "bg-white/20" 
                                    : "bg-gray-50"
                            }`}>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {/* Generate hand sign icons for each word */}
                                    {message.text.split(' ').slice(0, 8).map((word, index) => (
                                        <div key={index} className="flex flex-col items-center">
                                            <div className={`w-8 h-8 rounded flex items-center justify-center ${
                                                config.highContrast
                                                    ? "bg-gray-600"
                                                    : isUser 
                                                    ? "bg-white/30" 
                                                    : "bg-gray-200"
                                            }`}>
                                                <Hand className={`w-4 h-4 ${
                                                    config.highContrast
                                                        ? "text-white"
                                                        : isUser 
                                                        ? "text-white" 
                                                        : "text-gray-600"
                                                }`} />
                                            </div>
                                            <span className={`text-xs mt-1 ${
                                                config.highContrast
                                                    ? "text-gray-300"
                                                    : isUser 
                                                    ? "text-white/80" 
                                                    : "text-gray-500"
                                            }`}>
                                                {word.slice(0, 3)}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Text Content */}
                        <div className="flex items-start space-x-2">
                            <div className="flex-1">
                                <p
                                    className={`${
                                        config.dyslexiaFont ? "font-mono" : ""
                                    } ${
                                        config.largeText
                                            ? "text-lg"
                                            : "text-sm md:text-base"
                                    } leading-relaxed`}
                                >
                                    {message.text}
                                </p>
                                <p
                                    className={`text-xs mt-2 opacity-70 ${
                                        config.largeText ? "text-sm" : ""
                                    }`}
                                >
                                    {message.timestamp.toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </p>
                            </div>

                            {message.hasSignLanguage && (
                                <Hand className="w-4 h-4 opacity-50 flex-shrink-0 mt-1" />
                            )}
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default MessageBubble;
