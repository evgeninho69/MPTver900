// src/services/telegram/types.ts
// Типы для работы с Telegram API

export interface TelegramMessage {
  message_id: number;
  date: number;
  text?: string;
  caption?: string;
  photo?: TelegramPhoto[];
  document?: TelegramDocument;
  entities?: TelegramEntity[];
}

export interface TelegramPhoto {
  file_id: string;
  file_unique_id: string;
  width: number;
  height: number;
  file_size?: number;
}

export interface TelegramDocument {
  file_id: string;
  file_unique_id: string;
  file_name?: string;
  mime_type?: string;
  file_size?: number;
}

export interface TelegramEntity {
  type: string;
  offset: number;
  length: number;
  url?: string;
}

export interface TelegramChannelPost {
  id: string;
  messageId: number;
  text: string;
  date: Date;
  imageUrl?: string;
  link?: string;
}

export interface TelegramConfig {
  botToken: string;
  channelId: string;
  apiUrl?: string;
}

