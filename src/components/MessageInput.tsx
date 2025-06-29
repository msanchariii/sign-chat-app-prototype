import React, { useState } from "react";
import { AccessibilityConfig } from "@/types/chat";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, Hand, Mic } from "lucide-react";
import HandSignKeyboard from "@/components/HandSignKeyboard";

interface MessageInputProps {
    onSendMessage: (text: string) => void;
    config: AccessibilityConfig;
}

const MessageInput: React.FC<MessageInputProps> = ({
    onSendMessage,
    config,
}) => {
    const [inputText, setInputText] = useState("");
    const [showHandSignKeyboard, setShowHandSignKeyboard] = useState(false);
    const [isRecording, setIsRecording] = useState(false);

    const handleSend = () => {
        if (inputText.trim()) {
            onSendMessage(inputText.trim());
            setInputText("");
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const handleSignInput = (text: string) => {
        setInputText((prev) => prev + text);
    };

    const handleVoiceToggle = () => {
        setIsRecording(!isRecording);
        // Simulate voice recording
        console.log("Voice recording:", !isRecording);
    };

    return (
        <div className=" h-32  ">
            <Card
                className={`m-4 p-4 ${
                    config.highContrast
                        ? "bg-gray-800 border-white"
                        : "bg-white border-sky-200"
                } shadow-lg`}
            >
                <div className="space-y-3">
                    {/* Text Input */}
                    <div className="flex items-end space-x-2">
                        <div className="flex-1">
                            <Input
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Type your message..."
                                className={`min-h-[48px] text-base resize-none border-2   ${
                                    config.highContrast
                                        ? "bg-gray-700 border-white text-white placeholder-gray-400"
                                        : "border-sky-300 focus:border-sky-500"
                                } ${config.dyslexiaFont ? "font-mono" : ""} ${
                                    config.largeText ? "text-lg" : ""
                                }`}
                                aria-label="Message input"
                            />
                        </div>
                        <div className="flex justify-center space-x-2">
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={() => setShowHandSignKeyboard(true)}
                                className={`min-h-[48px] w-full border-2 ${
                                    config.highContrast
                                        ? "border-white text-white hover:bg-gray-700"
                                        : "border-sky-300 text-sky-700 hover:bg-sky-50"
                                }`}
                                aria-label="Open hand sign keyboard"
                            >
                                <Hand className="w-5 h-5 mr-2" />
                                Sign Keyboard
                            </Button>

                            {config.voiceEnabled && (
                                <Button
                                    variant="outline"
                                    size="lg"
                                    onClick={handleVoiceToggle}
                                    className={`min-h-[48px] ${
                                        isRecording
                                            ? "bg-red-500 text-white border-red-500 hover:bg-red-600"
                                            : config.highContrast
                                            ? "border-white text-white hover:bg-gray-700"
                                            : "border-sky-300 text-sky-700 hover:bg-sky-50"
                                    }`}
                                    aria-label={
                                        isRecording
                                            ? "Stop recording"
                                            : "Start voice recording"
                                    }
                                >
                                    <Mic
                                        className={`w-5 h-5 mr-2 ${
                                            isRecording ? "animate-pulse" : ""
                                        }`}
                                    />
                                    {isRecording ? "Recording..." : "Voice"}
                                </Button>
                            )}
                        </div>
                        <Button
                            onClick={handleSend}
                            disabled={!inputText.trim()}
                            size="lg"
                            className={`min-h-[48px] px-4 ${
                                config.highContrast
                                    ? "bg-white text-black hover:bg-gray-200"
                                    : "bg-gradient-to-r from-sky-500 to-purple-500 hover:from-sky-600 hover:to-purple-600"
                            }`}
                            aria-label="Send message"
                        >
                            <Send className="w-5 h-5" />
                        </Button>
                    </div>

                    {/* Input Options */}
                </div>
            </Card>

            <HandSignKeyboard
                isOpen={showHandSignKeyboard}
                onClose={() => setShowHandSignKeyboard(false)}
                onSignSelect={handleSignInput}
                config={config}
                inputText={inputText}
                onInputTextChange={setInputText}
            />
        </div>
    );
};

export default MessageInput;
