import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { LogOut, Users, MessageSquare } from 'lucide-react';
import { Conversation } from '@/types/conversation';

const ChatList = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [conversations, setConversations] = useState<Conversation[]>([]);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    const email = localStorage.getItem('userEmail');

    if (authStatus === 'true' && email) {
      setIsAuthenticated(true);
      setUserEmail(email);
      // Load mock conversations
      setConversations(mockConversations);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    navigate('/login');
  };

  const handleConversationClick = (conversationId: string) => {
    // Navigate to the specific chat route
    navigate(`/chat/${conversationId}`);
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-sky-50 to-purple-50">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-white/50 backdrop-blur-sm">
        <div className="flex items-center">
          <MessageSquare className="w-6 h-6 text-sky-600 mr-2" />
          <h1 className="text-xl font-semibold bg-gradient-to-r from-sky-600 to-purple-600 bg-clip-text text-transparent">
            My Conversations
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">{userEmail}</span>
          <Button variant="ghost" size="sm" onClick={handleLogout} aria-label="Log out">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      {/* Conversations List */}
      <ScrollArea className="flex-1 px-4 py-2">
        <div className="space-y-2 max-w-3xl mx-auto">
          {conversations.map((conversation) => {
            // Get the other participant's name for direct messages
            const otherParticipant = conversation.isGroup 
              ? null 
              : conversation.participants.find(p => p.email !== userEmail);
            
            const displayName = conversation.isGroup 
              ? conversation.groupName 
              : otherParticipant?.name;
            
            const avatarUrl = conversation.isGroup 
              ? undefined 
              : otherParticipant?.avatarUrl;

            const nameInitial = displayName ? displayName[0].toUpperCase() : '?';
            
            return (
              <Card 
                key={conversation.id}
                className="p-3 cursor-pointer hover:shadow-md transition-all duration-200"
                onClick={() => handleConversationClick(conversation.id)}
              >
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12 border border-gray-200">
                    {avatarUrl ? (
                      <AvatarImage src={avatarUrl} alt={displayName} />
                    ) : (
                      <AvatarFallback className={conversation.isGroup ? "bg-purple-100 text-purple-600" : "bg-sky-100 text-sky-600"}>
                        {conversation.isGroup ? <Users className="h-6 w-6" /> : nameInitial}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-medium truncate">
                        {displayName}
                        {conversation.isGroup && " (Group)"}
                      </h3>
                      <span className="text-xs text-gray-500">
                        {conversation.updatedAt.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">
                      {conversation.lastMessage.sender === 'user' ? 'You: ' : ''}
                      {conversation.lastMessage.text}
                    </p>
                  </div>
                  
                  {conversation.unreadCount > 0 && (
                    <div className="ml-2 bg-sky-500 text-white text-xs font-medium rounded-full h-5 min-w-5 flex items-center justify-center px-1">
                      {conversation.unreadCount}
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};

// Mock data
const mockConversations: Conversation[] = [
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

export default ChatList;
