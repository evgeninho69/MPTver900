// src/components/sections/HeroSection.tsx
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { PageSection } from "../layout/PageSection";
import { Heading, Body, Caption } from "../ui/Typography";
import { Tag } from "../ui/Tag";

const tags = [
  { label: "Горизонт: до 2035 / 2045", tone: "digital" as const },
  { label: "Тверь и агломерация", tone: "heritage" as const },
  { label: "Умный город", tone: "digital" as const },
  { label: "Водно-зелёный каркас", tone: "water" as const },
  { label: "Мобильность и жизнестойкость", tone: "water" as const },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Попытка воспроизвести видео при загрузке
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.log("Автовоспроизведение видео заблокировано:", error);
      });
    }
  }, []);

  return (
    <PageSection id="hero" className="relative overflow-hidden lg:py-24 min-h-screen flex items-center">
      {/* Фоновое видео */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          style={{ 
            opacity: 0.4,
            filter: 'brightness(0.85) contrast(1.1)',
          }}
          onError={(e) => {
            console.error("Ошибка загрузки видео:", e);
          }}
        >
          <source src={`${import.meta.env.BASE_URL}video/hero-background.mp4`} type="video/mp4" />
        </video>
        {/* Легкое затемнение для лучшей читаемости текста */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Фоновый SVG-грид (трехлучевая звезда) с анимацией */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-10"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 1200 1200"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-water)" stopOpacity="0.3" />
              <stop offset="50%" stopColor="var(--color-digital)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="var(--color-heritage)" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <g stroke="url(#gridGradient)" strokeWidth="1" transform="translate(600, 600)">
            {/* Вертикальная линия */}
            <line x1="0" y1="-600" x2="0" y2="600" />
            {/* Горизонтальная линия */}
            <line x1="-600" y1="0" x2="600" y2="0" />
            {/* Диагональная линия */}
            <line x1="-600" y1="600" x2="600" y2="-600" />
            {/* Дополнительные радиальные линии для глубины */}
            <line x1="-300" y1="-600" x2="300" y2="600" />
            <line x1="300" y1="-600" x2="-300" y2="600" />
          </g>
        </svg>
      </motion.div>

      {/* Водный градиент внизу с анимацией */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-water/20 via-water/10 to-transparent pointer-events-none"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="relative z-10 max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Caption className="text-white font-semibold drop-shadow-lg shadow-black/50 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full inline-block">
            Стратегический мастер-план города Твери и агломерации
          </Caption>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Heading as="h1" className="mt-4 text-heritage max-w-4xl drop-shadow-lg shadow-black/30">
            Тверь – соединяя столицы, создавая своё
          </Heading>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Body className="mt-4 max-w-3xl text-base md:text-lg text-white drop-shadow-md shadow-black/40 font-medium">
            Разработка мастер-плана Твери и агломерации на 2025–2035 годы
            и на период до 2045 года. Комплексный документ, объединяющий
            социально-экономическое и пространственное развитие города
            и прилегающих территорий Калининского муниципального округа с фокусом
            на жизнестойкость, «умный город» и подготовку к 900-летию Твери.
          </Body>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-6 flex flex-wrap gap-2"
        >
          {tags.map((tag, index) => (
            <motion.div
              key={tag.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
            >
              <Tag tone={tag.tone}>{tag.label}</Tag>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-8"
        >
          <motion.div
            className="h-1 w-40 rounded-full bg-gradient-to-r from-water via-digital to-heritage"
            animate={{
              scaleX: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </PageSection>
  );
};

