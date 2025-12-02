import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PageSection } from "../components/layout/PageSection";
import { Heading, Body, Caption } from "../components/ui/Typography";
import { Card } from "../components/ui/Card";
import { Tag } from "../components/ui/Tag";
import { Button } from "../components/ui/Button";

export const DevelopmentPage: React.FC = () => {
  const navigate = useNavigate();

  const kpiData = [
    { label: "Отреставрированных ОКН", value: "70%", target: "2035", color: "heritage" },
    { label: "Новых школ", value: "13", target: "2035", color: "heritage" },
    { label: "Новых детских садов", value: "28", target: "2035", color: "heritage" },
    { label: "Территория реновации", value: "46 га", target: "2035", color: "digital" },
  ];

  const sections = [
    {
      id: "4.2.1",
      title: "Сохранение ОКН, ревитализация территорий исторической застройки",
      description: "Регенерация исторического центра с сохранением уникальной планировочной структуры",
      items: [
        "Регенерация исторического центра с максимальным сохранением историко-градостроительной среды",
        "Реставрация и адаптивное использование ОКН (70% к 2035 году)",
        "Введение требований Архитектурно-Градостроительного Облика (АГО)",
        "Разработка и внедрение Дизайн-кода города Твери",
        "Функциональное развитие общественной застройки",
        "Инициатива по включению в перечень объектов ЮНЕСКО",
      ],
      image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop",
      tone: "heritage" as const,
    },
    {
      id: "4.2.2",
      title: "Территории редевелопмента/реновации",
      description: "Комплексное и устойчивое развитие территорий, реорганизация промышленных зон",
      items: [
        "Реорганизация промзоны «Химбаза» для создания «Тверь-Экспо»",
        "Реконструкция промзон «Химволокно» и «Лазурная»",
        "Комплексная реновация Морозовского городка (46 га)",
        "Реконструкция кварталов Пролетарского района",
        "Вынос производственных предприятий из жилой застройки",
        "Функциональное замещение высвободившихся территорий",
      ],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop",
      tone: "digital" as const,
    },
    {
      id: "4.2.3",
      title: "Территории естественной динамики развития",
      description: "Новое капитальное строительство в Северной и Южной планировочных зонах",
      items: [
        "Формирование новых районов в Северной зоне (Заволжье)",
        "Развитие Южной планировочной зоны (Южный, Мамулино)",
        "Упорядочение усадебной застройки в пригородах",
        "Дифференциация жилья: многоэтажная, среднеэтажная, малоэтажная",
        "Строительство университетского Кампуса",
        "Создание инновационной школы «Сколково-Тверь»",
      ],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=90&auto=format&fit=crop",
      tone: "water" as const,
    },
    {
      id: "4.2.4",
      title: "Экологическое ориентирование застройки",
      description: "Градостроительная деятельность с учетом экологического приоритета",
      items: [
        "Учет зон с особыми условиями использования (ЗОУИТ)",
        "Защита от затопления паводками 1% обеспеченности",
        "Санитарно-защитные зоны (СЗЗ) от промышленных предприятий",
        "Ликвидация зон акустического дискомфорта от аэродромов",
        "Формирование единого природно-ландшафтного каркаса",
        "Архитектурно-ландшафтное оформление долин рек",
      ],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=90&auto=format&fit=crop",
      tone: "water" as const,
    },
  ];

  const keyProjects = [
    {
      name: "Регенерация исторического центра",
      description: "Сохранение уникальной регулярной планировочной структуры конца XVIII века",
      image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop",
    },
    {
      name: "Реновация Морозовского городка",
      description: "Комплексная реконструкция историко-архитектурного комплекса (46 га)",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop",
    },
    {
      name: "Тверь-Экспо",
      description: "Новый общегородской центр на территории бывшей «Химбазы»",
      image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop",
    },
    {
      name: "Тверь-Сити",
      description: "Бизнес-центр в Южном районе, интегрированный с вокзалами",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      {/* Hero секция */}
      <PageSection className="relative overflow-hidden min-h-[50vh] flex items-center bg-gradient-to-br from-heritage/10 via-digital/5 to-water/10">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c27a35' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        <div className="relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-6">
              <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
                ← Назад
              </Button>
              <Tag tone="heritage">Раздел 4.2</Tag>
            </div>
            <Caption className="text-heritage mb-4 font-semibold">Этап 2. Проектные решения</Caption>
            <Heading as="h1" className="text-4xl md:text-5xl mb-6 text-heritage">
              Застройка
            </Heading>
            <Body className="text-xl text-slate-700 mb-4 max-w-3xl">
              Градостроительное развитие и планирование
            </Body>
            <Body className="text-lg text-slate-600 max-w-3xl">
              Реализация стратегической цели СЦ-2 Пространство-2035: формирование полицентричной 
              пространственной организации города, повышение качества жизни и устойчивости городской среды.
            </Body>
          </motion.div>
        </div>
      </PageSection>

      {/* KPI карточки */}
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
              <Caption className="text-heritage mb-2">Ключевые показатели</Caption>
              <Heading as="h2" className="text-3xl">
                Целевые показатели до 2035 года
              </Heading>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpiData.map((kpi, index) => {
              const colorClasses = {
                heritage: "text-heritage",
                digital: "text-digital",
                water: "text-water",
              };
              const colorClass = colorClasses[kpi.color as keyof typeof colorClasses] || "text-slate-700";
              
              return (
                <motion.div
                  key={kpi.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 hover:border-heritage/50 transition-all">
                    <div className="p-6">
                      <Body className="text-sm text-slate-600 mb-2">{kpi.label}</Body>
                      <div className="flex items-baseline gap-2 mb-2">
                        <Heading as="h3" className={`text-4xl font-bold ${colorClass} kpi-numeric`}>
                          {kpi.value}
                        </Heading>
                        <Body className="text-sm text-slate-500">к {kpi.target}</Body>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </PageSection>

      {/* Общая стратегическая цель */}
      <PageSection className="bg-gradient-to-b from-white to-[color:var(--color-bg)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-heritage/20 via-digital/10 to-water/20 border-2 border-heritage/30 mb-8">
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-heritage via-digital to-water flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  🏛️
                </div>
                <div>
                  <Heading as="h2" className="text-2xl mb-2">Стратегическая цель</Heading>
                  <Body className="text-slate-600">СЦ-2 Пространство-2035</Body>
                </div>
              </div>
              <Body className="text-lg text-slate-800 leading-relaxed">
                Формирование <strong>полицентричной пространственной организации</strong> города с фокусом на 
                <strong className="text-heritage"> компактную городскую застройку</strong> за счет внутренней оптимизации 
                и реорганизации территорий, а не экстенсивного расширения. Это необходимо в условиях 
                <strong> дефицита свободных земель</strong>.
              </Body>
            </div>
          </Card>

          {/* Визуализация */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop"
                alt="Исторический центр Твери"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Heading as="h3" className="text-xl mb-2">Историческое ядро</Heading>
                <Body className="text-slate-700">
                  Уникальная регулярная (лучевая) планировочная структура конца XVIII века. 
                  Более 500 объектов культурного наследия требуют сохранения и регенерации.
                </Body>
              </div>
            </Card>
            <Card className="bg-gradient-to-br from-digital/10 to-heritage/10 border-2 border-digital/30">
              <div className="p-6">
                <Heading as="h3" className="text-xl mb-4">Принципы развития</Heading>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-heritage" />
                    <Body className="font-semibold">Полицентричность</Body>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-digital" />
                    <Body className="font-semibold">Компактная застройка</Body>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-water" />
                    <Body className="font-semibold">Экологический приоритет</Body>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-heritage" />
                    <Body className="font-semibold">Сохранение наследия</Body>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
      </PageSection>

      {/* Основные направления */}
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
              <Caption className="text-digital mb-2">Основные направления</Caption>
              <Heading as="h2" className="text-3xl">
                Территории и стратегии развития
              </Heading>
            </div>
          </div>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                  <Card className="overflow-hidden h-full">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-80 object-cover"
                      loading="lazy"
                    />
                  </Card>
                </div>
                <div className={index % 2 === 0 ? "order-2" : "order-1"}>
                  <div className="flex items-center gap-3 mb-4">
                    <Tag tone={section.tone}>{section.id}</Tag>
                    <Heading as="h3" className="text-2xl">{section.title}</Heading>
                  </div>
                  <Body className="text-slate-700 mb-4">
                    {section.description}
                  </Body>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => {
                      const toneColors = {
                        heritage: "text-heritage",
                        digital: "text-digital",
                        water: "text-water",
                      };
                      const toneColor = toneColors[section.tone] || "text-slate-700";
                      
                      return (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <span className={`${toneColor} mt-1 font-bold`}>•</span>
                          <Body className="text-slate-700">{item}</Body>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            ))}
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
            <div className="w-1 h-16 bg-gradient-to-b from-heritage to-water rounded-full" />
            <div>
              <Caption className="text-heritage mb-2">Ключевые проекты</Caption>
              <Heading as="h2" className="text-3xl">
                Якорные объекты развития
              </Heading>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {keyProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <Tag tone="heritage" className="mb-2">Якорный проект</Tag>
                    <Heading as="h3" className="text-lg mb-2">{project.name}</Heading>
                    <Body className="text-sm text-slate-600">{project.description}</Body>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </PageSection>

      {/* Картографические материалы */}
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
              <Caption className="text-digital mb-2">Картографические материалы</Caption>
              <Heading as="h2" className="text-3xl">
                ГИС-слои и схемы планирования
              </Heading>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Схема функционального зонирования */}
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[400px] flex items-center justify-center">
              <div className="text-center p-6">
                <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <Heading as="h3" className="text-xl text-slate-600 mb-2">
                  Схема функционального зонирования
                </Heading>
                <Body className="text-slate-500 mb-4">
                  Проектная схема зонирования к 2035 г.: жилые зоны, ОДЗ, зоны редевелопмента/реновации
                </Body>
                <Caption className="text-slate-400">ГИС-слой в формате МСК-69</Caption>
              </div>
            </Card>

            {/* Карта архитектурно-планировочного каркаса */}
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[400px] flex items-center justify-center">
              <div className="text-center p-6">
                <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <Heading as="h3" className="text-xl text-slate-600 mb-2">
                  Архитектурно-планировочный каркас
                </Heading>
                <Body className="text-slate-500 mb-4">
                  Планировочные оси (исторический «трезубец»), центры развития, транспортные связи
                </Body>
                <Caption className="text-slate-400">Схематичный план каркаса</Caption>
              </div>
            </Card>

            {/* Карта ограничений и потенциалов */}
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[400px] flex items-center justify-center">
              <div className="text-center p-6">
                <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <Heading as="h3" className="text-xl text-slate-600 mb-2">
                  Ограничения и потенциалы
                </Heading>
                <Body className="text-slate-500 mb-4">
                  Границы ОКН, зоны охраны, ЗСО, ВОЗ, территории затопления паводками 1%
                </Body>
                <Caption className="text-slate-400">Аналитическая карта</Caption>
              </div>
            </Card>

            {/* Схема развития соцсферы */}
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[400px] flex items-center justify-center">
              <div className="text-center p-6">
                <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <Heading as="h3" className="text-xl text-slate-600 mb-2">
                  Развитие соцсферы
                </Heading>
                <Body className="text-slate-500 mb-4">
                  Расположение объектов образования и здравоохранения: 13 школ, 28 детских садов, кампус
                </Body>
                <Caption className="text-slate-400">Карта «Белые пятна»</Caption>
              </div>
            </Card>
          </div>
        </motion.div>
      </PageSection>

      {/* Дополнительные иллюстрации */}
      <PageSection className="bg-gradient-to-b from-white to-[color:var(--color-bg)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-gradient-to-b from-heritage to-water rounded-full" />
            <div>
              <Caption className="text-heritage mb-2">Визуализация проектов</Caption>
              <Heading as="h2" className="text-3xl">
                Ключевые проекты и решения
              </Heading>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Регенерация центра */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop"
                alt="Регенерация исторического центра"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="heritage" className="mb-2">Регенерация</Tag>
                <Heading as="h3" className="text-lg mb-2">До и После</Heading>
                <Body className="text-sm text-slate-600">
                  Коллаж применения Дизайн-кода на исторической улице. Отреставрированный фасад 
                  с регулируемыми вывесками и подсветкой.
                </Body>
              </div>
            </Card>

            {/* Реновация */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop"
                alt="Реновация Морозовского городка"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="digital" className="mb-2">Реновация</Tag>
                <Heading as="h3" className="text-lg mb-2">Морозовский городок</Heading>
                <Body className="text-sm text-slate-600">
                  3D-рендер ревитализации «Двора Пролетарки». Комплексная реновация 
                  историко-архитектурного комплекса (46 га).
                </Body>
              </div>
            </Card>

            {/* Тверь-Сити */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop"
                alt="Тверь-Сити"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="digital" className="mb-2">Новый центр</Tag>
                <Heading as="h3" className="text-lg mb-2">Тверь-Сити</Heading>
                <Body className="text-sm text-slate-600">
                  Рендер бизнес-центра: современный высотный деловой комплекс, интегрированный 
                  с вокзалами. Новая высотная доминанта в Южном районе.
                </Body>
              </div>
            </Card>

            {/* Экология */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=90&auto=format&fit=crop"
                alt="Набережная"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="water" className="mb-2">Экология</Tag>
                <Heading as="h3" className="text-lg mb-2">Набережные рек</Heading>
                <Body className="text-sm text-slate-600">
                  Рендер благоустроенной набережной Тьмаки или Лазури с непрерывными 
                  пешеходными и велодорожками. Концепция «Дыхание рек».
                </Body>
              </div>
            </Card>

            {/* Социальная застройка */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=90&auto=format&fit=crop"
                alt="Университетский кампус"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="heritage" className="mb-2">Образование</Tag>
                <Heading as="h3" className="text-lg mb-2">Университетский Кампус</Heading>
                <Body className="text-sm text-slate-600">
                  Рендер нового Университетского Кампуса в Заволжье. Иллюстрация приоритетов 
                  СЦ-1 Человеческий капитал.
                </Body>
              </div>
            </Card>

            {/* Тверь-Экспо */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop"
                alt="Тверь-Экспо"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="digital" className="mb-2">Новый центр</Tag>
                <Heading as="h3" className="text-lg mb-2">Тверь-Экспо</Heading>
                <Body className="text-sm text-slate-600">
                  Рендер нового общегородского центра на территории бывшей «Химбазы». 
                  Развитие событийной экономики и туризма.
                </Body>
              </div>
            </Card>
          </div>
        </motion.div>
      </PageSection>
    </div>
  );
};

export default DevelopmentPage;
