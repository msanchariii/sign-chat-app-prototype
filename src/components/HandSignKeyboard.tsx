import React, { useState } from "react";
import { AccessibilityConfig, HandSign } from "@/types/chat";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, Hand } from "lucide-react";
import { categories, categorizedWords } from "@/lib/data";
import { Input } from "./ui/input";

interface HandSignKeyboardProps {
    isOpen: boolean;
    onClose: () => void;
    onSignSelect: (text: string) => void;
    config: AccessibilityConfig;
    inputText: string;
    onInputTextChange: (text: string) => void;
}

const HandSignKeyboard: React.FC<HandSignKeyboardProps> = ({
    inputText,
    onInputTextChange,
    isOpen,
    onClose,
    onSignSelect,
    config,
}) => {
    const [activeTab, setActiveTab] = useState("alphabet");
    const [selectedCategory, setSelectedCategory] = useState("greetings");
    // const [inputValue, setInputValue] = useState(inputText || "");

    // Mock data for hand signs
    const alphabetSigns: HandSign[] = Array.from(
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    ).map((letter) => ({
        letter,
        category: "alphabet" as const,
        thumbnailUrl: `/signs/${letter.toLowerCase()}.png`,
    }));

    const handleSignClick = (sign: HandSign) => {
        const textToAdd = sign.word || sign.letter;
        const finalText =
            textToAdd === textToAdd.toUpperCase() && textToAdd.length === 1
                ? textToAdd
                : textToAdd + " ";
        onSignSelect(finalText);
        onInputTextChange(inputText + finalText);
    };

    const SignButton: React.FC<{ sign: HandSign }> = ({ sign }) => (
        <Card
            className={`p-3 cursor-pointer transition-all duration-200 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                config.highContrast
                    ? "bg-gray-800 border-white hover:bg-gray-700"
                    : "bg-white border-sky-200 hover:bg-sky-50"
            }`}
            onClick={() => handleSignClick(sign)}
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    handleSignClick(sign);
                }
            }}
            role="button"
            aria-label={`Insert ${sign.word || sign.letter}`}
        >
            <div className="text-center">
                <div
                    className={`w-16 h-16 mx-auto mb-2 rounded-lg flex items-center justify-center ${
                        config.highContrast
                            ? "bg-gray-700"
                            : "bg-gradient-to-br from-sky-100 to-purple-100"
                    }`}
                >
                    {sign.emoji ? (
                        <span className="text-2xl">{sign.emoji}</span>
                    ) : (
                        <Hand
                            className={`w-6 h-6 ${
                                config.highContrast
                                    ? "text-white"
                                    : "text-sky-600"
                            }`}
                        />
                    )}
                </div>
                <p
                    className={`text-sm font-medium ${
                        config.highContrast ? "text-white" : "text-gray-900"
                    } ${config.dyslexiaFont ? "font-mono" : ""} ${
                        config.largeText ? "text-base" : ""
                    }`}
                >
                    {sign.word || sign.letter}
                </p>
            </div>
        </Card>
    );

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent
                className={`max-w-6xl max-h-[90vh] ${
                    config.highContrast
                        ? "bg-gray-900 border-white"
                        : "bg-white"
                }`}
            >
                <DialogHeader className="flex flex-row items-center justify-between">
                    <DialogTitle
                        className={`${
                            config.highContrast ? "text-white" : "text-gray-900"
                        } ${config.dyslexiaFont ? "font-mono" : ""}`}
                    >
                        Hand Sign Keyboard
                    </DialogTitle>
                </DialogHeader>
                <DialogDescription
                    className={`${
                        config.highContrast ? "text-white" : "text-gray-700"
                    } ${config.dyslexiaFont ? "font-mono" : ""}`}
                >
                    <Input
                        // placeholder="Search signs..."
                        className={`cursor-not-allowed ${
                            config.highContrast ? "text-white" : "text-gray-900"
                        } ${config.dyslexiaFont ? "font-mono" : ""}`}
                        value={inputText}
                        // If you later enable searching, use onChange={e => onInputTextChange(e.target.value)}
                        readOnly
                    />
                </DialogDescription>

                <Tabs
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="w-full"
                >
                    <TabsList
                        className={`grid w-full grid-cols-2 ${
                            config.highContrast ? "bg-gray-800" : ""
                        }`}
                    >
                        <TabsTrigger
                            value="alphabet"
                            className={
                                config.highContrast
                                    ? "data-[state=active]:bg-white data-[state=active]:text-black"
                                    : ""
                            }
                        >
                            A-Z
                        </TabsTrigger>
                        <TabsTrigger
                            value="common"
                            className={
                                config.highContrast
                                    ? "data-[state=active]:bg-white data-[state=active]:text-black"
                                    : ""
                            }
                        >
                            Common Words
                        </TabsTrigger>
                    </TabsList>

                    <div className="mt-4 max-h-96 overflow-hidden">
                        <TabsContent value="alphabet" className="m-0">
                            <ScrollArea className="h-96">
                                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3 p-1">
                                    {alphabetSigns.map((sign) => (
                                        <SignButton
                                            key={sign.letter}
                                            sign={sign}
                                        />
                                    ))}
                                </div>
                                {/* Space bar */}
                                <SignButton
                                    key="space"
                                    sign={{
                                        letter: "Space",
                                        word: " ",
                                        category: "actions" as const,
                                        emoji: "⏎",
                                        thumbnailUrl: "/signs/space.png",
                                    }}
                                />
                            </ScrollArea>
                        </TabsContent>

                        <TabsContent value="common" className="m-0">
                            <div className="flex h-96">
                                {/* Sidebar for categories */}
                                <div
                                    className={`w-48 border-r ${
                                        config.highContrast
                                            ? "border-gray-600"
                                            : "border-gray-200"
                                    } pr-4`}
                                >
                                    <ScrollArea className="h-full">
                                        <div className="space-y-2">
                                            {categories.map((category) => (
                                                <Button
                                                    key={category.key}
                                                    variant={
                                                        selectedCategory ===
                                                        category.key
                                                            ? "default"
                                                            : "ghost"
                                                    }
                                                    className={`w-full justify-start text-left ${
                                                        config.highContrast
                                                            ? selectedCategory ===
                                                              category.key
                                                                ? "bg-white text-black"
                                                                : "text-white hover:bg-gray-800"
                                                            : ""
                                                    }`}
                                                    onClick={() =>
                                                        setSelectedCategory(
                                                            category.key
                                                        )
                                                    }
                                                >
                                                    <span className="mr-2">
                                                        {category.emoji}
                                                    </span>
                                                    <span
                                                        className={
                                                            config.dyslexiaFont
                                                                ? "font-mono"
                                                                : ""
                                                        }
                                                    >
                                                        {category.label}
                                                    </span>
                                                </Button>
                                            ))}
                                        </div>
                                    </ScrollArea>
                                </div>

                                {/* Main content area */}
                                <div className="flex-1 pl-4">
                                    <ScrollArea className="h-full">
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-1">
                                            {categorizedWords[
                                                selectedCategory as keyof typeof categorizedWords
                                            ]?.map((sign) => (
                                                <SignButton
                                                    key={sign.letter}
                                                    sign={sign}
                                                />
                                            ))}
                                        </div>
                                    </ScrollArea>
                                </div>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </DialogContent>
        </Dialog>
    );
};

export default HandSignKeyboard;
