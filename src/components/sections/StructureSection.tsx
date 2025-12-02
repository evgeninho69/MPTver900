// src/components/sections/StructureSection.tsx
import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { PageSection } from "../layout/PageSection";
import { Heading, Body, Caption } from "../ui/Typography";
import { Card } from "../ui/Card";

const directions = [
  { 
    id: "4.1", 
    title: "Мобильность", 
    tone: "water" as const,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop",
    description: "Транспортная инфраструктура и логистика"
  },
  { 
    id: "4.2", 
    title: "Застройка", 
    tone: "heritage" as const,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop",
    description: "Градостроительное развитие и планирование"
  },
  { 
    id: "4.3", 
    title: "Водно-зелёный каркас", 
    tone: "water" as const,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=90&auto=format&fit=crop",
    description: "Экология и зелёные пространства"
  },
  { 
    id: "4.4", 
    title: "Общественные пространства", 
    tone: "heritage" as const,
    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop",
    description: "Площади, парки и места для встреч"
  },
  { 
    id: "4.5", 
    title: "Инженерная инфраструктура", 
    tone: "digital" as const,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=90&auto=format&fit=crop",
    description: "Коммуникации и инженерные сети"
  },
  { 
    id: "4.6", 
    title: "Социальная сфера", 
    tone: "heritage" as const,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=90&auto=format&fit=crop",
    description: "Образование, здравоохранение, спорт"
  },
  { 
    id: "4.7", 
    title: "Производство и МСП", 
    tone: "digital" as const,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=90&auto=format&fit=crop",
    description: "Промышленность и малый бизнес"
  },
  { 
    id: "4.8", 
    title: "Туризм", 
    tone: "heritage" as const,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=90&auto=format&fit=crop",
    description: "Туристический потенциал и развитие"
  },
  { 
    id: "4.9", 
    title: "Культура", 
    tone: "heritage" as const,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=90&auto=format&fit=crop",
    description: "Культурное наследие и творчество"
  },
  { 
    id: "4.10", 
    title: "Цифровизация", 
    tone: "digital" as const,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=90&auto=format&fit=crop",
    description: "Умный город и цифровые технологии"
  },
];

const stage1Sections = [
  {
    id: "1",
    title: "Диагностика текущего состояния и тенденций",
    description: "Архитектурно-градостроительный, транспортный и социокультурный анализ",
    tone: "digital" as const,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=90&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Сценарии развития города и агломерации",
    description: "Формирование трёх сценариев развития и повышение пространственной жизнестойкости",
    tone: "water" as const,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=90&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Стратегическое видение и ключевые проекты",
    description: "SWOT-анализ, KPI, бренд города и идентичность Твери",
    tone: "heritage" as const,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop",
  },
];


const getToneClasses = (tone: "water" | "heritage" | "digital") => {
  const classes = {
    water: "border-water/30 bg-gradient-to-br from-teal-50/50 to-teal-100/30 hover:border-water hover:shadow-water/20",
    heritage: "border-heritage/30 bg-gradient-to-br from-amber-50/50 to-amber-100/30 hover:border-heritage hover:shadow-heritage/20",
    digital: "border-digital/30 bg-gradient-to-br from-blue-50/50 to-blue-100/30 hover:border-digital hover:shadow-digital/20",
  };
  return classes[tone];
};

