// src/pages/VisionPage.tsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { PageSection } from "../components/layout/PageSection";
import { Heading, Body, Caption } from "../components/ui/Typography";
import { Card } from "../components/ui/Card";
import { Tag } from "../components/ui/Tag";
import { Button } from "../components/ui/Button";

// SWOT-анализ
const swotData = {
  strengths: [
    { id: "S1", title: "Выгодное геоположение и логистика", description: "Транспортный коридор Москва–Санкт-Петербург, Волга, ж/д сообщение" },
    { id: "S2", title: "Историко-культурное ядро", description: "500+ объектов культурного наследия, уникальная планировка XIX века" },
    { id: "S3", title: "Научный и образовательный потенциал", description: "ТвГУ, ТвГТУ, ТвГМУ, подготовка квалифицированных кадров" },
    { id: "S4", title: "Компактность и уют города", description: "Привлекательно для молодых семей и творческих профессионалов" },
    { id: "S5", title: "Активное развитие IT-сектора", description: "Технопарк «Цифровая Тверь», 18 IT-компаний, растущий спрос" },
  ],
  weaknesses: [
    { id: "W1", title: "Критический износ сетей ЖКХ", description: "Канализация: 50%+ аварийного состояния, теплоснабжение: 84.1%" },
    { id: "W2", title: "Транспортный кризис", description: "Отсутствие электротранспорта, перегруженность дорог" },
    { id: "W3", title: "Отток квалифицированных кадров", description: "Ежегодная потеря 5–7% молодежи 18–30 лет" },
    { id: "W4", title: "Дефицит образовательных учреждений", description: "Дефицит 10–12 тыс. мест в школах, 3–4 тыс. в детских садах" },
    { id: "W5", title: "Критическое загрязнение Волги", description: "Непрерывные выливы сточных вод, низкая эффективность нацпроекта" },
    { id: "W6", title: "Отсутствие Дизайн-кода", description: "Визуальный мусор, несогласованная архитектура" },
  ],
  opportunities: [
    { id: "O1", title: "Федеральная поддержка и 900-летие", description: "Целевые программы, гранты, софинансирование к юбилею" },
    { id: "O2", title: "Цифровизация и «Смарт-город»", description: "90% действий через ИИ-агентов к 2030, пилотные проекты" },
    { id: "O3", title: "Нацпроект «Семья»", description: "Субсидирование ипотеки, гранты на жилье, поддержка многодетных" },
    { id: "O4", title: "Развитие IT-сектора", description: "Расширение технопарка до 50–100 компаний, IT-инкубаторы" },
    { id: "O5", title: "Импортозамещение", description: "14 млрд рублей инвестиций, 1000+ новых рабочих мест" },
    { id: "O6", title: "Развитие туризма", description: "500+ ОКН, рост на 49% в 2025, потенциал 700 тыс. туристов к 2035" },
  ],
  threats: [
    { id: "T1", title: "Конкуренция мегаполисов", description: "Москва и СПб привлекают инвестиции и таланты" },
    { id: "T2", title: "Финансовые риски", description: "Мультимиллиардные проекты, риски изменения бюджетной политики" },
    { id: "T3", title: "Экологический кризис Волги", description: "Санкции на развитие, ухудшение здоровья, снижение туризма" },
    { id: "T4", title: "Геополитическая нестабильность", description: "Влияние на инвестиции, отток кадров, замедление инноваций" },
    { id: "T5", title: "Климатические риски", description: "Наводнения, засухи, влияние на инфраструктуру" },
  ],
};

// KPI по стратегическим целям
const kpiData = {
  sc1: [
    { label: "Население (тыс. чел)", base: 420.5, current: 425, target: "450–460", unit: "тыс.", status: "warning" },
    { label: "Темп прироста (% годовых)", base: 0.5, current: 0.75, target: "0.7–0.8", unit: "%", status: "good" },
    { label: "Молодежь 25–40 лет (%)", base: 22, current: 21, target: "25", unit: "%", status: "warning" },
    { label: "Многодетные семьи (тыс.)", base: 12, current: 16.3, target: "20", unit: "тыс.", status: "good" },
    { label: "Индекс качества жизни", base: 65, current: 68, target: "78", unit: "баллов", status: "warning" },
    { label: "Удовлетворенность жителей", base: 62, current: 65, target: "75", unit: "%", status: "warning" },
  ],
  sc2: [
    { label: "Износ теплосетей", base: 84.1, current: 84.1, target: "25", unit: "%", status: "critical" },
    { label: "Качество очистки сточных вод", base: 75, current: 60, target: "98", unit: "%", status: "critical" },
    { label: "Аварийные выливы в Волгу", base: 10, current: 18, target: "0", unit: "случаев/год", status: "critical" },
    { label: "Дороги в нормативе", base: 70, current: 72, target: "85", unit: "%", status: "warning" },
    { label: "Велодорожки и пешеходные зоны", base: 45, current: 52, target: "150", unit: "км", status: "warning" },
    { label: "Зеленые пространства", base: 320, current: 340, target: "400", unit: "га", status: "good" },
    { label: "Школы без 2-й смены", base: 72, current: 85, target: "100", unit: "%", status: "good" },
  ],
  sc3: [
    { label: "Доля инновационной продукции", base: 20.0, current: 20.0, target: "30", unit: "%", status: "warning" },
    { label: "Новые рабочие места", base: 0, current: 5, target: "18", unit: "тыс. за период", status: "warning" },
    { label: "IT-компании", base: 8, current: 18, target: "100", unit: "шт.", status: "good" },
    { label: "Средняя зарплата (% от столичной)", base: 60, current: 62, target: "68", unit: "%", status: "warning" },
    { label: "Оборот бизнеса", base: 85, current: 92, target: "150", unit: "млрд руб/год", status: "warning" },
    { label: "Туристы в год", base: 200, current: 220, target: "700", unit: "тыс.", status: "warning" },
  ],
  sc4: [
    { label: "Госуслуги через цифровые каналы", base: 30, current: 50, target: "85", unit: "%", status: "good" },
    { label: "ИИ-агенты для услуг ЖКХ", base: 0, current: 1, target: "100", unit: "%", status: "warning" },
    { label: "Мониторинг инженерных сетей", base: 0, current: 1, target: "100", unit: "%", status: "warning" },
  ],
  sc5: [
    { label: "ОКН отреставрированных/адаптированных", base: 10, current: 15, target: "50", unit: "%", status: "warning" },
    { label: "Дизайн-код разработан", base: 0, current: 0, target: "100", unit: "%", status: "critical" },
    { label: "Стартапы в экосистеме", base: 5, current: 12, target: "50", unit: "шт.", status: "good" },
  ],
  sc6: [
    { label: "Налоговые поступления", base: 8, current: 9.2, target: "14", unit: "млрд руб/год", status: "warning" },
    { label: "Привлеченные инвестиции", base: 2.5, current: 3.0, target: "6", unit: "млрд руб/год", status: "warning" },
    { label: "Бюджет на развитие", base: 18, current: 20, target: "25", unit: "%", status: "good" },
  ],
};

