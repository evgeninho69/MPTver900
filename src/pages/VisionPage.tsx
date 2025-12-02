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

const strategicGoals = [
  {
    id: "SC1",
    title: "СЦ-1 Человеческий капитал-2035",
    description: "Создание условий для расширенного воспроизводства населения, обеспечение передовых стандартов качества жизни",
    color: "heritage",
    icon: "👥",
  },
  {
    id: "SC2",
    title: "СЦ-2 Пространство-2035",
    description: "Полицентричность, транспортная связность, развитая инженерная инфраструктура и дружелюбная среда",
    color: "water",
    icon: "🏙️",
  },
  {
    id: "SC3",
    title: "СЦ-3 Рынки-2035",
    description: "Лидерство в создании новых продуктов и технологий, наукоемкие промышленные кластеры",
    color: "digital",
    icon: "💼",
  },
  {
    id: "SC4",
    title: "СЦ-4 Институты-2035",
    description: "Сбалансированная система институтов, обеспечивающая устойчивое развитие предпринимательства",
    color: "heritage",
    icon: "⚖️",
  },
  {
    id: "SC5",
    title: "СЦ-5 Инновации и информация-2035",
    description: "Лидерство в развитии «умной» экономики и повсеместное использование ИКТ",
    color: "digital",
    icon: "💡",
  },
  {
    id: "SC6",
    title: "СЦ-6 Финансовый капитал-2035",
    description: "Высокоэффективная бюджетная система, обеспечивающая финансовую и социальную стабильность",
    color: "water",
    icon: "💰",
  },
];

const keyProjects = [
  {
    id: 1,
    name: "Строительство Западного моста через Волгу",
    category: "Инфраструктура / Мобильность",
    goal: "Усиление связности города, ликвидация транспортных заторов",
    cost: "10 000 000 тыс. руб.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Возрождение трамвайного сообщения",
    category: "Инфраструктура / Мобильность",
    goal: "Создание экологичного, вместительного скоростного транспорта",
    cost: "65 000 000 тыс. руб.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&q=90&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Реконструкция ТПУ «Тверь-Центральный»",
    category: "Инфраструктура / Мобильность",
    goal: "Создание единого Транспортно-пересадочного узла",
    cost: "Н/Д",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Бизнес-центр «Тверь-Сити»",
    category: "Экономика / Инновации",
    goal: "Создание крупного делового центра (180 000 м²) для привлечения офисов столичных компаний",
    cost: "7 500 000 тыс. руб.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Выставочный центр «Тверь-Экспо»",
    category: "Экономика / Инновации",
    goal: "Создание нового общегородского центра для развития событийной экономики",
    cost: "8 000 000 тыс. руб.",
    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Университетский Кампус в Заволжском районе",
    category: "Человеческий капитал / Образование",
    goal: "Формирование научно-образовательного кластера",
    cost: "1 500 000 тыс. руб.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=90&auto=format&fit=crop",
  },
];

