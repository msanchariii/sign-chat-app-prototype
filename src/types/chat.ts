
export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
  hasSignLanguage?: boolean;
}

export interface AccessibilityConfig {
  highContrast: boolean;
  dyslexiaFont: boolean;
  preferredInput: 'text' | 'sign' | 'voice';
  preferredOutput: 'text' | 'sign' | 'audio';
  largeText: boolean;
  voiceEnabled: boolean;
}

export interface HandSign {
  letter: string;
  word?: string;
  category: 'alphabet' | 'greetings' | 'actions' | 'emotions' | 'pronouns' | 'responses' | 'rooms';
  emoji?: string;
  thumbnailUrl: string;
}