// Ключевые проекты с актуализированными данными
const keyProjects = [
  {
    id: 1,
    name: "Строительство Западного моста через Волгу",
    category: "Инфраструктура",
    status: "active",
    statusText: "🟢 АКТИВНЫЙ ПРОЕКТ",
    goal: "Усиление связности города, разгрузка центра от 15–20% транспортного потока",
    cost: "20.2 млрд руб.",
    costOriginal: "10 млрд руб.",
    completion: "2028",
    progress: 65,
    description: "Строительство активно ведется, подъезд заасфальтирован, идет укладка гидроизоляции",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Система скоростного автобусного транспорта (БУС)",
    category: "Транспорт",
    status: "new",
    statusText: "🟡 НОВЫЙ ПРИОРИТЕТНЫЙ ПРОЕКТ",
    goal: "Замена трамвая на БУС: 44 км линий, 50–55 остановок, сокращение времени на 30–40%",
    cost: "18–22 млрд руб.",
    costOriginal: "65 млрд руб. (трамвай)",
    completion: "2032–2033",
    progress: 5,
    description: "Более реалистичное решение: быстрее (5 лет vs 10+), дешевле (20 млрд vs 65), гибче",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&q=90&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Реконструкция ТПУ «Тверь-Центральный»",
    category: "Инфраструктура",
    status: "partial",
    statusText: "🟡 ЧАСТИЧНО РЕАЛИЗУЕТСЯ",
    goal: "Единый транспортно-пересадочный узел с принципом «сухие ноги»",
    cost: "8–10 млрд руб.",
    completion: "2030",
    progress: 30,
    description: "Горбатый мост в процессе реконструкции, Комсомольская площадь в проектировании",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Развитие IT-экосистемы «Цифровая Тверь»",
    category: "Экономика / Инновации",
    status: "active",
    statusText: "🟢 АКТИВНЫЙ ПРОЕКТ",
    goal: "100+ IT-компаний, 2000+ специалистов, валовая добавленная стоимость 5–8 млрд руб/год",
    cost: "5–7 млрд руб.",
    completion: "2035",
    progress: 18,
    description: "18 компаний работают, требуется расширение в 2.5–3 раза",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=90&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Промышленные парки и импортозамещение",
    category: "Экономика",
    status: "active",
    statusText: "🟢 АКТИВНЫЙ ПРОЕКТ",
    goal: "2000+ новых рабочих мест, 80–100 млрд рублей инвестиций",
    cost: "80–100 млрд руб.",
    completion: "2035",
    progress: 20,
    description: "Технопарк Торжок и Лихославль в реализации, планируются Боровлево, Раслово, Эммаусс",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Образовательный и научный кластер",
    category: "Образование",
    status: "reformulated",
    statusText: "🟡 ПЕРЕФОРМУЛИРУЕТСЯ",
    goal: "Интеграция университетов в экосистему инноваций, 50–60 стартапов к 2035",
    cost: "5–6 млрд руб.",
    completion: "2035",
    progress: 10,
    description: "Вместо нового кампуса — интеграция существующих ВУЗов в единую экосистему",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=90&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Жилищная программа «Тверь для своих»",
    category: "Жилищное строительство",
    status: "new",
    statusText: "🟢 НОВЫЙ ПРИОРИТЕТНЫЙ ПРОЕКТ",
    goal: "10,000+ молодых семей, 300–400 тыс. м² жилья для молодежи",
    cost: "25–30 млрд руб.",
    completion: "2035",
    progress: 0,
    description: "Субсидирование ипотеки, гранты для многодетных, налоговые льготы",
    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Программа благоустройства и зеленых пространств",
    category: "Благоустройство",
    status: "active",
    statusText: "🟢 ПРОДОЛЖЕНИЕ И РАСШИРЕНИЕ",
    goal: "30+ парков, 400+ га зеленых пространств, 150+ км велодорожек",
    cost: "8–10 млрд руб.",
    completion: "2035",
    progress: 45,
    description: "14 парков создано за 7 лет, требуется расширение на периферию",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=90&auto=format&fit=crop",
  },
  {
    id: 9,
    name: "«Волга-2030. Инженерная защита»",
    category: "Экология / ЖКХ",
    status: "critical",
    statusText: "🔴 КРИТИЧЕСКИ НЕОБХОДИМЫЙ",
    goal: "Ноль аварийных выливов, качество очистки 98%, система мониторинга 100%",
    cost: "35–40 млрд руб.",
    completion: "2035",
    progress: 5,
    description: "КРИТИЧЕСКИЙ ПРИОРИТЕТ: реконструкция канализации, модернизация очистных, система контроля",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=90&auto=format&fit=crop",
  },
  {
    id: 10,
    name: "«Смарт-Тверь: Цифровой город 2030»",
    category: "Цифровизация",
    status: "new",
    statusText: "🟡 НОВЫЙ ПРОЕКТ",
    goal: "85% услуг через цифровые каналы, ИИ-диагностика 90% сетей, 30% сокращение времени ремонта",
    cost: "8–10 млрд руб.",
    completion: "2030",
    progress: 2,
    description: "Платформа управления ЖКХ с ИИ, цифровой реестр сетей, портал услуг",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=90&auto=format&fit=crop",
  },
  {
    id: 11,
    name: "Развитие культурного туризма",
    category: "Культура / Туризм",
    status: "active",
    statusText: "🟢 АКТИВНЫЙ ПРОЕКТ",
    goal: "700 тыс. туристов в год, доход 3–5 млрд руб/год, 2000–2500 новых рабочих мест",
    cost: "6–8 млрд руб.",
    completion: "2035",
    progress: 25,
    description: "Восстановление ОКН, туристические маршруты, событийный календарь",
    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop",
  },
  {
    id: 12,
    name: "«Тверь-бизнес Хаб» (переформулированный)",
    category: "Экономика",
    status: "reformulated",
    statusText: "🟡 ПЕРЕФОРМУЛИРОВАТЬ",
    goal: "80–120 тыс. м² вместо 180 тыс., фокус на IT и креативные пространства",
    cost: "3–4 млрд руб.",
    costOriginal: "7.5 млрд руб.",
    completion: "2028–2032",
    progress: 0,
    description: "Децентрализованная сеть бизнес-хабов вместо одного большого центра",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop",
  },
];