export const VisionPage: React.FC = () => {
  const navigate = useNavigate();

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
        <div className="relative z-10 max-w-5xl w-full">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6"
          >
            ← Назад к структуре
          </Button>
          <Caption className="text-heritage font-semibold mb-4">
            Раздел 3
          </Caption>
          <Heading as="h1" className="text-4xl md:text-5xl lg:text-6xl mb-6 text-slate-900">
            Стратегическое видение и ключевые проекты
          </Heading>
          <Body className="text-lg text-slate-700 max-w-3xl">
            Синтез стратегического анализа, определяющий желаемый образ будущего города Твери к 2035 году,
            фокусируясь на ключевых приоритетах, измеримых показателях и якорных проектах для достижения прорывного развития.
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

          {/* Главная стратегическая цель */}
          <Card className="bg-gradient-to-br from-digital/20 via-water/10 to-heritage/20 border-2 border-digital/30 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-digital via-water to-heritage flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                🎯
              </div>
              <div>
                <Heading as="h3" className="text-2xl mb-2">Главная стратегическая цель</Heading>
                <Body className="text-slate-600">Обеспечение прорывного развития экономики к 2035 году</Body>
              </div>
            </div>
            <Body className="text-lg text-slate-700 mb-6">
              <strong>Главная стратегическая цель</strong> развития Твери на долгосрочную перспективу —{" "}
              <strong className="text-digital">обеспечение прорывного развития экономики</strong>, которое предоставит
              равные возможности для бизнеса и науки, а также привлечет и объединит людей для реализации передовых идей
              и комфортного проживания.
            </Body>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-white/80">
                <Heading as="h4" className="mb-2">Город – лидер по привлекательности</Heading>
                <Body className="text-sm text-slate-700">
                  Лидер по привлекательности для молодых, город, в котором хочется жить и работать
                </Body>
              </Card>
              <Card className="bg-white/80">
                <Heading as="h4" className="mb-2">Технологически оснащенный центр</Heading>
                <Body className="text-sm text-slate-700">
                  Центр экономического роста с высоким уровнем качества жизни и индексом цифровой жизни
                </Body>
              </Card>
              <Card className="bg-white/80">
                <Heading as="h4" className="mb-2">Конкурентоспособный образовательный центр</Heading>
                <Body className="text-sm text-slate-700">
                  Лидирующий в применении современных технологий муниципального управления
                </Body>
              </Card>
              <Card className="bg-white/80">
                <Heading as="h4" className="mb-2">Лидер в управлении</Heading>
                <Body className="text-sm text-slate-700">
                  Город, лидирующий в применении современных технологий муниципального управления
                </Body>
              </Card>
            </div>
          </Card>

          {/* Шесть стратегических целей */}
          <Heading as="h3" className="text-2xl mb-6">Шесть стратегических целей (СЦ) до 2035 года</Heading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {strategicGoals.map((goal, index) => {
              const colorClasses = {
                heritage: "bg-gradient-to-br from-heritage/10 to-heritage/5 border-heritage/30",
                water: "bg-gradient-to-br from-water/10 to-water/5 border-water/30",
                digital: "bg-gradient-to-br from-digital/10 to-digital/5 border-digital/30",
              };
              
              return (
                <motion.div
                  key={goal.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <Card className={`${colorClasses[goal.color]} h-full`}>
                    <div className="text-4xl mb-3">{goal.icon}</div>
                    <Heading as="h4" className="text-lg mb-2">{goal.title}</Heading>
                    <Body className="text-sm text-slate-700">{goal.description}</Body>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Изображения видения */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="rounded-2xl overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=90&auto=format&fit=crop"
                alt="Привлекательность для молодежи"
                className="w-full h-[250px] object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="bg-white p-4">
                <Caption className="text-slate-500">Привлекательность для молодежи</Caption>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=90&auto=format&fit=crop"
                alt="Технологический центр"
                className="w-full h-[250px] object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="bg-white p-4">
                <Caption className="text-slate-500">Технологический центр</Caption>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=90&auto=format&fit=crop"
                alt="Образовательный центр"
                className="w-full h-[250px] object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="bg-white p-4">
                <Caption className="text-slate-500">Образовательный центр</Caption>
              </div>
            </div>
          </div>

          {/* Дополнительные изображения стратегических целей */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop"
                alt="Полицентричность"
                className="w-full h-[300px] object-cover"
              />
              <div className="bg-white p-6">
                <Heading as="h3" className="mb-2">Полицентрическое развитие</Heading>
                <Body className="text-slate-600">
                  Создание новых центров активности для равномерного распределения нагрузки и повышения качества жизни
                </Body>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop"
                alt="Умная экономика"
                className="w-full h-[300px] object-cover"
              />
              <div className="bg-white p-6">
                <Heading as="h3" className="mb-2">Умная экономика</Heading>
                <Body className="text-slate-600">
                  Лидерство в развитии «умной» экономики и повсеместное использование информационно-коммуникационных технологий
                </Body>
              </div>
            </div>
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
            <div className="w-1 h-16 bg-gradient-to-b from-digital to-water rounded-full" />
            <div>
              <Caption className="text-digital mb-2">Раздел II</Caption>
              <Heading as="h2" className="text-3xl">
                SWOT-анализ развития города Твери
              </Heading>
            </div>
          </div>

          <Body className="text-lg text-slate-700 mb-8 max-w-4xl">
            SWOT-анализ суммирует результаты диагностики, определяя возможности для стратегического прорыва
            и риски, которые необходимо минимизировать.
          </Body>

          {/* SWOT карточки */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xl">
                  S
                </div>
                <Heading as="h3" className="text-xl text-green-700">Сильные стороны</Heading>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>S1.</strong> Выгодное геоположение и логистика в транспортном коридоре</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>S2.</strong> Историко-культурное ядро с более чем 500 ОКН</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>S3.</strong> Научный и образовательный потенциал</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>S4.</strong> Компактность и уют города</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-xl">
                  W
                </div>
                <Heading as="h3" className="text-xl text-red-700">Слабые стороны</Heading>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span><strong>W1.</strong> Критический износ сетей ЖКХ (84,1% теплоснабжение)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span><strong>W2.</strong> Транспортный кризис, ликвидация электротранспорта</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span><strong>W3.</strong> Отток квалифицированных кадров</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span><strong>W4.</strong> Недостаток соцобъектов (10 школ, 27 детских садов)</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl">
                  O
                </div>
                <Heading as="h3" className="text-xl text-blue-700">Возможности</Heading>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>O1.</strong> Федеральная поддержка и гранты к 900-летию</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>O2.</strong> Инновации и цифровизация («Умный город»)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>O3.</strong> Регенерация территорий и реновация кварталов</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xl">
                  T
                </div>
                <Heading as="h3" className="text-xl text-orange-700">Угрозы</Heading>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span><strong>T1.</strong> Конкуренция мегаполисов за ресурсы</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span><strong>T2.</strong> Финансовые риски и капиталоемкость проектов</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span><strong>T3.</strong> Риск утраты наследия при отсутствии Дизайн-кода</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Детальная таблица SWOT */}
          <Card className="overflow-x-auto mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-4 px-4 font-bold text-slate-900">Группа факторов</th>
                  <th className="text-left py-4 px-4 font-bold text-slate-900">Факторы (S/W/O/T)</th>
                  <th className="text-left py-4 px-4 font-bold text-slate-900">Подробности и источники</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-green-50 transition-colors">
                  <td className="py-4 px-4 font-semibold text-green-700">Сильные стороны (S)</td>
                  <td className="py-4 px-4 font-semibold">S1. Выгодное геоположение и логистика</td>
                  <td className="py-4 px-4">Расположение в транспортном коридоре между Москвой и Санкт-Петербургом</td>
                </tr>
                <tr className="hover:bg-green-50 transition-colors">
                  <td className="py-4 px-4"></td>
                  <td className="py-4 px-4 font-semibold">S2. Историко-культурное ядро</td>
                  <td className="py-4 px-4">Более 500 объектов культурного наследия (ОКН), потенциал для развития туризма</td>
                </tr>
                <tr className="hover:bg-red-50 transition-colors">
                  <td className="py-4 px-4 font-semibold text-red-700">Слабые стороны (W)</td>
                  <td className="py-4 px-4 font-semibold">W1. Критический износ инфраструктуры</td>
                  <td className="py-4 px-4">Критический износ сетей ЖКХ, особенно теплоснабжения (84,1%)</td>
                </tr>
                <tr className="hover:bg-red-50 transition-colors">
                  <td className="py-4 px-4"></td>
                  <td className="py-4 px-4 font-semibold">W2. Транспортный кризис</td>
                  <td className="py-4 px-4">Полная ликвидация электротранспорта, перегруженность УДС, недостаток мостов</td>
                </tr>
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="py-4 px-4 font-semibold text-blue-700">Возможности (O)</td>
                  <td className="py-4 px-4 font-semibold">O1. Федеральная поддержка</td>
                  <td className="py-4 px-4">Возможность привлечения федерального финансирования в рамках Национальных проектов</td>
                </tr>
                <tr className="hover:bg-orange-50 transition-colors">
                  <td className="py-4 px-4 font-semibold text-orange-700">Угрозы (T)</td>
                  <td className="py-4 px-4 font-semibold">T1. Конкуренция мегаполисов</td>
                  <td className="py-4 px-4">Усиление конкуренции с Москвой и Санкт-Петербургом за инвестиционные и человеческие ресурсы</td>
                </tr>
              </tbody>
            </table>
          </Card>

          {/* Изображения SWOT */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=90&auto=format&fit=crop"
                alt="Логистика"
                className="w-full h-[200px] object-cover"
              />
              <div className="bg-white p-4">
                <Caption className="text-green-600">Сильные стороны</Caption>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=90&auto=format&fit=crop"
                alt="Инфраструктура"
                className="w-full h-[200px] object-cover"
              />
              <div className="bg-white p-4">
                <Caption className="text-red-600">Слабые стороны</Caption>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=90&auto=format&fit=crop"
                alt="Инновации"
                className="w-full h-[200px] object-cover"
              />
              <div className="bg-white p-4">
                <Caption className="text-blue-600">Возможности</Caption>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=90&auto=format&fit=crop"
                alt="Риски"
                className="w-full h-[200px] object-cover"
              />
              <div className="bg-white p-4">
                <Caption className="text-orange-600">Угрозы</Caption>
              </div>
            </div>
          </div>
        </motion.div>
      </PageSection>

      {/* KPI */}
      <PageSection className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-gradient-to-b from-water to-heritage rounded-full" />
            <div>
              <Caption className="text-water mb-2">Раздел III</Caption>
              <Heading as="h2" className="text-3xl">
                Ключевые показатели эффективности (KPI)
              </Heading>
            </div>
          </div>

          <Body className="text-lg text-slate-700 mb-8 max-w-4xl">
            Конкретные целевые показатели, отражающие ожидаемые результаты по шести стратегическим целям к 2035 году.
          </Body>

          {/* KPI карточки */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-digital/10 to-digital/5 border-digital/30">
              <div className="text-5xl font-bold text-digital mb-2 kpi-numeric">500</div>
              <Body className="text-sm text-slate-700 mb-1">тыс. чел.</Body>
              <Caption className="text-xs">Среднегодовая численность населения</Caption>
            </Card>
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <div className="text-5xl font-bold text-green-600 mb-2 kpi-numeric">0</div>
              <Body className="text-sm text-slate-700 mb-1">учащихся</Body>
              <Caption className="text-xs">Ликвидация второй смены в школах</Caption>
            </Card>
            <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
              <div className="text-5xl font-bold text-red-600 mb-2 kpi-numeric">20%</div>
              <Body className="text-sm text-slate-700 mb-1">износ</Body>
              <Caption className="text-xs">Сетей теплоснабжения (было 84,1%)</Caption>
            </Card>
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <div className="text-5xl font-bold text-blue-600 mb-2 kpi-numeric">100%</div>
              <Body className="text-sm text-slate-700 mb-1">доля ОТ</Body>
              <Caption className="text-xs">В общем объеме перевозок</Caption>
            </Card>
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <div className="text-5xl font-bold text-purple-600 mb-2 kpi-numeric">70%</div>
              <Body className="text-sm text-slate-700 mb-1">ОКН</Body>
              <Caption className="text-xs">Отреставрированных/адаптированных</Caption>
            </Card>
            <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
              <div className="text-5xl font-bold text-amber-600 mb-2 kpi-numeric">≥85%</div>
              <Body className="text-sm text-slate-700 mb-1">дорог</Body>
              <Caption className="text-xs">В нормативном состоянии</Caption>
            </Card>
            <Card className="bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200">
              <div className="text-5xl font-bold text-teal-600 mb-2 kpi-numeric">35%</div>
              <Body className="text-sm text-slate-700 mb-1">продукции</Body>
              <Caption className="text-xs">Доля инновационной продукции</Caption>
            </Card>
            <Card className="bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200">
              <div className="text-5xl font-bold text-indigo-600 mb-2 kpi-numeric">23%</div>
              <Body className="text-sm text-slate-700 mb-1">доходы</Body>
              <Caption className="text-xs">От налогов по земле и имуществу</Caption>
            </Card>
          </div>

          {/* Детальная таблица KPI */}
          <Card className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-4 px-4 font-bold text-slate-900">Направление (СЦ)</th>
                  <th className="text-left py-4 px-4 font-bold text-slate-900">Ключевой показатель</th>
                  <th className="text-left py-4 px-4 font-bold text-slate-900">Базовое значение</th>
                  <th className="text-left py-4 px-4 font-bold text-digital">Целевое значение к 2035</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 font-semibold">СЦ-1 Человеческий капитал</td>
                  <td className="py-4 px-4">Среднегодовая численность населения</td>
                  <td className="py-4 px-4">~420,5 тыс. чел.</td>
                  <td className="py-4 px-4 font-bold text-digital">500,0 тыс. чел.</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 font-semibold">СЦ-1 Человеческий капитал</td>
                  <td className="py-4 px-4">Ликвидация второй смены в школах</td>
                  <td className="py-4 px-4">8256 учащихся (2017)</td>
                  <td className="py-4 px-4 font-bold text-digital">0 учащихся</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 font-semibold">СЦ-2 Пространство</td>
                  <td className="py-4 px-4">Износ сетей теплоснабжения</td>
                  <td className="py-4 px-4">84,1%</td>
                  <td className="py-4 px-4 font-bold text-digital">20%</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 font-semibold">СЦ-2 Пространство</td>
                  <td className="py-4 px-4">Доля ОТ/Пеш/Вело в перевозках</td>
                  <td className="py-4 px-4">~33% (2017 г.)</td>
                  <td className="py-4 px-4 font-bold text-digital">100%</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 font-semibold">СЦ-3 Рынки / СЦ-5 Инновации</td>
                  <td className="py-4 px-4">Доля инновационной продукции</td>
                  <td className="py-4 px-4">20,0%</td>
                  <td className="py-4 px-4 font-bold text-digital">35,0%</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 font-semibold">СЦ-3 Рынки / СЦ-5 Инновации</td>
                  <td className="py-4 px-4">Доля отреставрированных ОКН</td>
                  <td className="py-4 px-4">X%</td>
                  <td className="py-4 px-4 font-bold text-digital">70%</td>
                </tr>
              </tbody>
            </table>
          </Card>
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
            <div className="w-1 h-16 bg-gradient-to-b from-heritage to-digital rounded-full" />
            <div>
              <Caption className="text-heritage mb-2">Раздел IV</Caption>
              <Heading as="h2" className="text-3xl">
                Ключевые проекты (Якорные объекты)
              </Heading>
            </div>
          </div>

          <Body className="text-lg text-slate-700 mb-8 max-w-4xl">
            Крупные инвестиционные инициативы, направленные на устранение инфраструктурных дефицитов
            и создание новых точек роста в разных планировочных зонах города.
          </Body>

          {/* Карточки проектов */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {keyProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="cursor-pointer group"
              >
                <Card className="h-full overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Tag tone={project.category.includes("Инфраструктура") ? "water" : project.category.includes("Экономика") ? "digital" : "heritage"}>
                        {project.category.split(" / ")[0]}
                      </Tag>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-digital text-white flex items-center justify-center font-bold text-sm">
                        {project.id}
                      </div>
                      <Heading as="h3" className="text-lg">{project.name}</Heading>
                    </div>
                    <Body className="text-sm text-slate-700 mb-4">{project.goal}</Body>
                    <div className="pt-4 border-t border-slate-200">
                      <Body className="text-xs text-slate-600">
                        <strong>Стоимость:</strong> {project.cost}
                      </Body>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Место для карты проектов */}
          <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[500px] flex items-center justify-center">
            <div className="text-center">
              <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <Heading as="h3" className="text-xl text-slate-600 mb-2">
                Карта ключевых проектов
              </Heading>
              <Body className="text-slate-500">
                Здесь будет размещена карта с расположением всех якорных проектов и объектов
              </Body>
            </div>
          </Card>
        </motion.div>
      </PageSection>

      {/* Бренд города */}
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
                Бренд города и идентичность Твери
              </Heading>
            </div>
          </div>

          {/* Философия и слоганы */}
          <Card className="bg-gradient-to-br from-heritage/20 via-water/10 to-digital/20 border-2 border-heritage/30 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-heritage via-water to-digital flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                Т
              </div>
              <div>
                <Heading as="h3" className="text-2xl mb-2">Философия и слоганы</Heading>
                <Body className="text-slate-600">«Тверь – соединяя столицы, создавая своё»</Body>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white/80">
                <Heading as="h4" className="mb-2">Для жителей</Heading>
                <Body className="text-lg font-semibold text-heritage">«Тверь — твой исток силы»</Body>
              </Card>
              <Card className="bg-white/80">
                <Heading as="h4" className="mb-2">Для бизнеса/инвесторов</Heading>
                <Body className="text-lg font-semibold text-digital">«Первые в деле. Первые в пути»</Body>
              </Card>
              <Card className="bg-white/80">
                <Heading as="h4" className="mb-2">Дескриптор</Heading>
                <Body className="text-lg font-semibold text-water">«Исток. Путь. Открытия»</Body>
              </Card>
            </div>
          </Card>

          {/* Концепции бренда */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-water/10 to-water/5 border-water/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">🌊</div>
                <div>
                  <Heading as="h3" className="text-xl">Основной бренд</Heading>
                  <Caption>«Исток Великой Реки»</Caption>
                </div>
              </div>
              <Body className="text-slate-700 mb-4">
                Тверь как начало великого пути, слияние трех рек (Волга, Тверца, Тьмака) в виде трезубца или трёх волн.
              </Body>
              <Tag tone="water">Универсальная айдентика</Tag>
            </Card>

            <Card className="bg-gradient-to-br from-heritage/10 to-heritage/5 border-heritage/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">🐐</div>
                <div>
                  <Heading as="h3" className="text-xl">Суббренд 1</Heading>
                  <Caption>«Тверской Козёл»</Caption>
                </div>
              </div>
              <Body className="text-slate-700 mb-4">
                Символ предприимчивости, упорства и роста. Исторически — неофициальный символ Твери.
              </Body>
              <Tag tone="heritage">Фирменный стиль для МСП</Tag>
            </Card>

            <Card className="bg-gradient-to-br from-digital/10 to-digital/5 border-digital/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">⛵</div>
                <div>
                  <Heading as="h3" className="text-xl">Суббренд 2</Heading>
                  <Caption>«Путь Афанасия»</Caption>
                </div>
              </div>
              <Body className="text-slate-700 mb-4">
                Город открытий и путешествий, мост между культурами. Символ: ладья с компасом.
              </Body>
              <Tag tone="digital">Туристический бренд</Tag>
            </Card>

            <Card className="bg-gradient-to-br from-heritage/10 to-heritage/5 border-heritage/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">🎵</div>
                <div>
                  <Heading as="h3" className="text-xl">Суббренд 3</Heading>
                  <Caption>«Тверь Шансонная»</Caption>
                </div>
              </div>
              <Body className="text-slate-700 mb-4">
                Культурная аутентичность, связанная с образом Михаила Круга.
              </Body>
              <Tag tone="heritage">Музыкальные фестивали</Tag>
            </Card>
          </div>

          {/* Визуальные элементы */}
          <Card className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white mb-8">
            <Heading as="h3" className="text-2xl mb-6 text-white">Визуальные и архитектурные элементы</Heading>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <Heading as="h4" className="text-lg mb-3 text-white">Цветовая палитра</Heading>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded bg-[#8B0000]"></div>
                    <Body className="text-white/90">Бордовый (статус столицы)</Body>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded bg-[#0f766e]"></div>
                    <Body className="text-white/90">Волжский синий (река, стабильность)</Body>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded bg-[#FFA500]"></div>
                    <Body className="text-white/90">Золотисто-оранжевый (экономика, гостеприимство)</Body>
                  </div>
                </div>
              </div>
              <div>
                <Heading as="h4" className="text-lg mb-3 text-white">Графический мотив</Heading>
                <Body className="text-white/90 mb-4">
                  Перекрёстный паттерн (трехлучевая звезда), основанный на уникальной регулярной планировке центра Твери
                </Body>
                <div className="w-24 h-24 mx-auto border-2 border-white/30 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 border border-white/50 rounded-full"></div>
                </div>
              </div>
              <div>
                <Heading as="h4" className="text-lg mb-3 text-white">Дизайн-код</Heading>
                <Body className="text-white/90">
                  Разработка и реализация Дизайн-кода города Твери является требованием Мастер-плана.
                  Он должен обеспечить избавление от визуального и аудио мусора и реставрацию исторически значимых зданий.
                </Body>
              </div>
            </div>
          </Card>

          {/* Изображения брендинга */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=90&auto=format&fit=crop"
                alt="Три реки"
                className="w-full h-[300px] object-cover"
              />
              <div className="bg-white p-6">
                <Heading as="h4" className="mb-2">Исток Великой Реки</Heading>
                <Body className="text-sm text-slate-600">Слияние трех рек: Волга, Тверца, Тьмака</Body>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=90&auto=format&fit=crop"
                alt="Город-перекрёсток"
                className="w-full h-[300px] object-cover"
              />
              <div className="bg-white p-6">
                <Heading as="h4" className="mb-2">Город-перекрёсток</Heading>
                <Body className="text-sm text-slate-600">Соединение дорог и столиц</Body>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=90&auto=format&fit=crop"
                alt="Культурное наследие"
                className="w-full h-[300px] object-cover"
              />
              <div className="bg-white p-6">
                <Heading as="h4" className="mb-2">Культурная аутентичность</Heading>
                <Body className="text-sm text-slate-600">Историческое наследие и современность</Body>
              </div>
            </div>
          </div>

          {/* Целевое видение */}
          <Card className="bg-gradient-to-br from-digital/20 via-water/10 to-heritage/20 border-2 border-digital/30">
            <Heading as="h3" className="text-2xl mb-4">Целевое видение Твери</Heading>
            <Body className="text-lg text-slate-700 leading-relaxed">
              Создание <strong>единого непрерывного каркаса</strong> (пешеходно-велосипедный и природно-ландшафтный),
              который <strong>связывает</strong> историческое наследие Центральной зоны с новыми инновационными и логистическими
              точками роста в Северной и Южной зонах, обеспечивая таким образом{" "}
              <strong>пространственно сбалансированное</strong> развитие.
            </Body>
          </Card>
        </motion.div>
      </PageSection>
    </div>
  );
};

export default VisionPage;

