// src/services/ai/ragService.ts
// Сервис для работы с RAG API (будет реализован при интеграции)

import { AIRequest, AIResponse, RAGConfig } from "./types";

// Временная конфигурация (в будущем из env переменных)
const defaultConfig: RAGConfig = {
  apiUrl: import.meta.env.VITE_RAG_API_URL || "/api/rag",
  model: "gpt-4",
  temperature: 0.7,
  maxTokens: 1000,
};

/**
 * Отправка запроса к RAG API
 * В будущем здесь будет реальный запрос к бэкенду с PostgreSQL и векторным поиском
 */
export const queryRAG = async (
  _request: AIRequest,
  _config: RAGConfig = defaultConfig
): Promise<AIResponse> => {
  // TODO: Реализовать реальный запрос к API
  // const response = await fetch(config.apiUrl, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     ...(config.apiKey && { Authorization: `Bearer ${config.apiKey}` }),
  //   },
  //   body: JSON.stringify(request),
  // });
  // return response.json();

  // Временная заглушка
  return {
    answer: "Это демо-версия. В будущем здесь будет ответ от RAG-системы.",
    sources: [],
    confidence: 0.8,
    suggestedQuestions: [],
  };
};

/**
 * Получение истории диалога из базы данных
 */
export const getChatHistory = async (_sessionId: string) => {
  // TODO: Реализовать получение истории из PostgreSQL
  return [];
};

/**
 * Сохранение сообщения в базу данных
 */
export const saveMessage = async (message: any) => {
  // TODO: Реализовать сохранение в PostgreSQL
  return message;
};