export const StructureSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageSection id="structure" className="bg-gradient-to-b from-white to-[color:var(--color-bg)]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <Heading as="h2" className="mb-4">
          Структура и содержание мастер-плана
        </Heading>
        <Body className="mb-8 max-w-3xl">
          Мастер-план состоит из двух основных этапов, включающих анализ,
          стратегическое видение и детальные проектные решения по ключевым
          направлениям развития города.
        </Body>
      </motion.div>

      {/* Этап 1 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="mb-8 flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-digital to-water flex items-center justify-center text-white font-bold text-lg shadow-lg">
              1
            </div>
            <Heading as="h3" className="text-xl">
              Этап 1. Анализ существующего положения, сценарии развития, ключевые проекты
            </Heading>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stage1Sections.map((section, index) => (
            <motion.div
              key={section.id}
              id={`section-${section.id}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="cursor-pointer group scroll-mt-24"
              onClick={() => {
                if (section.id === "1") {
                  navigate("/diagnostics");
                } else if (section.id === "2") {
                  navigate("/scenarios");
                } else if (section.id === "3") {
                  navigate("/vision");
                }
              }}
            >
              <Card
                className={`${getToneClasses(section.tone)} transition-all duration-500 h-full flex flex-col overflow-hidden relative group/card`}
              >
                {/* Фоновое изображение */}
                <div className="absolute inset-0 opacity-20 group-hover/card:opacity-100 transition-opacity duration-700 z-0">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover scale-100 group-hover/card:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 group-hover/card:from-black/70 group-hover/card:via-black/30 group-hover/card:to-transparent transition-all duration-700" />
                </div>

                {/* Декоративные элементы */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover/card:opacity-30 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl" />
                </div>

                {/* Контент карточки */}
                <div className="relative z-10 flex flex-col justify-between h-full min-h-[320px] p-6">
                  <div>
                    <Caption className="mb-3 text-xs opacity-70 group-hover/card:text-white/90 transition-colors font-semibold">
                      Раздел {section.id}
                    </Caption>
                    <h4 className="text-2xl font-bold font-display text-slate-900 group-hover/card:text-white transition-colors mb-3 leading-tight">
                      {section.title}
                    </h4>
                    <p className="text-sm text-slate-600 group-hover/card:text-white/90 transition-colors opacity-0 group-hover/card:opacity-100 transform translate-y-2 group-hover/card:translate-y-0 transition-all duration-500 leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                  <div className="mt-6 text-sm font-medium text-slate-500 group-hover/card:text-white/90 transition-colors flex items-center gap-2">
                    <span>Подробнее</span>
                    <motion.span
                      className="inline-block text-lg"
                      animate={{ x: [0, 6, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>

                {/* Декоративная рамка при hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover/card:border-white/30 rounded-2xl transition-all duration-500 pointer-events-none" />
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Этап 2. Проектные решения - Направления развития (Раздел 4) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="mb-8 flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-heritage to-water flex items-center justify-center text-white font-bold text-lg shadow-lg">
              2
            </div>
            <Heading as="h3" className="text-xl">
              Этап 2. Проектные решения
            </Heading>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        </div>
        <div className="mb-8 flex items-center gap-4">
          <Heading as="h3" className="text-lg text-slate-700">
            Направления развития (Раздел 4)
          </Heading>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {directions.map((direction, index) => {
            const DirectionCard: React.FC<{ 
              direction: typeof directions[0];
              videoRef?: React.RefObject<HTMLVideoElement>;
            }> = ({ direction, videoRef }) => {
              const internalVideoRef = useRef<HTMLVideoElement>(null);
              const isMobilityCard = direction.id === "4.1";
              const actualVideoRef = videoRef || internalVideoRef;

              // Устанавливаем видео на паузу и в начало при монтировании и загрузке
              useEffect(() => {
                if (isMobilityCard && actualVideoRef.current) {
                  const video = actualVideoRef.current;
                  
                  // Функция для установки видео на паузу
                  const setVideoToPause = () => {
                    video.pause();
                    video.currentTime = 0;
                  };

                  // Устанавливаем на паузу сразу
                  setVideoToPause();

                  // Устанавливаем на паузу когда видео готово к воспроизведению
                  const handleCanPlay = () => {
                    setVideoToPause();
                  };

                  // Устанавливаем на паузу когда метаданные загружены
                  const handleLoadedMetadata = () => {
                    setVideoToPause();
                  };

                  video.addEventListener('canplay', handleCanPlay);
                  video.addEventListener('loadedmetadata', handleLoadedMetadata);

                  return () => {
                    video.removeEventListener('canplay', handleCanPlay);
                    video.removeEventListener('loadedmetadata', handleLoadedMetadata);
                  };
                }
              }, [isMobilityCard]);

              return (
                <div
                  className={`${getToneClasses(direction.tone)} transition-all duration-500 h-full flex flex-col overflow-hidden relative group/card rounded-2xl border border-[color:var(--color-border-subtle)] bg-[color:var(--color-card-bg)] p-4 shadow-sm`}
                >
                  {/* Фоновое изображение (только для карточек кроме Мобильность) */}
                  {!isMobilityCard && (
                    <div className="absolute inset-0 opacity-20 group-hover/card:opacity-100 transition-opacity duration-700 z-0">
                      <img
                        src={direction.image}
                        alt={direction.title}
                        className="w-full h-full object-cover scale-100 group-hover/card:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 group-hover/card:from-black/70 group-hover/card:via-black/30 group-hover/card:to-transparent transition-all duration-700" />
                    </div>
                  )}

                  {/* Видео для карточки Мобильность (всегда видно как стоп-кадр, на паузе по умолчанию) */}
                  {isMobilityCard && (
                    <div className="absolute inset-0 opacity-20 group-hover/card:opacity-100 transition-opacity duration-700 z-0">
                      <video
                        ref={actualVideoRef}
                        className="w-full h-full object-cover scale-100 group-hover/card:scale-110 transition-transform duration-700"
                        loop
                        muted
                        playsInline
                        preload="auto"
                        onLoadedMetadata={(e) => {
                          // Устанавливаем видео на паузу и в начало при загрузке метаданных
                          const video = e.currentTarget;
                          video.pause();
                          video.currentTime = 0;
                        }}
                        onCanPlay={(e) => {
                          // Устанавливаем видео на паузу когда готово к воспроизведению
                          const video = e.currentTarget;
                          video.pause();
                          video.currentTime = 0;
                        }}
                      >
                        <source src={`${import.meta.env.BASE_URL}video/mobile-card.mp4`} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 group-hover/card:from-black/70 group-hover/card:via-black/30 group-hover/card:to-transparent transition-all duration-700 pointer-events-none" />
                    </div>
                  )}

                  {/* Декоративные элементы */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover/card:opacity-30 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl" />
                  </div>

                  {/* Контент карточки */}
                  <div className="relative z-10 flex flex-col justify-between h-full min-h-[320px] p-6 pointer-events-none">
                    <div>
                      <Caption className="mb-3 text-xs opacity-70 group-hover/card:text-white/90 transition-colors font-semibold">
                        {direction.id}
                      </Caption>
                      <h4 className="text-2xl font-bold font-display text-slate-900 group-hover/card:text-white transition-colors mb-3 leading-tight">
                        {direction.title}
                      </h4>
                      <p className="text-sm text-slate-600 group-hover/card:text-white/90 transition-colors opacity-0 group-hover/card:opacity-100 transform translate-y-2 group-hover/card:translate-y-0 transition-all duration-500 leading-relaxed">
                        {direction.description}
                      </p>
                    </div>
                    <div className="mt-6 text-sm font-medium text-slate-500 group-hover/card:text-white/90 transition-colors flex items-center gap-2">
                      <span>Подробнее</span>
                      <motion.span
                        className="inline-block text-lg"
                        animate={{ x: [0, 6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>

                  {/* Декоративная рамка при hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover/card:border-white/30 rounded-2xl transition-all duration-500 pointer-events-none" />
                </div>
              );
            };

            const videoRef = useRef<HTMLVideoElement>(null);
            const isMobilityCard = direction.id === "4.1";

            // Обработчики для видео карточки Мобильность
            const handleMouseEnter = () => {
              if (isMobilityCard && videoRef.current) {
                const video = videoRef.current;
                console.log("Mouse enter - попытка воспроизвести видео", {
                  readyState: video.readyState,
                  paused: video.paused,
                  networkState: video.networkState
                });
                
                // Функция для воспроизведения
                const tryPlay = () => {
                  if (video.paused) {
                    console.log("Попытка воспроизвести, readyState:", video.readyState);
                    const playPromise = video.play();
                    if (playPromise !== undefined) {
                      playPromise
                        .then(() => {
                          console.log("✅ Видео успешно воспроизводится, paused:", video.paused, "currentTime:", video.currentTime);
                        })
                        .catch((error) => {
                          console.error("❌ Ошибка воспроизведения видео:", error.name, error.message);
                        });
                    }
                  } else {
                    console.log("Видео уже воспроизводится");
                  }
                };

                // Проверяем готовность видео
                // readyState: 0=HAVE_NOTHING, 1=HAVE_METADATA, 2=HAVE_CURRENT_DATA, 3=HAVE_FUTURE_DATA, 4=HAVE_ENOUGH_DATA
                if (video.readyState >= 3) {
                  // Видео готово к воспроизведению
                  tryPlay();
                } else if (video.readyState >= 2) {
                  // Есть текущие данные, пробуем воспроизвести
                  tryPlay();
                } else {
                  // Видео еще не загружено, ждем загрузки
                  console.log("Видео еще не готово (readyState:", video.readyState, "), ждем загрузки...");
                  const handleCanPlay = () => {
                    console.log("Видео готово к воспроизведению (canplay)");
                    tryPlay();
                  };
                  const handleCanPlayThrough = () => {
                    console.log("Видео полностью загружено (canplaythrough)");
                    tryPlay();
                  };
                  
                  video.addEventListener('canplay', handleCanPlay, { once: true });
                  video.addEventListener('canplaythrough', handleCanPlayThrough, { once: true });
                  
                  // Принудительно загружаем видео
                  if (video.readyState < 1) {
                    video.load();
                  }
                }
              }
            };

            const handleMouseLeave = () => {
              if (isMobilityCard && videoRef.current) {
                const video = videoRef.current;
                console.log("Mouse leave - остановка видео");
                video.pause();
                video.currentTime = 0;
              }
            };

            return (
              <motion.div
                key={direction.id}
                id={direction.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.03, y: -8 }}
                className="cursor-pointer group scroll-mt-24"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => {
                  if (direction.id === "4.1") {
                    navigate("/mobility");
                  } else if (direction.id === "4.2") {
                    navigate("/development");
                  } else if (direction.id === "4.3") {
                    navigate("/ecology");
                  } else if (direction.id === "4.4") {
                    navigate("/public-spaces");
                  } else if (direction.id === "4.5") {
                    navigate("/infrastructure");
                  } else if (direction.id === "4.6") {
                    navigate("/social");
                  } else if (direction.id === "4.7") {
                    navigate("/industry");
                  } else if (direction.id === "4.8") {
                    navigate("/tourism");
                  } else if (direction.id === "4.9") {
                    navigate("/culture");
                  } else if (direction.id === "4.10") {
                    navigate("/digitalization");
                  }
                }}
              >
                <DirectionCard direction={direction} videoRef={videoRef} />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </PageSection>
  );
};

