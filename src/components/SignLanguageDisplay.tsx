import React from "react";
import { Message, AccessibilityConfig } from "@/types/chat";
import { Card } from "@/components/ui/card";
import { Volume2, Hand } from "lucide-react";

interface SignLanguageDisplayProps {
    message: Message | null;
    config: AccessibilityConfig;
}

const SignLanguageDisplay: React.FC<SignLanguageDisplayProps> = ({
    message,
    config,
}) => {
    const handlePlayAudio = () => {
        if (message && config.voiceEnabled) {
            // Simulate text-to-speech
            console.log("Playing audio for:", message.text);
        }
    };

    return (
        <div
            className={`sticky top-0 z-50 p-4 border-b max-w-4xl w-full mx-auto ${
                config.highContrast
                    ? "bg-gray-900 border-white"
                    : "bg-white/80 backdrop-blur-sm border-sky-200"
            } shadow-sm`}
        >
            <Card
                className={`px-4 py-2 ${
                    config.highContrast
                        ? "bg-gray-800 border-white"
                        : "bg-gradient-to-r from-sky-100 to-purple-100 border-none"
                }`}
            >
                {message ? (
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div
                                className={`w-32 h-24 rounded-lg flex items-center justify-center ${
                                    config.highContrast
                                        ? "bg-gray-700"
                                        : "bg-white/50"
                                }`}
                            >
                                <Hand
                                    className={`w-8 h-8 ${
                                        config.highContrast
                                            ? "text-white"
                                            : "text-sky-600"
                                    } animate-pulse`}
                                />
                            </div>
                            <div className="flex-1">
                                <p
                                    className={`text-sm ${
                                        config.highContrast
                                            ? "text-gray-300"
                                            : "text-gray-600"
                                    } mb-1`}
                                >
                                    Sign Language Translation
                                </p>
                                <p
                                    className={`font-medium ${
                                        config.highContrast
                                            ? "text-white"
                                            : "text-gray-900"
                                    } ${
                                        config.dyslexiaFont ? "font-mono" : ""
                                    } ${config.largeText ? "text-lg" : ""}`}
                                >
                                    "{message.text}"
                                </p>
                            </div>
                        </div>

                        {config.voiceEnabled && (
                            <button
                                onClick={handlePlayAudio}
                                className={`p-3 rounded-full transition-colors ${
                                    config.highContrast
                                        ? "bg-white text-black hover:bg-gray-200"
                                        : "bg-sky-500 text-white hover:bg-sky-600"
                                }`}
                                aria-label="Play audio"
                            >
                                <Volume2 className="w-5 h-5" />
                            </button>
                        )}
                    </div>
                ) : (
                    <div className="text-center py-8">
                        <Hand
                            className={`w-12 h-12 mx-auto mb-3 ${
                                config.highContrast
                                    ? "text-gray-500"
                                    : "text-sky-400"
                            }`}
                        />
                        <p
                            className={`${
                                config.highContrast
                                    ? "text-gray-400"
                                    : "text-gray-500"
                            } ${config.dyslexiaFont ? "font-mono" : ""}`}
                        >
                            Tap a message to see sign language translation
                        </p>
                    </div>
                )}
            </Card>
        </div>
    );
};

export default SignLanguageDisplay;
