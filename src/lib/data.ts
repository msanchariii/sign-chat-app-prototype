const categorizedWords = {
    greetings: [
        {
            letter: "Hello",
            word: "Hello",
            category: "greetings" as const,
            emoji: "👋",
            thumbnailUrl: "/signs/hello.png",
        },
        {
            letter: "Good morning",
            word: "Good morning",
            category: "greetings" as const,
            emoji: "🌅",
            thumbnailUrl: "/signs/morning.png",
        },
        {
            letter: "Good night",
            word: "Good night",
            category: "greetings" as const,
            emoji: "🌙",
            thumbnailUrl: "/signs/night.png",
        },
        {
            letter: "Goodbye",
            word: "Goodbye",
            category: "greetings" as const,
            emoji: "👋",
            thumbnailUrl: "/signs/goodbye.png",
        },
        {
            letter: "How are you",
            word: "How are you",
            category: "greetings" as const,
            emoji: "❓",
            thumbnailUrl: "/signs/how.png",
        },
        {
            letter: "Nice to meet you",
            word: "Nice to meet you",
            category: "greetings" as const,
            emoji: "🤝",
            thumbnailUrl: "/signs/meet.png",
        },
    ],
    actions: [
        {
            letter: "Help",
            word: "Help",
            category: "actions" as const,
            emoji: "🆘",
            thumbnailUrl: "/signs/help.png",
        },
        {
            letter: "Go",
            word: "Go",
            category: "actions" as const,
            emoji: "🚶",
            thumbnailUrl: "/signs/go.png",
        },
        {
            letter: "Stop",
            word: "Stop",
            category: "actions" as const,
            emoji: "✋",
            thumbnailUrl: "/signs/stop.png",
        },
        {
            letter: "Come",
            word: "Come",
            category: "actions" as const,
            emoji: "👋",
            thumbnailUrl: "/signs/come.png",
        },
        {
            letter: "Sit",
            word: "Sit",
            category: "actions" as const,
            emoji: "🪑",
            thumbnailUrl: "/signs/sit.png",
        },
        {
            letter: "Stand",
            word: "Stand",
            category: "actions" as const,
            emoji: "🧍",
            thumbnailUrl: "/signs/stand.png",
        },
    ],
    emotions: [
        {
            letter: "Happy",
            word: "Happy",
            category: "emotions" as const,
            emoji: "😊",
            thumbnailUrl: "/signs/happy.png",
        },
        {
            letter: "Sad",
            word: "Sad",
            category: "emotions" as const,
            emoji: "😢",
            thumbnailUrl: "/signs/sad.png",
        },
        {
            letter: "Angry",
            word: "Angry",
            category: "emotions" as const,
            emoji: "😠",
            thumbnailUrl: "/signs/angry.png",
        },
        {
            letter: "Excited",
            word: "Excited",
            category: "emotions" as const,
            emoji: "🤩",
            thumbnailUrl: "/signs/excited.png",
        },
        {
            letter: "Tired",
            word: "Tired",
            category: "emotions" as const,
            emoji: "😴",
            thumbnailUrl: "/signs/tired.png",
        },
        {
            letter: "Scared",
            word: "Scared",
            category: "emotions" as const,
            emoji: "😨",
            thumbnailUrl: "/signs/scared.png",
        },
    ],
    pronouns: [
        {
            letter: "I",
            word: "I",
            category: "pronouns" as const,
            emoji: "👤",
            thumbnailUrl: "/signs/i.png",
        },
        {
            letter: "You",
            word: "You",
            category: "pronouns" as const,
            emoji: "👥",
            thumbnailUrl: "/signs/you.png",
        },
        {
            letter: "He",
            word: "He",
            category: "pronouns" as const,
            emoji: "👨",
            thumbnailUrl: "/signs/he.png",
        },
        {
            letter: "She",
            word: "She",
            category: "pronouns" as const,
            emoji: "👩",
            thumbnailUrl: "/signs/she.png",
        },
        {
            letter: "We",
            word: "We",
            category: "pronouns" as const,
            emoji: "👫",
            thumbnailUrl: "/signs/we.png",
        },
        {
            letter: "They",
            word: "They",
            category: "pronouns" as const,
            emoji: "👥",
            thumbnailUrl: "/signs/they.png",
        },
    ],
    responses: [
        {
            letter: "Yes",
            word: "Yes",
            category: "responses" as const,
            emoji: "✅",
            thumbnailUrl: "/signs/yes.png",
        },
        {
            letter: "No",
            word: "No",
            category: "responses" as const,
            emoji: "❌",
            thumbnailUrl: "/signs/no.png",
        },
        {
            letter: "Thank you",
            word: "Thank you",
            category: "responses" as const,
            emoji: "🙏",
            thumbnailUrl: "/signs/thanks.png",
        },
        {
            letter: "Please",
            word: "Please",
            category: "responses" as const,
            emoji: "🤲",
            thumbnailUrl: "/signs/please.png",
        },
        {
            letter: "Sorry",
            word: "Sorry",
            category: "responses" as const,
            emoji: "😔",
            thumbnailUrl: "/signs/sorry.png",
        },
        {
            letter: "Excuse me",
            word: "Excuse me",
            category: "responses" as const,
            emoji: "🤚",
            thumbnailUrl: "/signs/excuse.png",
        },
    ],
    rooms: [
        {
            letter: "Home",
            word: "Home",
            category: "rooms" as const,
            emoji: "🏠",
            thumbnailUrl: "/signs/home.png",
        },
        {
            letter: "Kitchen",
            word: "Kitchen",
            category: "rooms" as const,
            emoji: "🍳",
            thumbnailUrl: "/signs/kitchen.png",
        },
        {
            letter: "Bedroom",
            word: "Bedroom",
            category: "rooms" as const,
            emoji: "🛏️",
            thumbnailUrl: "/signs/bedroom.png",
        },
        {
            letter: "Bathroom",
            word: "Bathroom",
            category: "rooms" as const,
            emoji: "🚿",
            thumbnailUrl: "/signs/bathroom.png",
        },
        {
            letter: "School",
            word: "School",
            category: "rooms" as const,
            emoji: "🏫",
            thumbnailUrl: "/signs/school.png",
        },
        {
            letter: "Hospital",
            word: "Hospital",
            category: "rooms" as const,
            emoji: "🏥",
            thumbnailUrl: "/signs/hospital.png",
        },
    ],
};

