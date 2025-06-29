
import React from "react";
import { Message, AccessibilityConfig } from "@/types/chat";
import MessageBubble from "@/components/MessageBubble";
import MessageInput from "@/components/MessageInput";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ChatContainerProps {
    messages: Message[];
    onMessageClick: (message: Message) => void;
    onSendMessage: (text: string) => void;
    config: AccessibilityConfig;
}

const ChatContainer: React.FC<ChatContainerProps> = ({
    messages,
    onMessageClick,
    onSendMessage,
    config,
}) => {
    return (
        <div className="flex flex-col h-full max-w-4xl mx-auto w-full">
            {/* Messages Area */}
            <ScrollArea className="flex-1 px-1">
                <div className="space-y-4">
                    {messages.map((message) => (
                        <MessageBubble
                            key={message.id}
                            message={message}
                            onClick={() => onMessageClick(message)}
                            config={config}
                        />
                    ))}
                </div>
            </ScrollArea>
            {/* Message Input */}
            <MessageInput onSendMessage={onSendMessage} config={config} />
        </div>
    );
};

export default ChatContainer;
