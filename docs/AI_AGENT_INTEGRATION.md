# Интеграция AI-агента с RAG и PostgreSQL

## Обзор

AI-агент мастер-плана Твери — это интеллектуальный помощник, который использует технологию RAG (Retrieval-Augmented Generation) для ответов на вопросы о городе, мастер-плане и его развитии.

## Архитектура

```
Frontend (React)
    ↓
AI Agent Component
    ↓
RAG Service (API)
    ↓
PostgreSQL + Vector DB (pgvector)
    ↓
LLM (GPT-4 / Claude / локальная модель)
```

## Компоненты

### 1. Frontend (`src/components/ai/AIAgent.tsx`)
- Чат-интерфейс для взаимодействия с пользователем
- Отображение сообщений и источников
- Быстрые вопросы и предложения

### 2. RAG Service (`src/services/ai/ragService.ts`)
- Отправка запросов к бэкенд API
- Обработка ответов с источниками
- Управление историей диалогов

### 3. Backend API (будущая реализация)
- Приём запросов от фронтенда
- Векторный поиск в PostgreSQL (pgvector)
- Генерация ответов через LLM
- Возврат ответов с атрибуцией источников

## Структура базы данных (PostgreSQL)

### Таблица: `master_plan_documents`
```sql
CREATE TABLE master_plan_documents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    section VARCHAR(50), -- 4.1, 4.2, etc.
    topic VARCHAR(100), -- мобильность, застройка, etc.
    embedding vector(1536), -- OpenAI embeddings
    metadata JSONB,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX ON master_plan_documents USING ivfflat (embedding vector_cosine_ops);
```

### Таблица: `chat_sessions`
```sql
CREATE TABLE chat_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
```

### Таблица: `chat_messages`
```sql
CREATE TABLE chat_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID REFERENCES chat_sessions(id),
    text TEXT NOT NULL,
    sender VARCHAR(10) NOT NULL, -- 'user' | 'ai'
    sources JSONB, -- Ссылки на документы
    created_at TIMESTAMP DEFAULT NOW()
);
```

## API Endpoints (будущая реализация)

### POST `/api/rag/query`
Запрос к RAG-системе

**Request:**
```json
{
  "query": "Какие проекты включены в направление мобильности?",
  "context": {
    "sessionId": "uuid",
    "filters": {
      "sections": ["4.1"],
      "topics": ["мобильность"]
    }
  }
}
```

**Response:**
```json
{
  "answer": "В направлении мобильности включены следующие проекты...",
  "sources": [
    {
      "id": "uuid",
      "title": "Раздел 4.1. Мобильность",
      "section": "4.1",
      "relevance": 0.95
    }
  ],
  "confidence": 0.92,
  "suggestedQuestions": [
    "Какие транспортные решения планируются?",
    "Когда начнётся реализация проектов?"
  ]
}
```

### GET `/api/chat/history/:sessionId`
Получение истории диалога

### POST `/api/chat/message`
Сохранение сообщения

## Интеграция с векторной БД

### Использование pgvector
```typescript
// Пример запроса векторного поиска
const query = `
  SELECT 
    id, 
    title, 
    content,
    1 - (embedding <=> $1::vector) as similarity
  FROM master_plan_documents
  WHERE 1 - (embedding <=> $1::vector) > 0.7
  ORDER BY embedding <=> $1::vector
  LIMIT 5;
`;
```

### Генерация embeddings
```typescript
// Использование OpenAI API для генерации embeddings
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const embedding = await openai.embeddings.create({
  model: 'text-embedding-3-small',
  input: documentContent,
});
```

## Переменные окружения

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/master_plan_db

# OpenAI
OPENAI_API_KEY=sk-...

# RAG API
RAG_API_URL=http://localhost:8000/api/rag
RAG_MODEL=gpt-4
RAG_TEMPERATURE=0.7
RAG_MAX_TOKENS=1000

# Vector DB
VECTOR_DIMENSION=1536
SIMILARITY_THRESHOLD=0.7
```

## План интеграции

1. ✅ Создание фронтенд компонента AI-агента
2. ✅ Определение типов и интерфейсов
3. ⏳ Настройка PostgreSQL с pgvector
4. ⏳ Создание таблиц для документов и чатов
5. ⏳ Реализация бэкенд API
6. ⏳ Интеграция с LLM (OpenAI/Claude/локальная модель)
7. ⏳ Загрузка документов мастер-плана в векторную БД
8. ⏳ Тестирование и оптимизация

## Будущие улучшения

- Мультиязычность (русский/английский)
- Голосовой ввод/вывод
- Экспорт диалогов
- Аналитика запросов
- Персонализация ответов для разных стейкхолдеров
- Интеграция с картами и визуализациями

