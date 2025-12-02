/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TELEGRAM_BOT_TOKEN?: string;
  readonly VITE_TELEGRAM_CHANNEL_ID?: string;
  readonly VITE_TELEGRAM_CHANNEL_URL?: string;
  readonly VITE_RAG_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

