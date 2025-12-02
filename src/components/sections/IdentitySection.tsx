// src/components/sections/IdentitySection.tsx
import React from "react";
import { motion } from "framer-motion";
import { PageSection } from "../layout/PageSection";
import { Heading } from "../ui/Typography";
import { InfoCard } from "../ui/InfoCard";

const identityData = [
  {
    title: "Предмет работ / Наименование работы",
    text: "Разработка мастер-плана Твери и агломерации на 2025–2035 годы и на период до 2045 года.",
  },
  {
    title: "Заказчик",
    text: "Отсутствует.",
  },
  {
    title: "Исполнитель",
    text: 'ООО «Центр недвижимости «2КАД» (2kad.ru).',
  },
  {
    title: "Место выполнения работ",
    text: "По месту нахождения Исполнителя и на территории города Твери.",
  },
  {
    title: "Территория проектирования (границы)",
    text: "Территория города Твери и прилегающие территории Калининского муниципального округа. Граница проектирования включает территорию не менее чем между федеральной трассой М11 и строящейся железной дорогой высокоскоростного магистрального сообщения (ВСМ) Москва–Санкт-Петербург.",
  },
  {
    title: "Проектные сроки (охват территории по доступности)",
    text: "До 2035 года – в пределах 15-минутной транспортной доступности; до 2045 года – в пределах 30-минутной транспортной доступности.",
  },
  {
    title: "Сроки реализации мастер-плана (расчётный срок)",
    text: "До 2035 года (расчётный срок) с перспективой до 2045 года.",
  },
  {
    title: "Основание для разработки",
    text: "Стратегия социально-экономического развития города Твери до 2035 года, Генеральный план города Твери (расчётный срок до 2039 года), а также необходимость заблаговременной подготовки к празднованию 900-летия города в 2035 году.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const IdentitySection: React.FC = () => {
  return (
    <PageSection id="identity" withBgWhite className="relative overflow-hidden">
      {/* Декоративное фоновое изображение */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=90&auto=format&fit=crop"
          alt="Архитектура"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/50 to-white" />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Heading as="h2" className="mb-6">
            Основные идентификационные данные мастер-плана
          </Heading>
        </motion.div>

      <motion.div
        className="grid gap-6 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {identityData.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <InfoCard title={item.title} text={item.text} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-8 border-t border-slate-200 pt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h3 className="mb-3 text-lg font-semibold font-display">
          Нормативная правовая база
        </h3>
        <p className="text-sm text-slate-700 leading-relaxed">
          Основные нормативные правовые акты, составляющие нормативную
          правовую базу выполнения работы (включая Градостроительный,
          Земельный, Водный, Жилищный кодексы Российской Федерации,
          федеральные законы об объектах культурного наследия, о
          государственной тайне и другие), указаны в Приложении 3 к
          техническому заданию на разработку мастер-плана.
        </p>
      </motion.div>
      </div>
    </PageSection>
  );
};

