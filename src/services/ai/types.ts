// src/services/ai/types.ts
// Типы для будущей интеграции с RAG и PostgreSQL

export interface AIMessage {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
  sources?: SourceReference[]; // Ссылки на источники из RAG
}

export interface SourceReference {
  id: string;
  title: string;
  url?: string;
  section?: string;
  relevance: number;
}

export interface AIRequest {
  query: string;
  context?: {
    userId?: string;
    sessionId?: string;
    filters?: {
      sections?: string[]; // Фильтр по разделам мастер-плана
      topics?: string[]; // Фильтр по темам
    };
  };
}

export interface AIResponse {
  answer: string;
  sources: SourceReference[];
  confidence: number;
  suggestedQuestions?: string[];
}

// Конфигурация для подключения к RAG API
export interface RAGConfig {
  apiUrl: string;
  apiKey?: string;
  model?: string;
  temperature?: number;
  maxTokens?: number;
}

