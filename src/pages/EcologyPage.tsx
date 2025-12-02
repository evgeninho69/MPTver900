import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PageSection } from "../components/layout/PageSection";
import { Heading, Body, Caption } from "../components/ui/Typography";
import { Card } from "../components/ui/Card";
import { Tag } from "../components/ui/Tag";
import { Button } from "../components/ui/Button";

export const EcologyPage: React.FC = () => {
  const navigate = useNavigate();

  const kpiData = [
    { label: "Площадь зеленых насаждений", value: "1572+ га", target: "2035", color: "water" },
    { label: "Доля города, покрытая зеленью", value: "10.3%+", target: "2035", color: "water" },
    { label: "Очищенных стоков", value: "100%", target: "2035", color: "water" },
    { label: "Рекультивированных территорий", value: "100%", target: "2035", color: "water" },
  ];

  const waterMeasures = [
    {
      title: "Регулирование стока",
      items: [
        "Водопонижение и дноуглубление реки Лазурь",
        "Обеспечение проточности за счет строительства трех каналов",
        "Канал Тьмака – Волга (протяженность 2,0 км)",
        "Канал Тьмака – Лазурь (0,6 км)",
        "Расчистка и дноуглубление русел малых рек и ручьев",
      ],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=90&auto=format&fit=crop",
    },
    {
      title: "Благоустройство набережных",
      items: [
        "Формирование системы набережных рек Волги, Тверцы и Тьмаки",
        "Продолжение строительства набережной Волги (780 м + 300 м)",
        "Создание общественных комплексов на набережных",
        "Пешеходно-велосипедные дорожки вдоль рек",
        "Принцип «Дыхание рек» — непрерывный парково-рекреационный маршрут",
      ],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=90&auto=format&fit=crop",
    },
    {
      title: "Инженерная защита",
      items: [
        "Устройство дамб обвалования для сложившейся застройки",
        "Подсыпка территорий для проектируемой застройки",
        "Защита от затопления паводками 1% обеспеченности",
        "Строительство комплекса очистных сооружений в устье ручья Соминка",
        "Пруды-отстойники в районах Черкассы и Сахарово",
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=90&auto=format&fit=crop",
    },
    {
      title: "Рекультивация",
      items: [
        "Ликвидация и рекультивация золоотвалов ТЭЦ-1 и ТЭЦ-4",
        "Рекультивация отстойников и карьеров",
        "Дополнительный слой плодородного грунта (0,2 м) для золоотстойников",
        "Преобразование нарушенных территорий в зеленые зоны",
      ],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=90&auto=format&fit=crop",
    },
  ];

  const greenMeasures = [
    {
      title: "Сеть зеленых коридоров",
      items: [
        "Создание единой сети парков, скверов и садов",
        "Связь через бульвары, пешеходные аллеи и зеленые полосы",
        "Формирование рекреационных зон на основе зеленых зон и водотоков",
        "Парково-рекреационная зона в северо-западной части",
        "Спортивно-рекреационная зона «Карьеры»",
      ],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=90&auto=format&fit=crop",
    },
    {
      title: "ООПТ и охраняемые территории",
      items: [
        "Памятники природы: Березовая роща, Бобачевская роща",
        "Комсомольская роща, Первомайская роща",
        "Организация и озеленение санитарно-защитных зон (СЗЗ)",
        "Озеленение санитарных разрывов от магистралей",
        "Подбор растений с высокой поглотительной способностью",
      ],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=90&auto=format&fit=crop",
    },
    {
      title: "Интеграция с пешеходным каркасом",
      items: [
        "Создание единого пешеходно-велосипедного каркаса",
        "Строительство Третьего пешеходного моста в устье Тьмаки",
        "Продление набережной Волги до Обелиска Победы",
        "Создание общей рекреационно-пешеходной зоны",
        "Комплексное благоустройство с МАФ, освещением, поливом",
      ],
      image: "https://images.unsplash.com/photo-1551524164-6cf77f5e1d6e?w=1200&q=90&auto=format&fit=crop",
    },
  ];

  const keyProjects = [
    {
      name: "Проект «Тьмака-Лазурь — зеленая ось»",
      description: "Ревитализация малых рек с созданием непрерывного парково-рекреационного маршрута",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=90&auto=format&fit=crop",
    },
    {
      name: "Третий пешеходный мост",
      description: "Связь набережной Волги с Обелиском Победы через устье Тьмаки",
      image: "https://images.unsplash.com/photo-1551524164-6cf77f5e1d6e?w=1200&q=90&auto=format&fit=crop",
    },
    {
      name: "Рекультивация золоотвалов",
      description: "Преобразование техногенных территорий ТЭЦ-1 и ТЭЦ-4 в зеленые зоны",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=90&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      {/* Hero секция */}
      <PageSection className="relative overflow-hidden min-h-[50vh] flex items-center bg-gradient-to-br from-water/10 via-digital/5 to-heritage/10">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230f766e' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
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
              <Tag tone="water">Раздел 4.3</Tag>
            </div>
            <Caption className="text-water mb-4 font-semibold">Этап 2. Проектные решения</Caption>
            <Heading as="h1" className="text-4xl md:text-5xl mb-6 text-water">
              Водно-зеленый каркас
            </Heading>
            <Body className="text-xl text-slate-700 mb-4 max-w-3xl">
              Экология и зеленое пространство
            </Body>
            <Body className="text-lg text-slate-600 max-w-3xl">
              Система природоохранных и ландшафтных мероприятий для создания устойчивой и экологически 
              чистой городской среды. Реализация принципа «Дыхание рек».
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
            <div className="w-1 h-16 bg-gradient-to-b from-water to-digital rounded-full" />
            <div>
              <Caption className="text-water mb-2">Ключевые показатели</Caption>
              <Heading as="h2" className="text-3xl">
                Целевые показатели до 2035 года
              </Heading>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpiData.map((kpi, index) => {
              const colorClasses = {
                water: "text-water",
                digital: "text-digital",
                heritage: "text-heritage",
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
                  <Card className="bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 hover:border-water/50 transition-all">
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

      {/* Концептуальные основы */}
      <PageSection className="bg-gradient-to-b from-white to-[color:var(--color-bg)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-water/20 via-digital/10 to-heritage/20 border-2 border-water/30 mb-8">
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-water via-digital to-heritage flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  🌊
                </div>
                <div>
                  <Heading as="h2" className="text-2xl mb-2">Концептуальные основы</Heading>
                  <Body className="text-slate-600">Природно-ландшафтный каркас</Body>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Heading as="h3" className="text-lg mb-3 text-water">Природные оси</Heading>
                  <Body className="text-slate-700 mb-4">
                    Основу каркаса составляют долины рек: <strong>Волга, Тверца, Тьмака</strong>, 
                    а также малые реки и ручьи — <strong>Лазурь, Орша, Межурка, Соминка</strong>.
                  </Body>
                </div>
                <div>
                  <Heading as="h3" className="text-lg mb-3 text-water">Главная задача</Heading>
                  <Body className="text-slate-700 mb-4">
                    Создание <strong>единого непрерывного каркаса зеленых насаждений</strong>, 
                    связывающего все планировочные структуры города и создающего комфортную 
                    экологическую среду проживания.
                  </Body>
                </div>
              </div>
              <Card className="bg-white/80 border-water/30">
                <div className="p-6">
                  <Heading as="h3" className="text-xl mb-3 text-water">Принцип «Дыхание рек»</Heading>
                  <Body className="text-slate-800 leading-relaxed">
                    Превращение набережных Волги и Тьмаки в <strong>непрерывный парково-рекреационный маршрут</strong>, 
                    обеспечивающий пространственную непрерывность природно-ландшафтного каркаса через создание 
                    новых озелененных территорий и интенсивное озеленение застройки.
                  </Body>
                </div>
              </Card>
            </div>
          </Card>

          {/* Визуализация концепции */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=90&auto=format&fit=crop"
                alt="Водно-зеленый каркас"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Heading as="h3" className="text-xl mb-2">Схема-концепт «Дыхание рек»</Heading>
                <Body className="text-slate-700">
                  Визуализация философии проекта: волна, река, листок. Создание непрерывного 
                  парково-рекреационного маршрута вдоль водных артерий города.
                </Body>
              </div>
            </Card>
            <Card className="bg-gradient-to-br from-water/10 to-digital/10 border-2 border-water/30">
              <div className="p-6">
                <Heading as="h3" className="text-xl mb-4">Ключевые принципы</Heading>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-water" />
                    <Body className="font-semibold">Пространственная непрерывность</Body>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-digital" />
                    <Body className="font-semibold">Экологическая безопасность</Body>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-heritage" />
                    <Body className="font-semibold">Рекреационная доступность</Body>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-water" />
                    <Body className="font-semibold">Интеграция с пешеходным каркасом</Body>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
      </PageSection>

      {/* Водный каркас */}
      <PageSection className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-gradient-to-b from-digital to-water rounded-full" />
            <div>
              <Caption className="text-digital mb-2">Водный каркас</Caption>
              <Heading as="h2" className="text-3xl">
                Проектные решения по водному каркасу
              </Heading>
            </div>
          </div>

          <div className="space-y-8">
            {waterMeasures.map((measure, index) => (
              <motion.div
                key={measure.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                  <Card className="overflow-hidden h-full">
                    <img
                      src={measure.image}
                      alt={measure.title}
                      className="w-full h-80 object-cover"
                      loading="lazy"
                    />
                  </Card>
                </div>
                <div className={index % 2 === 0 ? "order-2" : "order-1"}>
                  <Heading as="h3" className="text-2xl mb-4 text-water">{measure.title}</Heading>
                  <ul className="space-y-3">
                    {measure.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <span className="text-water mt-1 font-bold">•</span>
                        <Body className="text-slate-700">{item}</Body>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </PageSection>

      {/* Зеленое пространство */}
      <PageSection className="bg-gradient-to-b from-white to-[color:var(--color-bg)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-gradient-to-b from-water to-heritage rounded-full" />
            <div>
              <Caption className="text-water mb-2">Зеленое пространство</Caption>
              <Heading as="h2" className="text-3xl">
                Развитие зеленого пространства
              </Heading>
            </div>
          </div>

          <div className="space-y-8 mb-8">
            {greenMeasures.map((measure, index) => (
              <motion.div
                key={measure.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                  <Card className="overflow-hidden h-full">
                    <img
                      src={measure.image}
                      alt={measure.title}
                      className="w-full h-80 object-cover"
                      loading="lazy"
                    />
                  </Card>
                </div>
                <div className={index % 2 === 0 ? "order-2" : "order-1"}>
                  <Heading as="h3" className="text-2xl mb-4 text-water">{measure.title}</Heading>
                  <ul className="space-y-3">
                    {measure.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <span className="text-water mt-1 font-bold">•</span>
                        <Body className="text-slate-700">{item}</Body>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </PageSection>

      {/* Ключевые проекты */}
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
              <Caption className="text-heritage mb-2">Ключевые проекты</Caption>
              <Heading as="h2" className="text-3xl">
                Якорные проекты развития
              </Heading>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
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
                    <Tag tone="water" className="mb-2">Якорный проект</Tag>
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
              <Caption className="text-digital mb-2">Картографические материалы</Caption>
              <Heading as="h2" className="text-3xl">
                ГИС-слои и схемы планирования
              </Heading>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Карта зеленых территорий */}
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[400px] flex items-center justify-center">
              <div className="text-center p-6">
                <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <Heading as="h3" className="text-xl text-slate-600 mb-2">
                  Карта зеленых территорий и рекреации
                </Heading>
                <Body className="text-slate-500 mb-4">
                  Зеленый каркас: существующие и планируемые зеленые зоны общего пользования, 
                  экокоридоры, ООПТ (Березовая роща, Первомайская роща)
                </Body>
                <Caption className="text-slate-400">Основной разворот раздела</Caption>
              </div>
            </Card>

            {/* Карта водных объектов */}
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[400px] flex items-center justify-center">
              <div className="text-center p-6">
                <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <Heading as="h3" className="text-xl text-slate-600 mb-2">
                  Водные объекты и инженерная защита
                </Heading>
                <Body className="text-slate-500 mb-4">
                  Гидросеть, зоны затопления 1%, ВОЗ и ЗСО, инженерная защита, 
                  трассировка каналов для проточности Тьмаки/Лазури
                </Body>
                <Caption className="text-slate-400">Аналитическая карта ограничений</Caption>
              </div>
            </Card>

            {/* Схема рекультивации */}
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[400px] flex items-center justify-center">
              <div className="text-center p-6">
                <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <Heading as="h3" className="text-xl text-slate-600 mb-2">
                  Рекультивация и загрязнение
                </Heading>
                <Body className="text-slate-500 mb-4">
                  Техногенные риски: золоотвалы ТЭЦ-1, ТЭЦ-4, карьеры, несанкционированные свалки. 
                  Зоны СЗЗ промышленных предприятий
                </Body>
                <Caption className="text-slate-400">Схематическая карта</Caption>
              </div>
            </Card>
          </div>
        </motion.div>
      </PageSection>

      {/* Дополнительные иллюстрации */}
      <PageSection className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-gradient-to-b from-water to-digital rounded-full" />
            <div>
              <Caption className="text-water mb-2">Визуализация проектов</Caption>
              <Heading as="h2" className="text-3xl">
                Ключевые проекты и решения
              </Heading>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Ревитализация набережной */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=90&auto=format&fit=crop"
                alt="Набережная Тьмаки"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="water" className="mb-2">Ревитализация</Tag>
                <Heading as="h3" className="text-lg mb-2">Набережная Тьмаки</Heading>
                <Body className="text-sm text-slate-600">
                  Рендер благоустроенного пилотного участка с велодорожками, малыми архитектурными 
                  формами и озеленением. Проект «Тьмака-Лазурь — зеленая ось».
                </Body>
              </div>
            </Card>

            {/* Пешеходный мост */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551524164-6cf77f5e1d6e?w=1200&q=90&auto=format&fit=crop"
                alt="Третий пешеходный мост"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="water" className="mb-2">Интеграция</Tag>
                <Heading as="h3" className="text-lg mb-2">Третий пешеходный мост</Heading>
                <Body className="text-sm text-slate-600">
                  Рендер моста в устье Тьмаки, связывающего набережную Волги с Обелиском Победы. 
                  Создание общей рекреационно-пешеходной зоны.
                </Body>
              </div>
            </Card>

            {/* Экология */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=90&auto=format&fit=crop"
                alt="Экология"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="water" className="mb-2">Экология</Tag>
                <Heading as="h3" className="text-lg mb-2">Зеленая энергия</Heading>
                <Body className="text-sm text-slate-600">
                  Инфографика «зеленая энергия» или «обращение с отходами»: цепочка сбор → 
                  сортировка → переработка. LED-освещение, счетчики тепла.
                </Body>
              </div>
            </Card>
          </div>
        </motion.div>
      </PageSection>
    </div>
  );
};

export default EcologyPage;

