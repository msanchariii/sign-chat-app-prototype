
import { Message } from "./chat";

export interface Participant {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

export interface Conversation {
  id: string;
  participants: Participant[];
  lastMessage: Message;
  unreadCount: number;
  isGroup: boolean;
  groupName?: string;
  updatedAt: Date;
}
