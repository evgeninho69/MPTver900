// src/components/ai/AIAgent.tsx
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
  navigationLinks?: NavigationLink[];
}

interface NavigationLink {
  label: string;
  section: string;
  description?: string;
}

const navigationSections = [
  { id: "hero", label: "Главная страница", description: "Титульный экран и общая информация" },
  { id: "identity", label: "Идентификационные данные", description: "Основные данные мастер-плана" },
  { id: "structure", label: "Структура мастер-плана", description: "Этапы и направления развития" },
  { id: "4.1", label: "Мобильность", description: "Транспортная инфраструктура" },
  { id: "4.2", label: "Застройка", description: "Градостроительное развитие" },
  { id: "4.3", label: "Водно-зелёный каркас", description: "Экология и зелёные пространства" },
  { id: "4.4", label: "Общественные пространства", description: "Площади и парки" },
  { id: "4.5", label: "Инженерная инфраструктура", description: "Коммуникации и сети" },
  { id: "4.6", label: "Социальная сфера", description: "Образование и здравоохранение" },
  { id: "4.7", label: "Производство и МСП", description: "Промышленность и бизнес" },
  { id: "4.8", label: "Туризм", description: "Туристический потенциал" },
  { id: "4.9", label: "Культура", description: "Культурное наследие" },
  { id: "4.10", label: "Цифровизация", description: "Умный город" },
];

const exampleQuestions = [
  "Что такое мастер-план Твери?",
  "Какие направления развития включены в план?",
  "Покажи структуру мастер-плана",
  "Расскажи о мобильности",
];

