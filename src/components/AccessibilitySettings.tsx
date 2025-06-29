import React, { useState } from "react";
import { AccessibilityConfig } from "@/types/chat";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Settings,
    Accessibility,
    Eye,
    Type,
    Volume2,
    Hand,
    Palette,
} from "lucide-react";

interface AccessibilitySettingsProps {
    config: AccessibilityConfig;
    onConfigChange: (config: AccessibilityConfig) => void;
}

const AccessibilitySettings: React.FC<AccessibilitySettingsProps> = ({
    config,
    onConfigChange,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const updateConfig = (updates: Partial<AccessibilityConfig>) => {
        onConfigChange({ ...config, ...updates });
    };

    return (
        <>
            {/* Floating Settings Button */}
            <Button
                onClick={() => setIsOpen(true)}
                size="lg"
                className={`fixed bottom-48 right-6 rounded-full size-16 shadow-lg z-40 ${
                    config.highContrast
                        ? "bg-white text-black hover:bg-gray-200"
                        : "bg-gradient-to-r from-sky-500 to-purple-500 hover:from-sky-600 hover:to-purple-600 text-white"
                }`}
                aria-label="Open accessibility settings"
            >
                <Settings className="w-6 h-6" />
            </Button>

            {/* Settings Modal */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent
                    className={`max-w-2xl ${
                        config.highContrast
                            ? "bg-gray-900 border-white"
                            : "bg-white"
                    }`}
                >
                    <DialogHeader>
                        <DialogTitle
                            className={`flex items-center space-x-2 ${
                                config.highContrast
                                    ? "text-white"
                                    : "text-gray-900"
                            }`}
                        >
                            <Accessibility className="w-6 h-6" />
                            <span
                                className={
                                    config.dyslexiaFont ? "font-mono" : ""
                                }
                            >
                                Accessibility Settings
                            </span>
                        </DialogTitle>
                    </DialogHeader>

                    <div className="space-y-6 py-4">
                        {/* Visual Accessibility */}
                        <Card
                            className={`p-4 ${
                                config.highContrast
                                    ? "bg-gray-800 border-gray-600"
                                    : "bg-sky-50 border-sky-200"
                            }`}
                        >
                            <div
                                className={`flex items-center space-x-2 mb-4 ${
                                    config.highContrast
                                        ? "text-white"
                                        : "text-gray-900"
                                }`}
                            >
                                <Eye className="w-5 h-5" />
                                <h3
                                    className={`font-semibold ${
                                        config.dyslexiaFont ? "font-mono" : ""
                                    }`}
                                >
                                    Visual Accessibility
                                </h3>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <Label
                                        htmlFor="high-contrast"
                                        className={`flex items-center space-x-2 ${
                                            config.highContrast
                                                ? "text-white"
                                                : ""
                                        }`}
                                    >
                                        <Palette className="w-4 h-4" />
                                        <span
                                            className={
                                                config.dyslexiaFont
                                                    ? "font-mono"
                                                    : ""
                                            }
                                        >
                                            High Contrast Mode
                                        </span>
                                    </Label>
                                    <Switch
                                        id="high-contrast"
                                        checked={config.highContrast}
                                        onCheckedChange={(checked) =>
                                            updateConfig({
                                                highContrast: checked,
                                            })
                                        }
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <Label
                                        htmlFor="dyslexia-font"
                                        className={`flex items-center space-x-2 ${
                                            config.highContrast
                                                ? "text-white"
                                                : ""
                                        }`}
                                    >
                                        <Type className="w-4 h-4" />
                                        <span
                                            className={
                                                config.dyslexiaFont
                                                    ? "font-mono"
                                                    : ""
                                            }
                                        >
                                            Dyslexia-Friendly Font
                                        </span>
                                    </Label>
                                    <Switch
                                        id="dyslexia-font"
                                        checked={config.dyslexiaFont}
                                        onCheckedChange={(checked) =>
                                            updateConfig({
                                                dyslexiaFont: checked,
                                            })
                                        }
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <Label
                                        htmlFor="large-text"
                                        className={`flex items-center space-x-2 ${
                                            config.highContrast
                                                ? "text-white"
                                                : ""
                                        }`}
                                    >
                                        <Type className="w-4 h-4" />
                                        <span
                                            className={
                                                config.dyslexiaFont
                                                    ? "font-mono"
                                                    : ""
                                            }
                                        >
                                            Large Text
                                        </span>
                                    </Label>
                                    <Switch
                                        id="large-text"
                                        checked={config.largeText}
                                        onCheckedChange={(checked) =>
                                            updateConfig({ largeText: checked })
                                        }
                                    />
                                </div>
                            </div>
                        </Card>

                        {/* Input/Output Preferences */}
                        <Card
                            className={`p-4 ${
                                config.highContrast
                                    ? "bg-gray-800 border-gray-600"
                                    : "bg-purple-50 border-purple-200"
                            }`}
                        >
                            <div
                                className={`flex items-center space-x-2 mb-4 ${
                                    config.highContrast
                                        ? "text-white"
                                        : "text-gray-900"
                                }`}
                            >
                                <Hand className="w-5 h-5" />
                                <h3
                                    className={`font-semibold ${
                                        config.dyslexiaFont ? "font-mono" : ""
                                    }`}
                                >
                                    Communication Preferences
                                </h3>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label
                                        className={`${
                                            config.highContrast
                                                ? "text-white"
                                                : ""
                                        } ${
                                            config.dyslexiaFont
                                                ? "font-mono"
                                                : ""
                                        }`}
                                    >
                                        Preferred Input Method
                                    </Label>
                                    <Select
                                        value={config.preferredInput}
                                        onValueChange={(value: any) =>
                                            updateConfig({
                                                preferredInput: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger
                                            className={
                                                config.highContrast
                                                    ? "bg-gray-700 border-gray-600 text-white"
                                                    : ""
                                            }
                                        >
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="text">
                                                Text
                                            </SelectItem>
                                            <SelectItem value="sign">
                                                Sign Language
                                            </SelectItem>
                                            <SelectItem value="voice">
                                                Voice
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label
                                        className={`${
                                            config.highContrast
                                                ? "text-white"
                                                : ""
                                        } ${
                                            config.dyslexiaFont
                                                ? "font-mono"
                                                : ""
                                        }`}
                                    >
                                        Preferred Output Method
                                    </Label>
                                    <Select
                                        value={config.preferredOutput}
                                        onValueChange={(value: any) =>
                                            updateConfig({
                                                preferredOutput: value,
                                            })
                                        }
                                    >
                                        <SelectTrigger
                                            className={
                                                config.highContrast
                                                    ? "bg-gray-700 border-gray-600 text-white"
                                                    : ""
                                            }
                                        >
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="text">
                                                Text
                                            </SelectItem>
                                            <SelectItem value="sign">
                                                Sign Language
                                            </SelectItem>
                                            <SelectItem value="audio">
                                                Audio
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="flex items-center justify-between">
                                    <Label
                                        htmlFor="voice-enabled"
                                        className={`flex items-center space-x-2 ${
                                            config.highContrast
                                                ? "text-white"
                                                : ""
                                        }`}
                                    >
                                        <Volume2 className="w-4 h-4" />
                                        <span
                                            className={
                                                config.dyslexiaFont
                                                    ? "font-mono"
                                                    : ""
                                            }
                                        >
                                            Enable Voice Features
                                        </span>
                                    </Label>
                                    <Switch
                                        id="voice-enabled"
                                        checked={config.voiceEnabled}
                                        onCheckedChange={(checked) =>
                                            updateConfig({
                                                voiceEnabled: checked,
                                            })
                                        }
                                    />
                                </div>
                            </div>
                        </Card>

                        {/* Quick Actions */}
                        <div className="flex justify-end space-x-2">
                            <Button
                                variant="outline"
                                onClick={() => setIsOpen(false)}
                                className={
                                    config.highContrast
                                        ? "border-white text-white hover:bg-gray-800"
                                        : ""
                                }
                            >
                                Close
                            </Button>
                            <Button
                                onClick={() => {
                                    // Reset to default settings
                                    onConfigChange({
                                        highContrast: false,
                                        dyslexiaFont: false,
                                        preferredInput: "text",
                                        preferredOutput: "text",
                                        largeText: false,
                                        voiceEnabled: false,
                                    });
                                }}
                                variant="outline"
                                className={
                                    config.highContrast
                                        ? "border-white text-white hover:bg-gray-800"
                                        : ""
                                }
                            >
                                Reset to Default
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default AccessibilitySettings;
