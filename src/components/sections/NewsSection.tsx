// src/components/sections/NewsSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { PageSection } from "../layout/PageSection";
import { Heading, Body, Caption } from "../ui/Typography";
import { Card } from "../ui/Card";

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  source: "telegram" | "site";
  telegramMessageId?: string;
}

// TODO: В будущем здесь будет загрузка новостей из Telegram API
const mockNews: NewsItem[] = [
  {
    id: "1",
    title: "Начало разработки мастер-плана Твери",
    excerpt: "Официально стартовала работа над стратегическим мастер-планом города Твери и агломерации на период 2025–2035 годов.",
    date: "2024-01-15",
    source: "site",
  },
  {
    id: "2",
    title: "Презентация концепции развития",
    excerpt: "Состоялась первая публичная презентация концепции развития города с участием стейкхолдеров и экспертов.",
    date: "2024-02-20",
    source: "telegram",
  },
  {
    id: "3",
    title: "Обсуждение направлений развития",
    excerpt: "Эксперты обсудили ключевые направления развития: мобильность, застройку, водно-зелёный каркас и другие.",
    date: "2024-03-10",
    source: "telegram",
  },
];

export const NewsSection: React.FC = () => {
  // TODO: Реализовать загрузку новостей из Telegram API
  // useEffect(() => {
  //   fetchNewsFromTelegram();
  // }, []);

  return (
    <PageSection id="news" className="bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8 flex items-center gap-4">
          <Heading as="h2" className="text-2xl">
            Новости мастер-плана
          </Heading>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        </div>
        <Body className="mb-8 max-w-3xl text-slate-600">
          Актуальные новости о разработке и реализации мастер-плана Твери.
          Новости синхронизируются с официальным Telegram-каналом проекта.
        </Body>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockNews.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="cursor-pointer"
            >
              <Card hover className="h-full flex flex-col">
                {item.source === "telegram" && (
                  <div className="flex items-center gap-2 mb-3">
                    <svg
                      className="w-4 h-4 text-digital"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                    <Caption className="text-xs">Из Telegram</Caption>
                  </div>
                )}
                <h3 className="text-lg font-bold font-display text-slate-900 mb-2">
                  {item.title}
                </h3>
                <Body className="text-sm text-slate-600 mb-4 flex-1">
                  {item.excerpt}
                </Body>
                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <Caption className="text-xs text-slate-500">
                    {new Date(item.date).toLocaleDateString("ru-RU", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </Caption>
                  <span className="text-xs text-digital font-medium">
                    Читать →
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Кнопка перехода в Telegram */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href={import.meta.env.VITE_TELEGRAM_CHANNEL_URL || "https://t.me/master_plan_tver"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-digital text-white rounded-full font-medium hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            Подписаться на новости в Telegram
          </a>
        </motion.div>
      </motion.div>
    </PageSection>
  );
};