// Финансовая стратегия
const financialData = {
  total: { min: 147, max: 169, average: 158 },
  byDirection: [
    { name: "Инфраструктура", amount: 50, color: "heritage", priority: "high" },
    { name: "ЖКХ и экология", amount: 37.5, color: "water", priority: "critical" },
    { name: "Жилищное строительство", amount: 27.5, color: "digital", priority: "high" },
    { name: "IT и цифровизация", amount: 14, color: "digital", priority: "medium" },
    { name: "Образование и наука", amount: 13, color: "heritage", priority: "medium" },
    { name: "Благоустройство", amount: 9, color: "water", priority: "medium" },
    { name: "Культура и туризм", amount: 4.5, color: "heritage", priority: "medium" },
    { name: "Медицина", amount: 4, color: "water", priority: "low" },
  ],
  bySource: [
    { name: "Федеральные нацпроекты", amount: 63.2, percent: 40, color: "digital" },
    { name: "Частные инвестиции", amount: 39.5, percent: 25, color: "heritage" },
    { name: "Региональный бюджет", amount: 31.6, percent: 20, color: "water" },
    { name: "Муниципальный бюджет", amount: 15.8, percent: 10, color: "digital" },
    { name: "Гранты и программы", amount: 7.9, percent: 5, color: "heritage" },
  ],
  byPeriod: [
    { period: "2025–2027", amount: 59, label: "Начальная фаза" },
    { period: "2028–2030", amount: 54.5, label: "Основная фаза" },
    { period: "2031–2035", amount: 44.5, label: "Завершающая фаза" },
  ],
};

// Бренд и дизайн-код
const brandData = {
  main: {
    name: "Исток Великой Реки",
    philosophy: "Тверь — город, где начинается путь. Город открытий, инноваций и возможностей.",
    symbol: "Трезубец или три волны",
    colors: ["Бордовый", "Волжский синий", "Золотисто-оранжевый"],
  },
  subBrands: [
    { name: "Цифровая Тверь", audience: "IT-компании, стартапы", focus: "Технологии, инновации", new: true },
    { name: "Тверской козел", audience: "МСП, предприятия", focus: "Предпринимательство, упорство", new: false },
    { name: "Путь Афанасия", audience: "Туристы, путешественники", focus: "Туризм, открытия, история", new: false },
    { name: "Тверь Шансонная", audience: "Культурная публика", focus: "Культура, искусство", new: false },
    { name: "Тверь для своих", audience: "Молодые семьи, многодетные", focus: "Качество жизни, доступное жилье", new: true },
  ],
  designCode: {
    status: "ТРЕБУЕТ РАЗРАБОТКИ",
    phases: [
      { phase: "Разработка", period: "2026–2027", budget: "100–150 млн руб." },
      { phase: "Пилот", period: "2027–2028", budget: "200–300 млн руб." },
      { phase: "Полная реализация", period: "2028–2035", budget: "500–800 млн руб." },
    ],
    totalBudget: "800 млн – 1 млрд руб.",
  },
};

