import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PageSection } from "../components/layout/PageSection";
import { Heading, Body, Caption } from "../components/ui/Typography";
import { Card } from "../components/ui/Card";
import { Tag } from "../components/ui/Tag";
import { Button } from "../components/ui/Button";

export const PublicSpacesPage: React.FC = () => {
  const navigate = useNavigate();

  const kpiData = [
    { label: "Публичных пространств", value: "+35 га", target: "2035", color: "heritage" },
    { label: "Пешеходных мостов", value: "3", target: "2035", color: "water" },
    { label: "Новых центров", value: "2", target: "2035", color: "digital" },
    { label: "Рекреационных зон", value: "5+", target: "2035", color: "water" },
  ];

  const centralZoneMeasures = [
    {
      title: "Пешеходизация Старого Волжского моста",
      description: "Быстрая победа — создание уникальной пешеходной и велосипедной прогулочной зоны",
      items: [
        "Перевод моста в пешеходный режим после ввода новых мостов",
        "Соединение рекреационных зон набережных Волги",
        "Сценарный режим (по выходным или сезонно) на первом этапе",
        "Создание знаковой зоны для встреч и прогулок",
      ],
      image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop",
      isQuickWin: true,
    },
    {
      title: "Благоустройство площадей и бульваров",
      description: "Редизайн ключевых общественных пространств центра",
      items: [
        "Компактный редизайн Бульвара Радищева с озеленением и МАФ",
        "Обновление Тверской площади в увязке с бульваром",
        "Реконструкция парка Победы",
        "Обновление Городского сада и аттракционов",
      ],
      image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop",
      isQuickWin: false,
    },
    {
      title: "Пешеходные связи через барьеры",
      description: "Создание непрерывности пешеходной доступности",
      items: [
        "Второй пешеходный мост (продолжение бульвара Гусева)",
        "Третий пешеходный мост в устье реки Тьмаки",
        "Связь набережной Волги с Островом Памяти и Обелиском Победы",
        "Соединение рекреационных территорий Южного и Центрального районов",
      ],
      image: "https://images.unsplash.com/photo-1551524164-6cf77f5e1d6e?w=1200&q=90&auto=format&fit=crop",
      isQuickWin: false,
    },
  ];

  const newCenters = [
    {
      name: "Тверь-Экспо",
      description: "Выставочный центр в Северной зоне (Заволжье) на территории «Химбазы». Новый общегородской центр для выставок и мероприятий.",
      image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop",
      location: "Северная зона (Заволжье)",
    },
    {
      name: "Тверь-Сити",
      description: "Деловой центр в Южной зоне (Пролетарский район), интегрированный с железнодорожным и автомобильным вокзалами. Новый деловой и финансовый хаб.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop",
      location: "Южная зона (Пролетарский)",
    },
  ];

  const culturalObjects = [
    "Инновационный центр",
    "Конгресс-холл",
    "Планетарий",
    "Концертно-зрелищный центр",
    "Детская школа искусств",
  ];

  const creativeMeasures = [
    {
      title: "Ревитализация набережных",
      description: "Быстрая победа — пилотный проект благоустройства",
      items: [
        "Благоустройство набережной реки Тьмаки (1,2–2 км)",
        "Обустройство освещения, качественных покрытий, лестниц и МАФ",
        "Благоустройство набережной Волги",
        "Реализация концепции «Дыхание рек»",
      ],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=90&auto=format&fit=crop",
      isQuickWin: true,
    },
    {
      title: "Креативные кластеры",
      description: "Развитие креативной среды и событийной экономики",
      items: [
        "Создание креативных кампус-кластеров",
        "Коворкинги для инновационного предпринимательства",
        "Развитие арт-кварталов",
        "Объекты культуры: музеи, выставочные залы, дома культуры",
      ],
      image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop",
      isQuickWin: false,
    },
    {
      title: "Спортивные площадки",
      description: "Развитие спортивной инфраструктуры",
      items: [
        "Строительство и модернизация спортивных площадок по месту жительства",
        "Реализация проектов ППМИ (Программа поддержки местных инициатив)",
        "Реконструкция стадиона имени Вагжанова",
        "Спорткомплекс на 10 000 мест в Южном районе",
      ],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=90&auto=format&fit=crop",
      isQuickWin: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      {/* Hero секция */}
      <PageSection className="relative overflow-hidden min-h-[50vh] flex items-center bg-gradient-to-br from-heritage/10 via-water/5 to-digital/10">
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
              <Tag tone="heritage">Раздел 4.4</Tag>
            </div>
            <Caption className="text-heritage mb-4 font-semibold">Этап 2. Проектные решения</Caption>
            <Heading as="h1" className="text-4xl md:text-5xl mb-6 text-heritage">
              Общественные пространства
            </Heading>
            <Body className="text-xl text-slate-700 mb-4 max-w-3xl">
              Площади, парки и места для встреч
            </Body>
            <Body className="text-lg text-slate-600 max-w-3xl">
              Ключевой элемент СЦ-2 Пространство-2035: создание комфортной, безопасной и дружелюбной 
              городской среды на основе полицентрического развития и непрерывного природно-ландшафтного каркаса.
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
            <div className="w-1 h-16 bg-gradient-to-b from-heritage to-water rounded-full" />
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

      {/* Концептуальные основы */}
      <PageSection className="bg-gradient-to-b from-white to-[color:var(--color-bg)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-heritage/20 via-water/10 to-digital/20 border-2 border-heritage/30 mb-8">
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-heritage via-water to-digital flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  🌳
                </div>
                <div>
                  <Heading as="h2" className="text-2xl mb-2">Формирование единой сети</Heading>
                  <Body className="text-slate-600">Концепция «Дыхание рек»</Body>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <Card className="bg-white/80 border-heritage/30">
                  <div className="p-6">
                    <Heading as="h3" className="text-lg mb-3 text-heritage">Принцип связанности</Heading>
                    <Body className="text-slate-700">
                      Все зеленые зоны и рекреационные объекты объединяются в целостный природный каркас 
                      с <strong>пешеходной и велосипедной доступностью</strong> каждого объекта.
                    </Body>
                  </div>
                </Card>
                <Card className="bg-white/80 border-water/30">
                  <div className="p-6">
                    <Heading as="h3" className="text-lg mb-3 text-water">«Дыхание рек»</Heading>
                    <Body className="text-slate-700">
                      Набережные Волги и Тьмаки, долина Лазури превратятся в 
                      <strong> непрерывный парково-рекреационный маршрут</strong>, основу для средового туризма.
                    </Body>
                  </div>
                </Card>
                <Card className="bg-white/80 border-digital/30">
                  <div className="p-6">
                    <Heading as="h3" className="text-lg mb-3 text-digital">15-минутный центр</Heading>
                    <Body className="text-slate-700">
                      В Центральной зоне реализуется концепция <strong>«15-минутного центра»</strong>, 
                      где все базовые сервисы и публичные пространства доступны в пешей досягаемости.
                    </Body>
                  </div>
                </Card>
              </div>
            </div>
          </Card>

          {/* Визуализация концепции */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop"
                alt="Полицентрическое развитие"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Heading as="h3" className="text-xl mb-2">Полицентрическое развитие</Heading>
                <Body className="text-slate-700">
                  Трансформация моноцентрической структуры в полицентрическую, где новые центры активности 
                  равномерно распределяют нагрузку, а парки и скверы связываются в единую сеть.
                </Body>
              </div>
            </Card>
            <Card className="bg-gradient-to-br from-heritage/10 to-water/10 border-2 border-heritage/30">
              <div className="p-6">
                <Heading as="h3" className="text-xl mb-4">Ключевые принципы</Heading>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-heritage" />
                    <Body className="font-semibold">Пространственная непрерывность</Body>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-water" />
                    <Body className="font-semibold">Пешеходная доступность</Body>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-digital" />
                    <Body className="font-semibold">Полицентричность</Body>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-heritage" />
                    <Body className="font-semibold">Креативная среда</Body>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
      </PageSection>

      {/* Регенерация исторического ядра */}
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
              <Caption className="text-digital mb-2">Центральная зона</Caption>
              <Heading as="h2" className="text-3xl">
                Регенерация исторического ядра
              </Heading>
            </div>
          </div>

          <div className="space-y-8">
            {centralZoneMeasures.map((measure, index) => (
              <motion.div
                key={measure.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                  <Card className="overflow-hidden h-full relative">
                    {measure.isQuickWin && (
                      <div className="absolute top-4 right-4 z-10">
                        <Tag tone="heritage" className="bg-white/90 backdrop-blur-sm">
                          Быстрая победа
                        </Tag>
                      </div>
                    )}
                    <img
                      src={measure.image}
                      alt={measure.title}
                      className="w-full h-80 object-cover"
                      loading="lazy"
                    />
                  </Card>
                </div>
                <div className={index % 2 === 0 ? "order-2" : "order-1"}>
                  <Heading as="h3" className="text-2xl mb-4 text-heritage">{measure.title}</Heading>
                  <Body className="text-slate-700 mb-4">
                    {measure.description}
                  </Body>
                  <ul className="space-y-3">
                    {measure.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <span className="text-heritage mt-1 font-bold">•</span>
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

      {/* Новые центры притяжения */}
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
              <Caption className="text-heritage mb-2">Якорные проекты</Caption>
              <Heading as="h2" className="text-3xl">
                Новые центры притяжения
              </Heading>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {newCenters.map((center, index) => (
              <motion.div
                key={center.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full">
                  <img
                    src={center.image}
                    alt={center.name}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <Tag tone="digital" className="mb-2">Якорный проект</Tag>
                    <Heading as="h3" className="text-xl mb-2">{center.name}</Heading>
                    <Body className="text-sm text-slate-600 mb-3">{center.description}</Body>
                    <Body className="text-xs text-slate-500">
                      <strong>Расположение:</strong> {center.location}
                    </Body>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Культурные объекты к 900-летию */}
          <Card className="bg-gradient-to-br from-heritage/10 to-digital/10 border-2 border-heritage/30">
            <div className="p-8">
              <Heading as="h3" className="text-2xl mb-4 text-heritage">
                Культурные и досуговые объекты к 900-летию
              </Heading>
              <div className="grid md:grid-cols-3 gap-4">
                {culturalObjects.map((object, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-heritage" />
                    <Body className="font-semibold">{object}</Body>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </PageSection>

      {/* Благоустройство и креативная среда */}
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
              <Caption className="text-water mb-2">Креативная среда</Caption>
              <Heading as="h2" className="text-3xl">
                Благоустройство и развитие
              </Heading>
            </div>
          </div>

          <div className="space-y-8">
            {creativeMeasures.map((measure, index) => (
              <motion.div
                key={measure.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                  <Card className="overflow-hidden h-full relative">
                    {measure.isQuickWin && (
                      <div className="absolute top-4 right-4 z-10">
                        <Tag tone="heritage" className="bg-white/90 backdrop-blur-sm">
                          Быстрая победа
                        </Tag>
                      </div>
                    )}
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
                  <Body className="text-slate-700 mb-4">
                    {measure.description}
                  </Body>
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

      {/* Картографические материалы */}
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
              <Caption className="text-digital mb-2">Картографические материалы</Caption>
              <Heading as="h2" className="text-3xl">
                ГИС-слои и схемы планирования
              </Heading>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Схема публичных пространств */}
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[400px] flex items-center justify-center">
              <div className="text-center p-6">
                <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <Heading as="h3" className="text-xl text-slate-600 mb-2">
                  Публичные пространства и Водно-зеленый каркас
                </Heading>
                <Body className="text-slate-500 mb-4">
                  Парки культуры и отдыха, скверы, бульвары, ООПТ, зоны благоустройства набережных. 
                  Непрерывный зеленый каркас и его связи.
                </Body>
                <Caption className="text-slate-400">Основной разворот раздела</Caption>
              </div>
            </Card>

            {/* Карта пешеходного каркаса */}
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[400px] flex items-center justify-center">
              <div className="text-center p-6">
                <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <Heading as="h3" className="text-xl text-slate-600 mb-2">
                  Пешеходный каркас и центры притяжения
                </Heading>
                <Body className="text-slate-500 mb-4">
                  Единый пешеходно-велосипедный каркас, расположение Тверь-Экспо и Тверь-Сити, 
                  Третий пешеходный мост, пешеходная зона Старого Волжского моста.
                </Body>
                <Caption className="text-slate-400">Схема-концепция</Caption>
              </div>
            </Card>

            {/* Схема социального обслуживания */}
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[400px] flex items-center justify-center md:col-span-2">
              <div className="text-center p-6">
                <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <Heading as="h3" className="text-xl text-slate-600 mb-2">
                  Социальное и культурное обслуживание
                </Heading>
                <Body className="text-slate-500 mb-4">
                  Карта «белые пятна» и места строительства новых культурно-досуговых центров, 
                  спортивно-концертных комплексов. Радиус доступности 500 м для пешей доступности.
                </Body>
                <Caption className="text-slate-400">Карта обеспеченности</Caption>
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
            <div className="w-1 h-16 bg-gradient-to-b from-heritage to-water rounded-full" />
            <div>
              <Caption className="text-heritage mb-2">Визуализация проектов</Caption>
              <Heading as="h2" className="text-3xl">
                Ключевые проекты и решения
              </Heading>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Пешеходный мост */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop"
                alt="Пешеходный Старый Волжский мост"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="heritage" className="mb-2">Быстрая победа</Tag>
                <Heading as="h3" className="text-lg mb-2">Пешеходный мост</Heading>
                <Body className="text-sm text-slate-600">
                  Рендер пешеходного Старого Волжского моста — визуализация «Быстрой победы» 
                  и новой знаковой зоны для встреч.
                </Body>
              </div>
            </Card>

            {/* Бульвар Радищева */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop"
                alt="Бульвар Радищева"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="heritage" className="mb-2">Редизайн</Tag>
                <Heading as="h3" className="text-lg mb-2">Бульвар Радищева</Heading>
                <Body className="text-sm text-slate-600">
                  Коллаж «До/После»: компактный редизайн с озеленением, уличной мебелью, 
                  качественным покрытием.
                </Body>
              </div>
            </Card>

            {/* Набережная Тьмаки */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=90&auto=format&fit=crop"
                alt="Набережная Тьмаки"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="water" className="mb-2">Быстрая победа</Tag>
                <Heading as="h3" className="text-lg mb-2">Набережная Тьмаки</Heading>
                <Body className="text-sm text-slate-600">
                  Рендер пилотного участка: визуализация концепции «Дыхание рек» с пешеходными/велосипедными 
                  дорожками, спусками к воде и МАФ.
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
                  Концептуальный рендер нового общественного центра как новой точки притяжения 
                  и места для встреч.
                </Body>
              </div>
            </Card>

            {/* Третий пешеходный мост */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551524164-6cf77f5e1d6e?w=1200&q=90&auto=format&fit=crop"
                alt="Третий пешеходный мост"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="water" className="mb-2">Связность</Tag>
                <Heading as="h3" className="text-lg mb-2">Третий пешеходный мост</Heading>
                <Body className="text-sm text-slate-600">
                  Схема моста в устье Тьмаки: иллюстрация решения проблемы связности и доступа 
                  к Обелиску Победы.
                </Body>
              </div>
            </Card>

            {/* Спортивная площадка */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=90&auto=format&fit=crop"
                alt="Спортивная площадка"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="heritage" className="mb-2">ППМИ</Tag>
                <Heading as="h3" className="text-lg mb-2">Спортивная площадка</Heading>
                <Body className="text-sm text-slate-600">
                  Фото/рендер обновленной спортивной площадки: демонстрация реализации проектов 
                  ППМИ по ремонту площадок шаговой доступности.
                </Body>
              </div>
            </Card>
          </div>
        </motion.div>
      </PageSection>
    </div>
  );
};

export default PublicSpacesPage;