const categories = [
    { key: "greetings", label: "Greetings", emoji: "👋" },
    { key: "actions", label: "Actions", emoji: "🏃" },
    { key: "emotions", label: "Emotions", emoji: "😊" },
    { key: "pronouns", label: "Pronouns", emoji: "👤" },
    { key: "responses", label: "Responses", emoji: "💬" },
    { key: "rooms", label: "Rooms", emoji: "🏠" },
];

export { categories, categorizedWords };

import { Conversation } from '@/types/conversation';

// Mock conversation data
export const mockConversations: Conversation[] = [
  {
    id: '1',
    participants: [
      { id: 'you', name: 'You', email: localStorage.getItem('userEmail') || '' },
      { id: 'john', name: 'John Smith', email: 'john@example.com' }
    ],
    lastMessage: {
      id: 'm1',
      text: "Hello! Welcome to our accessible chat app.",
      sender: 'assistant',
      timestamp: new Date(Date.now() - 300000),
      hasSignLanguage: true,
    },
    unreadCount: 0,
    isGroup: false,
    updatedAt: new Date(Date.now() - 300000)
  },
  {
    id: '2',
    participants: [
      { id: 'you', name: 'You', email: localStorage.getItem('userEmail') || '' },
      { id: 'sara', name: 'Sara Johnson', email: 'sara@example.com' }
    ],
    lastMessage: {
      id: 'm2',
      text: "How are you doing today?",
      sender: 'user',
      timestamp: new Date(Date.now() - 1200000),
      hasSignLanguage: true,
    },
    unreadCount: 2,
    isGroup: false,
    updatedAt: new Date(Date.now() - 1200000)
  },
  {
    id: '3',
    participants: [
      { id: 'you', name: 'You', email: localStorage.getItem('userEmail') || '' },
      { id: 'alex', name: 'Alex Wong', email: 'alex@example.com' },
      { id: 'lisa', name: 'Lisa Chen', email: 'lisa@example.com' }
    ],
    lastMessage: {
      id: 'm3',
      text: "Let's meet tomorrow at 10am",
      sender: 'assistant',
      timestamp: new Date(Date.now() - 7200000),
      hasSignLanguage: true,
    },
    unreadCount: 5,
    isGroup: true,
    groupName: 'Project Team',
    updatedAt: new Date(Date.now() - 7200000)
  },
  {
    id: '4',
    participants: [
      { id: 'you', name: 'You', email: localStorage.getItem('userEmail') || '' },
      { id: 'mike', name: 'Mike Thompson', email: 'mike@example.com' }
    ],
    lastMessage: {
      id: 'm4',
      text: "Did you see the latest update?",
      sender: 'assistant',
      timestamp: new Date(Date.now() - 86400000),
      hasSignLanguage: true,
    },
    unreadCount: 0,
    isGroup: false,
    updatedAt: new Date(Date.now() - 86400000)
  },
];