export const AIAgent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Привет! Я Никитич — ваш помощник по мастер-плану Твери. Я знаю всё о городе, его развитии и стратегических планах. Могу помочь с навигацией по сайту и ответить на любые вопросы!",
      sender: "ai",
      timestamp: new Date(),
      navigationLinks: [
        { label: "Идентификационные данные", section: "identity" },
        { label: "Структура мастер-плана", section: "structure" },
        { label: "Направления развития", section: "structure" },
      ],
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      // Добавляем небольшой отступ сверху
      setTimeout(() => {
        window.scrollBy(0, -80);
      }, 500);
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Имитация ответа AI (в будущем здесь будет запрос к RAG API)
    // TODO: Заменить на реальный запрос к ragService.queryRAG()
    setTimeout(() => {
      // Пример ответа с учётом контекста вопроса
      let responseText = "";
      let navigationLinks: NavigationLink[] | undefined = undefined;
      const lowerQuery = userMessage.text.toLowerCase();
      
      if (lowerQuery.includes("мастер-план") || lowerQuery.includes("что такое")) {
        responseText = `Мастер-план Твери и агломерации — это стратегический документ, объединяющий социально-экономическое и пространственное развитие города на период 2025–2035 годов с перспективой до 2045 года. План включает 10 ключевых направлений развития и готовится к празднованию 900-летия Твери в 2035 году.`;
        navigationLinks = [
          { label: "Идентификационные данные", section: "identity" },
          { label: "Структура мастер-плана", section: "structure" },
        ];
      } else if (lowerQuery.includes("направлен") || lowerQuery.includes("раздел") || lowerQuery.includes("структур")) {
        responseText = `Мастер-план включает 10 направлений развития (Раздел 4): Мобильность, Застройка, Водно-зелёный каркас, Общественные пространства, Инженерная инфраструктура, Социальная сфера, Производство и МСП, Туризм, Культура и Цифровизация. Каждое направление содержит конкретные проекты и решения.`;
        navigationLinks = [
          { label: "Структура мастер-плана", section: "structure" },
          { label: "Мобильность (4.1)", section: "4.1" },
          { label: "Застройка (4.2)", section: "4.2" },
          { label: "Водно-зелёный каркас (4.3)", section: "4.3" },
        ];
      } else if (lowerQuery.includes("мобильност") || lowerQuery.includes("транспорт")) {
        responseText = `Направление "Мобильность" (4.1) включает развитие транспортной инфраструктуры и логистики. Это ключевое направление для обеспечения доступности и связи между районами города и агломерации.`;
        navigationLinks = [
          { label: "Мобильность (4.1)", section: "4.1" },
          { label: "Структура мастер-плана", section: "structure" },
        ];
      } else if (lowerQuery.includes("территор") || lowerQuery.includes("границ")) {
        responseText = `Территория проектирования включает город Тверь и прилегающие территории Калининского муниципального округа. Граница проектирования проходит между федеральной трассой М11 и строящейся железной дорогой высокоскоростного магистрального сообщения (ВСМ) Москва–Санкт-Петербург.`;
        navigationLinks = [
          { label: "Идентификационные данные", section: "identity" },
        ];
      } else if (lowerQuery.includes("когда") || lowerQuery.includes("срок")) {
        responseText = `Сроки реализации мастер-плана: до 2035 года (расчётный срок) с перспективой до 2045 года. Проектные сроки: до 2035 года — в пределах 15-минутной транспортной доступности; до 2045 года — в пределах 30-минутной транспортной доступности.`;
        navigationLinks = [
          { label: "Идентификационные данные", section: "identity" },
        ];
      } else if (lowerQuery.includes("навигац") || lowerQuery.includes("покажи") || lowerQuery.includes("перейди")) {
        responseText = `Конечно! Вот основные разделы сайта, по которым я могу помочь вам сориентироваться:`;
        navigationLinks = [
          { label: "Главная страница", section: "hero" },
          { label: "Идентификационные данные", section: "identity" },
          { label: "Структура мастер-плана", section: "structure" },
        ];
      } else {
        responseText = `Я могу помочь вам с навигацией по сайту или ответить на вопросы о мастер-плане Твери. Попробуйте спросить о конкретном направлении развития или попросите показать нужный раздел!`;
        navigationLinks = [
          { label: "Структура мастер-плана", section: "structure" },
          { label: "Идентификационные данные", section: "identity" },
        ];
      }
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: "ai",
        timestamp: new Date(),
        navigationLinks,
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
  };

  return (
    <>
      {/* Кнопка открытия чата */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-digital text-white rounded-full p-4 shadow-2xl hover:bg-blue-600 transition-all duration-300 flex items-center gap-3 group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        <span className="hidden md:block font-medium">Никитич</span>
        <motion.div
          className="absolute -top-1 -right-1 w-3 h-3 bg-heritage rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>

      {/* Чат-окно */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-end justify-end p-4 md:p-6"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md h-[600px] flex flex-col overflow-hidden"
            >
              {/* Заголовок */}
              <div className="bg-gradient-to-r from-digital to-water text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold font-display">Никитич</h3>
                    <p className="text-xs text-white/80">
                      Помощник по мастер-плану Твери
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Сообщения */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl p-3 ${
                        message.sender === "user"
                          ? "bg-digital text-white"
                          : "bg-white text-slate-800 shadow-sm border border-slate-200"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      
                      {/* Навигационные ссылки */}
                      {message.navigationLinks && message.navigationLinks.length > 0 && (
                        <div className="mt-3 space-y-2">
                          <p className="text-xs font-semibold text-slate-600 mb-2">
                            Перейти к разделу:
                          </p>
                          {message.navigationLinks.map((link, idx) => {
                            const sectionInfo = navigationSections.find(s => s.id === link.section);
                            return (
                              <button
                                key={idx}
                                onClick={() => scrollToSection(link.section)}
                                className="w-full text-left text-xs bg-digital/10 hover:bg-digital/20 text-digital px-3 py-2 rounded-lg transition-colors flex items-center gap-2 group"
                              >
                                <svg
                                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                  />
                                </svg>
                                <div className="flex-1">
                                  <div className="font-medium">{link.label}</div>
                                  {sectionInfo?.description && (
                                    <div className="text-xs opacity-70">{sectionInfo.description}</div>
                                  )}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white text-slate-800 shadow-sm border border-slate-200 rounded-2xl p-3">
                      <div className="flex gap-1">
                        <motion.div
                          className="w-2 h-2 bg-slate-400 rounded-full"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-slate-400 rounded-full"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-slate-400 rounded-full"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Быстрые вопросы */}
              {messages.length === 1 && (
                <div className="px-4 py-2 border-t border-slate-200 bg-white">
                  <p className="text-xs text-slate-500 mb-2">Быстрые вопросы:</p>
                  <div className="flex flex-wrap gap-2">
                    {exampleQuestions.map((q, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuickQuestion(q)}
                        className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-full transition-colors"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Поле ввода */}
              <div className="p-4 border-t border-slate-200 bg-white">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Спросите Никитича или попросите показать раздел..."
                    className="flex-1 px-4 py-2 border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-digital focus:border-transparent text-sm"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    className="bg-digital text-white rounded-full p-2 hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </button>
                </div>
                <p className="text-xs text-slate-400 mt-2 text-center">
                  Powered by RAG • PostgreSQL • AI
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