export const VisionPage: React.FC = () => {
  const navigate = useNavigate();

  // Функция для расчета прогресса KPI
  const calculateProgress = (current: number, target: string | number, base: number) => {
    const targetNum = typeof target === "string" ? parseFloat(target.split("–")[0]) : target;
    const range = targetNum - base;
    const currentRange = current - base;
    return Math.max(0, Math.min(100, (currentRange / range) * 100));
  };

  // Функция для получения цвета статуса
  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical": return "text-red-600 bg-red-50 border-red-200";
      case "warning": return "text-orange-600 bg-orange-50 border-orange-200";
      case "good": return "text-green-600 bg-green-50 border-green-200";
      default: return "text-slate-600 bg-slate-50 border-slate-200";
    }
  };

  // Функция для получения цвета статуса проекта
  const getProjectStatusColor = (status: string) => {
    switch (status) {
      case "active": return "from-green-500 to-green-600";
      case "new": return "from-blue-500 to-blue-600";
      case "partial": return "from-yellow-500 to-yellow-600";
      case "reformulated": return "from-orange-500 to-orange-600";
      case "critical": return "from-red-500 to-red-600";
      default: return "from-slate-500 to-slate-600";
    }
  };

  return (
    <div className="min-h-screen bg-[color:var(--color-bg)]">
      <Header />
      
      {/* Hero секция */}
      <PageSection className="relative overflow-hidden min-h-[60vh] flex items-center bg-gradient-to-br from-heritage/10 via-digital/5 to-water/10">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=90&auto=format&fit=crop"
            alt="Стратегическое видение"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60" />
        <div className="relative z-10 max-w-5xl w-full">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6"
          >
            ← Назад к структуре
          </Button>
          <Caption className="text-heritage font-semibold mb-4">
            Раздел 3 • Актуализированная редакция (декабрь 2025)
          </Caption>
          <Heading as="h1" className="text-4xl md:text-5xl lg:text-6xl mb-6 text-slate-900">
            Стратегическое видение и ключевые проекты
          </Heading>
          <Body className="text-lg text-slate-700 max-w-3xl">
            Синтез стратегического анализа, определяющий желаемый образ будущего города Твери к 2035 году,
            фокусируясь на ключевых приоритетах, измеримых показателях и якорных проектах для достижения{" "}
            <strong className="text-digital">устойчивого социально-экономического развития</strong>.
          </Body>
        </div>
      </PageSection>

      {/* Стратегическое видение */}
      <PageSection className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-gradient-to-b from-heritage to-digital rounded-full" />
            <div>
              <Caption className="text-heritage mb-2">Раздел I</Caption>
              <Heading as="h2" className="text-3xl">
                Стратегическое видение и философия развития
              </Heading>
            </div>
          </div>

          {/* Актуализированная цель */}
          <Card className="bg-gradient-to-br from-digital/20 via-water/10 to-heritage/20 border-2 border-digital/30 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-digital via-water to-heritage flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                🎯
              </div>
              <div>
                <Heading as="h3" className="text-2xl mb-2">Актуализированная стратегическая цель</Heading>
                <Body className="text-slate-600">Переосмысление на основе реальности 2025 года</Body>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card className="bg-white/60">
                <Body className="text-xs text-slate-500 mb-2">Первоначальная цель (2020)</Body>
                <Body className="text-sm text-slate-700 italic">
                  "Обеспечение прорывного развития экономики к 2035 году"
                </Body>
              </Card>
              <Card className="bg-white/60 border-2 border-digital/30">
                <Body className="text-xs text-digital font-semibold mb-2">Актуализированная цель (2025)</Body>
                <Body className="text-sm text-slate-900 font-semibold">
                  "Обеспечение устойчивого социально-экономического развития через создание привлекательной среды 
                  для жизни 450–460 тыс. жителей, где качество жизни, инновации и экологическое благополучие 
                  являются основными ориентирами развития"
                </Body>
              </Card>
            </div>

            <Body className="text-lg text-slate-700 mb-6">
              К 2035 году Тверь должна стать <strong className="text-digital">городом качественной жизни</strong>, 
              где ценятся люди, идеи и окружающая среда. Это не город рекордов, а город, где хочется жить, работать и создавать будущее.
            </Body>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-white/80">
                <div className="text-3xl mb-2">👥</div>
                <Heading as="h3" className="text-lg mb-2">Город для людей</Heading>
                <Body className="text-sm text-slate-700">
                  Привлекательная среда для 450–460 тыс. жителей с высоким качеством жизни
                </Body>
              </Card>
              <Card className="bg-white/80">
                <div className="text-3xl mb-2">💡</div>
                <Heading as="h3" className="text-lg mb-2">Инновации</Heading>
                <Body className="text-sm text-slate-700">
                  IT-экосистема, научные кластеры, цифровизация как основа развития
                </Body>
              </Card>
              <Card className="bg-white/80">
                <div className="text-3xl mb-2">🌊</div>
                <Heading as="h3" className="text-lg mb-2">Экология</Heading>
                <Body className="text-sm text-slate-700">
                  Экологическое благополучие как критический приоритет развития
                </Body>
              </Card>
              <Card className="bg-white/80">
                <div className="text-3xl mb-2">🏛️</div>
                <Heading as="h3" className="text-lg mb-2">Управление</Heading>
                <Body className="text-sm text-slate-700">
                  Современные технологии муниципального управления и цифровые сервисы
                </Body>
              </Card>
            </div>
          </Card>

          {/* Переосмысление принципов */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-heritage/5 to-heritage/10 border-heritage/30">
              <Heading as="h3" className="text-xl mb-3">1. От роста к качеству</Heading>
              <Body className="text-sm text-slate-700 mb-3">
                Вместо стремления к 500 тыс. — фокус на <strong>удержании талантов</strong> и 
                <strong> повышении качества жизни</strong> для 450–460 тыс. жителей.
              </Body>
              <div className="flex items-center gap-2">
                <div className="text-2xl font-bold text-heritage">450–460</div>
                <Body className="text-xs text-slate-600">тыс. к 2035</Body>
              </div>
            </Card>
            <Card className="bg-gradient-to-br from-digital/5 to-digital/10 border-digital/30">
              <Heading as="h3" className="text-xl mb-3">2. От прорыва к модернизации</Heading>
              <Body className="text-sm text-slate-700 mb-3">
                Модернизация существующего города через <strong>высокие технологии, инновации, цифровизацию</strong> 
                и <strong>импортозамещение</strong>.
              </Body>
              <div className="flex items-center gap-2">
                <div className="text-2xl font-bold text-digital">100+</div>
                <Body className="text-xs text-slate-600">IT-компаний</Body>
              </div>
            </Card>
            <Card className="bg-gradient-to-br from-water/5 to-water/10 border-water/30">
              <Heading as="h3" className="text-xl mb-3">3. Экология как приоритет</Heading>
              <Body className="text-sm text-slate-700 mb-3">
                Экологическое оздоровление Волги — <strong className="text-red-600">критический приоритет</strong>, 
                а не второстепенная задача.
              </Body>
              <div className="flex items-center gap-2">
                <div className="text-2xl font-bold text-water">0</div>
                <Body className="text-xs text-slate-600">выливов к 2035</Body>
              </div>
            </Card>
          </div>
        </motion.div>
      </PageSection>

      {/* SWOT-анализ */}
      <PageSection className="bg-gradient-to-b from-white to-[color:var(--color-bg)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-gradient-to-b from-digital to-heritage rounded-full" />
            <div>
              <Caption className="text-digital mb-2">Раздел II</Caption>
              <Heading as="h2" className="text-3xl">
                SWOT-анализ развития города Твери (актуализированный)
              </Heading>
            </div>
          </div>

          {/* SWOT-матрица */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Сильные стороны */}
            <Card className="bg-gradient-to-br from-green-50 to-green-100/50 border-2 border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xl">
                  S
                </div>
                <Heading as="h3" className="text-2xl text-green-800">Сильные стороны</Heading>
              </div>
              <div className="space-y-3">
                {swotData.strengths.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/80 rounded-lg p-3 border border-green-200"
                  >
                    <Body className="font-semibold text-green-900 text-sm mb-1">{item.title}</Body>
                    <Body className="text-xs text-slate-600">{item.description}</Body>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Слабые стороны */}
            <Card className="bg-gradient-to-br from-red-50 to-red-100/50 border-2 border-red-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-xl">
                  W
                </div>
                <Heading as="h3" className="text-2xl text-red-800">Слабые стороны</Heading>
              </div>
              <div className="space-y-3">
                {swotData.weaknesses.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/80 rounded-lg p-3 border border-red-200"
                  >
                    <Body className="font-semibold text-red-900 text-sm mb-1">{item.title}</Body>
                    <Body className="text-xs text-slate-600">{item.description}</Body>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Возможности */}
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl">
                  O
                </div>
                <Heading as="h3" className="text-2xl text-blue-800">Возможности</Heading>
              </div>
              <div className="space-y-3">
                {swotData.opportunities.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/80 rounded-lg p-3 border border-blue-200"
                  >
                    <Body className="font-semibold text-blue-900 text-sm mb-1">{item.title}</Body>
                    <Body className="text-xs text-slate-600">{item.description}</Body>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Угрозы */}
            <Card className="bg-gradient-to-br from-orange-50 to-orange-100/50 border-2 border-orange-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xl">
                  T
                </div>
                <Heading as="h3" className="text-2xl text-orange-800">Угрозы</Heading>
              </div>
              <div className="space-y-3">
                {swotData.threats.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/80 rounded-lg p-3 border border-orange-200"
                  >
                    <Body className="font-semibold text-orange-900 text-sm mb-1">{item.title}</Body>
                    <Body className="text-xs text-slate-600">{item.description}</Body>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </motion.div>
      </PageSection>

      {/* KPI по стратегическим целям */}
      <PageSection className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-gradient-to-b from-heritage to-water rounded-full" />
            <div>
              <Caption className="text-heritage mb-2">Раздел III</Caption>
              <Heading as="h2" className="text-3xl">
                Ключевые показатели эффективности (KPI) 2035
              </Heading>
            </div>
          </div>

          {/* СЦ-1: Человеческий капитал */}
          <div className="mb-12">
            <Heading as="h3" className="text-2xl mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-heritage text-white flex items-center justify-center font-bold">1</span>
              СЦ-1: Человеческий капитал и демография
            </Heading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {kpiData.sc1.map((kpi, index) => {
                const progress = calculateProgress(kpi.current, kpi.target, kpi.base);
                const statusColor = getStatusColor(kpi.status);
                
                return (
                  <motion.div
                    key={kpi.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className={`border-2 ${statusColor.split(" ")[2]}`}>
                      <Body className="text-xs text-slate-600 mb-2">{kpi.label}</Body>
                      <div className="flex items-baseline gap-2 mb-3">
                        <Heading as="h3" className={`text-3xl font-bold ${statusColor.split(" ")[0]} kpi-numeric`}>
                          {kpi.current}
                        </Heading>
                        <Body className="text-sm text-slate-500">/ {kpi.target} {kpi.unit}</Body>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className={`h-full ${statusColor.split(" ")[0].replace("text-", "bg-")} rounded-full`}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-slate-500 mt-2">
                        <span>Базовое: {kpi.base}</span>
                        <span>Прогресс: {Math.round(progress)}%</span>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* СЦ-2: Пространство */}
          <div className="mb-12">
            <Heading as="h3" className="text-2xl mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-water text-white flex items-center justify-center font-bold">2</span>
              СЦ-2: Пространство и инфраструктура
            </Heading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {kpiData.sc2.map((kpi, index) => {
                const progress = calculateProgress(kpi.current, kpi.target, kpi.base);
                const statusColor = getStatusColor(kpi.status);
                
                return (
                  <motion.div
                    key={kpi.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className={`border-2 ${statusColor.split(" ")[2]}`}>
                      <Body className="text-xs text-slate-600 mb-2">{kpi.label}</Body>
                      <div className="flex items-baseline gap-2 mb-3">
                        <Heading as="h3" className={`text-3xl font-bold ${statusColor.split(" ")[0]} kpi-numeric`}>
                          {kpi.current}
                        </Heading>
                        <Body className="text-sm text-slate-500">/ {kpi.target} {kpi.unit}</Body>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className={`h-full ${statusColor.split(" ")[0].replace("text-", "bg-")} rounded-full`}
                        />
                      </div>
                      {kpi.status === "critical" && (
                        <Body className="text-xs text-red-600 font-semibold mt-2">🔴 КРИТИЧЕСКИЙ ПРИОРИТЕТ</Body>
                      )}
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* СЦ-3: Экономика */}
          <div className="mb-12">
            <Heading as="h3" className="text-2xl mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-digital text-white flex items-center justify-center font-bold">3</span>
              СЦ-3: Экономика и рынки
            </Heading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {kpiData.sc3.map((kpi, index) => {
                const progress = calculateProgress(kpi.current, kpi.target, kpi.base);
                const statusColor = getStatusColor(kpi.status);
                
                return (
                  <motion.div
                    key={kpi.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className={`border-2 ${statusColor.split(" ")[2]}`}>
                      <Body className="text-xs text-slate-600 mb-2">{kpi.label}</Body>
                      <div className="flex items-baseline gap-2 mb-3">
                        <Heading as="h3" className={`text-3xl font-bold ${statusColor.split(" ")[0]} kpi-numeric`}>
                          {kpi.current}
                        </Heading>
                        <Body className="text-sm text-slate-500">/ {kpi.target} {kpi.unit}</Body>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className={`h-full ${statusColor.split(" ")[0].replace("text-", "bg-")} rounded-full`}
                        />
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* СЦ-4, СЦ-5, СЦ-6 в компактном виде */}
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <Heading as="h3" className="text-xl mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-heritage text-white flex items-center justify-center font-bold text-sm">4</span>
                СЦ-4: Институты
              </Heading>
              <div className="space-y-3">
                {kpiData.sc4.map((kpi, index) => {
                  const progress = calculateProgress(kpi.current, kpi.target, kpi.base);
                  return (
                    <Card key={kpi.label} className="p-3">
                      <Body className="text-xs text-slate-600 mb-1">{kpi.label}</Body>
                      <div className="flex items-center gap-2 mb-1">
                        <Heading as="h3" className="text-lg font-bold kpi-numeric">{kpi.current}%</Heading>
                        <Body className="text-xs text-slate-500">/ {kpi.target}%</Body>
                      </div>
                      <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                          className="h-full bg-digital rounded-full"
                        />
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
            <div>
              <Heading as="h3" className="text-xl mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-digital text-white flex items-center justify-center font-bold text-sm">5</span>
                СЦ-5: Инновации
              </Heading>
              <div className="space-y-3">
                {kpiData.sc5.map((kpi, index) => {
                  const progress = calculateProgress(kpi.current, kpi.target, kpi.base);
                  return (
                    <Card key={kpi.label} className="p-3">
                      <Body className="text-xs text-slate-600 mb-1">{kpi.label}</Body>
                      <div className="flex items-center gap-2 mb-1">
                        <Heading as="h3" className="text-lg font-bold kpi-numeric">{kpi.current}%</Heading>
                        <Body className="text-xs text-slate-500">/ {kpi.target}%</Body>
                      </div>
                      <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                          className="h-full bg-digital rounded-full"
                        />
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
            <div>
              <Heading as="h3" className="text-xl mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-water text-white flex items-center justify-center font-bold text-sm">6</span>
                СЦ-6: Финансы
              </Heading>
              <div className="space-y-3">
                {kpiData.sc6.map((kpi, index) => {
                  const progress = calculateProgress(kpi.current, kpi.target, kpi.base);
                  return (
                    <Card key={kpi.label} className="p-3">
                      <Body className="text-xs text-slate-600 mb-1">{kpi.label}</Body>
                      <div className="flex items-center gap-2 mb-1">
                        <Heading as="h3" className="text-lg font-bold kpi-numeric">{kpi.current}</Heading>
                        <Body className="text-xs text-slate-500">/ {kpi.target} {kpi.unit}</Body>
                      </div>
                      <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                          className="h-full bg-water rounded-full"
                        />
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </PageSection>

      {/* Ключевые проекты */}
      <PageSection className="bg-gradient-to-b from-white to-[color:var(--color-bg)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-gradient-to-b from-water to-digital rounded-full" />
            <div>
              <Caption className="text-water mb-2">Раздел IV</Caption>
              <Heading as="h2" className="text-3xl">
                Ключевые проекты (Якорные объекты) 2025–2035
              </Heading>
            </div>
          </div>

          {/* Легенда статусов */}
          <div className="flex flex-wrap gap-3 mb-8">
            <Tag tone="default" className="bg-green-50 border-green-300 text-green-700">🟢 АКТИВНЫЙ</Tag>
            <Tag tone="default" className="bg-blue-50 border-blue-300 text-blue-700">🟡 НОВЫЙ</Tag>
            <Tag tone="default" className="bg-yellow-50 border-yellow-300 text-yellow-700">🟡 ЧАСТИЧНО</Tag>
            <Tag tone="default" className="bg-orange-50 border-orange-300 text-orange-700">🟡 ПЕРЕФОРМУЛИРУЕТСЯ</Tag>
            <Tag tone="default" className="bg-red-50 border-red-300 text-red-700">🔴 КРИТИЧЕСКИЙ</Tag>
          </div>

          {/* Карточки проектов */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyProjects.map((project, index) => {
              const statusColor = getProjectStatusColor(project.status);
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                >
                  <Card className="h-full flex flex-col overflow-hidden group">
                    {/* Изображение */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r ${statusColor} text-white text-xs font-bold shadow-lg`}>
                        {project.statusText.split(" ")[0]}
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <Body className="text-white text-xs font-semibold">{project.category}</Body>
                      </div>
                    </div>

                    {/* Контент */}
                    <div className="p-6 flex-1 flex flex-col">
                      <Heading as="h3" className="text-lg mb-2">{project.name}</Heading>
                      <Body className="text-sm text-slate-600 mb-4 flex-1">{project.description}</Body>
                      
                      {/* Прогресс */}
                      <div className="mb-4">
                        <div className="flex justify-between text-xs text-slate-600 mb-1">
                          <span>Прогресс</span>
                          <span>{project.progress}%</span>
                        </div>
                        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${project.progress}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className={`h-full bg-gradient-to-r ${statusColor} rounded-full`}
                          />
                        </div>
                      </div>

                      {/* Детали */}
                      <div className="space-y-2 pt-4 border-t border-slate-200">
                        <div className="flex justify-between text-xs">
                          <Body className="text-slate-600">Бюджет:</Body>
                          <Body className="font-semibold text-slate-900">{project.cost}</Body>
                        </div>
                        {project.costOriginal && (
                          <div className="flex justify-between text-xs">
                            <Body className="text-slate-500 line-through">Было:</Body>
                            <Body className="text-slate-500 line-through">{project.costOriginal}</Body>
                          </div>
                        )}
                        <div className="flex justify-between text-xs">
                          <Body className="text-slate-600">Завершение:</Body>
                          <Body className="font-semibold text-slate-900">{project.completion}</Body>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </PageSection>

      {/* Финансовая стратегия */}
      <PageSection className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-gradient-to-b from-digital to-heritage rounded-full" />
            <div>
              <Caption className="text-digital mb-2">Раздел V</Caption>
              <Heading as="h2" className="text-3xl">
                Финансово-бюджетная стратегия
              </Heading>
            </div>
          </div>

          {/* Общий объем финансирования */}
          <Card className="bg-gradient-to-br from-digital/10 to-water/10 border-2 border-digital/30 mb-8">
            <div className="text-center mb-6">
              <Body className="text-sm text-slate-600 mb-2">Общее финансирование развития 2025–2035</Body>
              <Heading as="h3" className="text-5xl font-bold text-digital mb-2 kpi-numeric">
                {financialData.total.average}
              </Heading>
              <Body className="text-slate-600">млрд рублей</Body>
              <Body className="text-xs text-slate-500 mt-2">
                (диапазон: {financialData.total.min}–{financialData.total.max} млрд руб.)
              </Body>
            </div>
          </Card>

          {/* Распределение по направлениям */}
          <Heading as="h3" className="text-2xl mb-6">Распределение по приоритетным направлениям</Heading>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {financialData.byDirection.map((dir, index) => {
              const percent = (dir.amount / financialData.total.average) * 100;
              const colorClasses: Record<string, string> = {
                heritage: "from-heritage to-heritage/80",
                water: "from-water to-water/80",
                digital: "from-digital to-digital/80",
              };
              
              return (
                <motion.div
                  key={dir.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <div className="flex justify-between items-center mb-3">
                      <Body className="font-semibold text-slate-900">{dir.name}</Body>
                      <Body className="text-lg font-bold text-slate-900">{dir.amount} млрд</Body>
                    </div>
                    <div className="h-4 bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-full bg-gradient-to-r ${colorClasses[dir.color]} rounded-full`}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-slate-500 mt-2">
                      <span>{Math.round(percent)}% от общего</span>
                      <span className={dir.priority === "critical" ? "text-red-600 font-semibold" : ""}>
                        {dir.priority === "critical" ? "🔴 КРИТИЧНО" : dir.priority === "high" ? "🟢 Высокий" : dir.priority === "medium" ? "🟡 Средний" : "⚪ Низкий"}
                      </span>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Источники финансирования */}
          <Heading as="h3" className="text-2xl mb-6">Источники финансирования</Heading>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {financialData.bySource.map((source, index) => {
              const colorClasses: Record<string, string> = {
                heritage: "bg-heritage",
                water: "bg-water",
                digital: "bg-digital",
              };
              
              return (
                <motion.div
                  key={source.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-3 rounded-full ${colorClasses[source.color]} flex items-center justify-center text-white text-2xl font-bold`}>
                      {source.percent}%
                    </div>
                    <Body className="text-xs text-slate-600 mb-2">{source.name}</Body>
                    <Heading as="h3" className="text-lg font-bold text-slate-900">{source.amount} млрд</Heading>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Финансирование по периодам */}
          <Heading as="h3" className="text-2xl mb-6">Финансирование по периодам</Heading>
          <div className="grid md:grid-cols-3 gap-6">
            {financialData.byPeriod.map((period, index) => {
              const maxAmount = Math.max(...financialData.byPeriod.map(p => p.amount));
              const height = (period.amount / maxAmount) * 100;
              
              return (
                <motion.div
                  key={period.period}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <Body className="text-sm text-slate-600 mb-2">{period.period}</Body>
                    <Body className="text-xs text-slate-500 mb-4">{period.label}</Body>
                    <div className="relative h-48 flex items-end justify-center">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="w-full bg-gradient-to-t from-digital to-water rounded-t-lg flex items-start justify-center pt-2"
                      >
                        <Body className="text-white font-bold text-lg">{period.amount} млрд</Body>
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </PageSection>

      {/* Бренд и дизайн-код */}
      <PageSection className="bg-gradient-to-b from-white to-[color:var(--color-bg)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-gradient-to-b from-heritage to-digital rounded-full" />
            <div>
              <Caption className="text-heritage mb-2">Раздел VI</Caption>
              <Heading as="h2" className="text-3xl">
                Бренд города и дизайн-код
              </Heading>
            </div>
          </div>

          {/* Основной бренд */}
          <Card className="bg-gradient-to-br from-heritage/10 to-water/10 border-2 border-heritage/30 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-heritage via-water to-digital flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                🏛️
              </div>
              <div>
                <Heading as="h3" className="text-2xl mb-2">Основной бренд: «Исток Великой Реки»</Heading>
                <Body className="text-slate-600">✅ СОХРАНИТЬ</Body>
              </div>
            </div>
            <Body className="text-lg text-slate-700 mb-4">
              <strong>Философия:</strong> {brandData.main.philosophy}
            </Body>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-white/80">
                <Body className="text-xs text-slate-600 mb-1">Символ</Body>
                <Body className="font-semibold">{brandData.main.symbol}</Body>
              </Card>
              <Card className="bg-white/80">
                <Body className="text-xs text-slate-600 mb-1">Цвета</Body>
                <Body className="font-semibold">{brandData.main.colors.join(", ")}</Body>
              </Card>
              <Card className="bg-white/80">
                <Body className="text-xs text-slate-600 mb-1">Актуальность</Body>
                <Body className="font-semibold text-green-600">Полностью актуален</Body>
              </Card>
            </div>
          </Card>

          {/* Суббренды */}
          <Heading as="h3" className="text-2xl mb-6">Суббренды</Heading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {brandData.subBrands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={brand.new ? "border-2 border-digital/30 bg-digital/5" : ""}>
                  {brand.new && (
                    <Tag tone="digital" className="mb-3">НОВЫЙ</Tag>
                  )}
                  <Heading as="h3" className="text-lg mb-2">{brand.name}</Heading>
                  <Body className="text-xs text-slate-600 mb-1">
                    <strong>Аудитория:</strong> {brand.audience}
                  </Body>
                  <Body className="text-xs text-slate-600">
                    <strong>Фокус:</strong> {brand.focus}
                  </Body>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Дизайн-код */}
          <Card className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-2xl font-bold">
                🎨
              </div>
              <div>
                <Heading as="h3" className="text-2xl mb-2 text-white">Дизайн-код города Твери</Heading>
                <Body className="text-white/80">✅ ТРЕБУЕТ РАЗРАБОТКИ И РЕАЛИЗАЦИИ</Body>
              </div>
            </div>
            
            <Body className="text-white/90 mb-6">
              Набор правил и принципов для согласования внешнего облика зданий, сооружений, рекламы, 
              уличной мебели, обеспечивающих единство визуальной среды города и сохранение исторического наследия.
            </Body>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {brandData.designCode.phases.map((phase) => (
                <Card key={phase.phase} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <Heading as="h3" className="text-lg mb-2 text-white">{phase.phase}</Heading>
                  <Body className="text-white/80 text-sm mb-2">{phase.period}</Body>
                  <Body className="text-white/90 font-semibold">{phase.budget}</Body>
                </Card>
              ))}
            </div>

            <Card className="bg-white/20 backdrop-blur-sm border-white/30">
              <div className="flex justify-between items-center">
                <Body className="text-white font-semibold">Общий бюджет Дизайн-кода</Body>
                <Heading as="h3" className="text-2xl text-white">{brandData.designCode.totalBudget}</Heading>
              </div>
            </Card>
          </Card>
        </motion.div>
      </PageSection>

      {/* Заключение */}
      <PageSection className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-heritage/20 via-water/10 to-digital/20 border-2 border-heritage/30">
            <Heading as="h2" className="text-3xl mb-6 text-center">Финальное видение</Heading>
            <Body className="text-xl text-slate-700 text-center max-w-4xl mx-auto leading-relaxed">
              <strong>Тверь 2035</strong> — это не город рекордов и мегапроектов, а{" "}
              <strong className="text-digital">город качественной жизни, инноваций</strong>, где ценятся люди, идеи и окружающая среда. 
              Это город, где хочется жить, работать и создавать будущее.
            </Body>
          </Card>
        </motion.div>
      </PageSection>
    </div>
  );
};

export default VisionPage;
