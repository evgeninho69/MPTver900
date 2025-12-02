# Интеграция с Telegram-каналом

## Обзор

Сайт мастер-плана Твери синхронизируется с официальным Telegram-каналом проекта для отображения новостей и общения с сообществом.

## Компоненты

### 1. Header (`src/components/layout/Header.tsx`)
- Раздел "Новости" — переход к секции новостей
- Раздел "Общение" — прямая ссылка на Telegram-канал с иконкой

### 2. NewsSection (`src/components/sections/NewsSection.tsx`)
- Отображение новостей из Telegram-канала
- Карточки новостей с метками источника
- Кнопка подписки на канал

### 3. Telegram Service (`src/services/telegram/`)
- Типы для работы с Telegram API
- Сервис для получения постов из канала
- Подготовка к webhook-интеграции

## Настройка

### Переменные окружения

```env
# Telegram Bot Token (получить у @BotFather)
VITE_TELEGRAM_BOT_TOKEN=your_bot_token_here

# ID Telegram-канала (например: @master_plan_tver или -1001234567890)
VITE_TELEGRAM_CHANNEL_ID=@master_plan_tver

# URL канала для прямых ссылок
VITE_TELEGRAM_CHANNEL_URL=https://t.me/master_plan_tver
```

## Интеграция с Telegram Bot API

### Создание бота

1. Создайте бота через [@BotFather](https://t.me/BotFather)
2. Получите Bot Token
3. Добавьте бота администратором в канал
4. Получите Channel ID (можно через [@userinfobot](https://t.me/userinfobot))

### Получение постов из канала

```typescript
import { fetchChannelPosts } from '@/services/telegram/telegramService';

// Получение последних 10 постов
const posts = await fetchChannelPosts(10);
```

### Webhook для реального времени

Для получения обновлений в реальном времени настройте webhook:

```typescript
import { setupWebhook } from '@/services/telegram/telegramService';

// Настройка webhook (выполняется один раз на сервере)
await setupWebhook('https://your-domain.com/api/telegram/webhook');
```

## Структура данных

### TelegramChannelPost

```typescript
interface TelegramChannelPost {
  id: string;              // Уникальный ID поста
  messageId: number;      // ID сообщения в Telegram
  text: string;           // Текст поста
  date: Date;            // Дата публикации
  imageUrl?: string;     // URL изображения (если есть)
  link?: string;         // Ссылка из поста
}
```

## API Endpoints (будущая реализация)

### GET `/api/telegram/posts`
Получение последних постов из канала

**Response:**
```json
{
  "posts": [
    {
      "id": "telegram-123",
      "messageId": 123,
      "text": "Новая новость о мастер-плане...",
      "date": "2024-01-15T10:00:00Z",
      "imageUrl": "https://...",
      "link": "https://..."
    }
  ],
  "total": 10
}
```

### POST `/api/telegram/webhook`
Webhook для получения обновлений от Telegram

**Request:**
```json
{
  "update_id": 123456,
  "channel_post": {
    "message_id": 123,
    "date": 1705312800,
    "text": "Новая новость..."
  }
}
```

## План интеграции

1. ✅ Создание компонентов для отображения новостей
2. ✅ Добавление разделов в хедер
3. ✅ Подготовка типов и сервисов
4. ⏳ Настройка Telegram Bot
5. ⏳ Реализация получения постов через Bot API
6. ⏳ Настройка webhook для реального времени
7. ⏳ Кэширование постов в базе данных
8. ⏳ Автоматическое обновление новостей

## Безопасность

- Bot Token должен храниться только на сервере
- Webhook URL должен быть защищён (HTTPS)
- Валидация входящих запросов от Telegram
- Rate limiting для API запросов

## Примеры использования

### Отображение новостей в компоненте

```tsx
import { NewsSection } from '@/components/sections/NewsSection';

<NewsSection />
```

### Получение постов программно

```tsx
import { useEffect, useState } from 'react';
import { fetchChannelPosts } from '@/services/telegram/telegramService';

const [posts, setPosts] = useState([]);

useEffect(() => {
  fetchChannelPosts(10).then(setPosts);
}, []);
```

## Дополнительные возможности

- Фильтрация новостей по дате
- Поиск по новостям
- Пагинация
- Отображение медиа (фото, видео)
- Поделиться новостью
- Комментарии (через Telegram)

