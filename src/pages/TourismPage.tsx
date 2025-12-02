import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PageSection } from "../components/layout/PageSection";
import { Heading, Body, Caption } from "../components/ui/Typography";
import { Card } from "../components/ui/Card";
import { Tag } from "../components/ui/Tag";
import { Button } from "../components/ui/Button";

export const TourismPage: React.FC = () => {
  const navigate = useNavigate();

  const kpiData = [
    { label: "Объектов культурного наследия", value: "500+", target: "2035", color: "heritage" },
    { label: "Отреставрированных ОКН", value: "70%", target: "2035", color: "heritage" },
    { label: "Обеспеченность тротуарами", value: "100%", target: "2035", color: "water" },
    { label: "Рост турпотока", value: "+50%", target: "3 года", color: "digital" },
  ];

  const competitiveAdvantages = [
    {
      title: "Историческое и культурное наследие",
      description: "Более 500 объектов культурного наследия (ОКН)",
      icon: "🏛️",
      color: "heritage",
      details: [
        "Уникальный город с богатым культурным и историческим наследием",
        "Сохранение исторического ядра — основа для культурно-познавательного туризма",
        "Реализация программы реставрации и адаптивного использования ОКН",
      ],
      image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop",
    },
    {
      title: "Географическое положение",
      description: "Между Москвой и Санкт-Петербургом, на трех реках",
      icon: "🌊",
      color: "water",
      details: [
        "Выгодное географическое положение между двумя столицами",
        "Прибрежное положение на Волге, Тверце и Тьмаке",
        "Транзитный и рекреационный потенциал",
        "Развитие водного туризма и речных маршрутов",
      ],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=90&auto=format&fit=crop",
    },
    {
      title: "Рыночный спрос",
      description: "Устойчивый спрос на посещение объектов наследия",
      icon: "📈",
      color: "digital",
      details: [
        "Устойчивый спрос на посещение объектов исторического и культурного наследия",
        "Рост числа коллективных средств размещения (гостиниц, кафе и ресторанов)",
        "Потенциал для развития делового и событийного туризма",
      ],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop",
    },
  ];

  const thematicRoutes = [
    {
      name: "«Исток»",
      description: "Природа, начало Волги, экотуризм",
      icon: "🌿",
      color: "water",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=90&auto=format&fit=crop",
    },
    {
      name: "«Купеческий путь»",
      description: "История торговли, козёл, рынки",
      icon: "🏪",
      color: "heritage",
      image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop",
    },
    {
      name: "«За три моря»",
      description: "Маршрут, связанный с Афанасием Никитиным",
      icon: "⛵",
      color: "water",
      image: "https://images.unsplash.com/photo-1551524164-6cf77f5e1d6e?w=1200&q=90&auto=format&fit=crop",
    },
    {
      name: "«Императорский»",
      description: "Дворцы, усадьбы, архитектура",
      icon: "👑",
      color: "heritage",
      image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop",
    },
  ];

  const tourismInfrastructure = [
    {
      title: "Водный туризм",
      description: "Развитие пассажирских перевозок и рекреационного потенциала",
      items: [
        "Дальнейшее развитие пассажирских перевозок",
        "Строительство дополнительных причалов",
        "Развитие речных трамваев и маломерных судов",
        "Восстановление общественного речного транспорта",
        "Использование рекреационного потенциала водных объектов",
      ],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=90&auto=format&fit=crop",
    },
    {
      title: "Цифровой гид (MaaS)",
      description: "Единый цифровой сервис для мобильности и туризма",
      items: [
        "Создание единого цифрового сервиса для мобильности (MaaS)",
        "«Цифровой гид» по Твери для туристов",
        "Маршруты по достопримечательностям",
        "Расписание речных прогулок",
        "Возможность оплаты турбилета (проезд + музеи)",
        "Мобильное приложение «Тверь в кармане»",
      ],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop",
    },
    {
      title: "Развитие аэропорта Мигалово",
      description: "Международный low cost аэропорт",
      items: [
        "Использование потенциала инфраструктуры СПАД и ВСМ",
        "Развитие международного low cost аэропорта в Мигалово",
        "Прямая связь со Скандинавией и Европой",
        "Развитие транзитного туризма",
      ],
      image: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=1200&q=90&auto=format&fit=crop",
    },
    {
      title: "Специализированные виды туризма",
      description: "Религиозный, экологический, лечебно-оздоровительный",
      items: [
        "Религиозный (паломнический) туризм",
        "Экологический туризм (велосипедные, пешие, водные маршруты)",
        "Лечебно-оздоровительный туризм (косметология, стоматология)",
        "Развитие событийного туризма",
      ],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=90&auto=format&fit=crop",
    },
  ];

  const keyProjects = [
    {
      name: "Бизнес-центр «Тверь-Сити»",
      description: "Бизнес-кластер, интегрированный с двумя вокзалами, с гостиничной инфраструктурой для делового туризма",
      image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop",
      isAnchor: true,
    },
    {
      name: "Выставочный центр «Тверь-Экспо»",
      description: "Новый центр в Заволжье для фестивалей, конференций, выставок",
      image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop",
      isAnchor: true,
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
              <Tag tone="heritage">Раздел 4.8</Tag>
            </div>
            <Caption className="text-heritage mb-4 font-semibold">Этап 2. Проектные решения</Caption>
            <Heading as="h1" className="text-4xl md:text-5xl mb-6 text-heritage">
              Туризм
            </Heading>
            <Body className="text-xl text-slate-700 mb-4 max-w-3xl">
              Туристический потенциал развития
            </Body>
            <Body className="text-lg text-slate-600 max-w-3xl">
              Капитализация богатого историко-культурного и природного наследия Твери, создание 
              современной туристической инфраструктуры и конкурентоспособного комплексного туристического продукта.
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
                        <Heading as="h3" className={`text-3xl font-bold ${colorClass} kpi-numeric`}>
                          {kpi.value}
                        </Heading>
                      </div>
                      <Body className="text-xs text-slate-500">к {kpi.target}</Body>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </PageSection>

      {/* Конкурентные преимущества */}
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
              <Caption className="text-digital mb-2">Стратегический потенциал</Caption>
              <Heading as="h2" className="text-3xl">
                Конкурентные преимущества
              </Heading>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {competitiveAdvantages.map((advantage, index) => {
              const colorClasses = {
                heritage: "border-heritage/30 bg-gradient-to-br from-amber-50/50 to-amber-100/30",
                digital: "border-digital/30 bg-gradient-to-br from-blue-50/50 to-blue-100/30",
                water: "border-water/30 bg-gradient-to-br from-teal-50/50 to-teal-100/30",
              };
              const colorClass = colorClasses[advantage.color as keyof typeof colorClasses] || "";
              const textColorClasses = {
                heritage: "text-heritage",
                digital: "text-digital",
                water: "text-water",
              };
              const textColorClass = textColorClasses[advantage.color as keyof typeof textColorClasses] || "";

              return (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`${colorClass} border-2 h-full`}>
                    <div className="p-6">
                      <div className="text-4xl mb-4">{advantage.icon}</div>
                      <Heading as="h3" className={`text-xl mb-2 ${textColorClass}`}>
                        {advantage.title}
                      </Heading>
                      <Body className="text-slate-700 mb-4 text-sm">{advantage.description}</Body>
                      <ul className="space-y-2">
                        {advantage.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-2">
                            <span className={`${textColorClass} mt-1 font-bold text-xs`}>•</span>
                            <Body className="text-slate-700 text-xs">{detail}</Body>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </PageSection>

      {/* Средовой туризм */}
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
              <Caption className="text-water mb-2">Проектные решения</Caption>
              <Heading as="h2" className="text-3xl">
                Развитие средового туризма и пешеходный каркас
              </Heading>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-water/20 via-heritage/10 to-digital/20 border-2 border-water/30 mb-8">
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <Heading as="h3" className="text-xl mb-4 text-water">Пешеходная сеть</Heading>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-water mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Обеспечение тротуарами в туристическом центре до <strong>100% нормативного уровня</strong> к 2035 году</Body>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-water mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Туристические маршруты (вокзал – Тверской проспект – набережная) с качественными тротуарами и пандусами</Body>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-water mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Создание непрерывного парково-рекреационного маршрута</Body>
                    </li>
                  </ul>
                </div>
                <div>
                  <Heading as="h3" className="text-xl mb-4 text-water">Регенерация наследия</Heading>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-water mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Программа реставрации и адаптивного использования ОКН</Body>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-water mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Целевой показатель: <strong>70% ОКН</strong> отреставрированы/адаптированы к 2035 году</Body>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-water mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Архитектурно-ландшафтное оформление долин рек Волги, Тьмаки, Тверцы</Body>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-water mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Набережные и мосты как визитная карточка города</Body>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </PageSection>

      {/* Тематические маршруты */}
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
              <Caption className="text-heritage mb-2">Специализированные маршруты</Caption>
              <Heading as="h2" className="text-3xl">
                Новые точки притяжения и маршруты
              </Heading>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {thematicRoutes.map((route, index) => {
              const colorClasses = {
                heritage: "border-heritage/30 bg-gradient-to-br from-amber-50/50 to-amber-100/30",
                water: "border-water/30 bg-gradient-to-br from-teal-50/50 to-teal-100/30",
              };
              const colorClass = colorClasses[route.color as keyof typeof colorClasses] || "";
              const textColorClasses = {
                heritage: "text-heritage",
                water: "text-water",
              };
              const textColorClass = textColorClasses[route.color as keyof typeof textColorClasses] || "";

              return (
                <motion.div
                  key={route.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`${colorClass} border-2 overflow-hidden h-full`}>
                    <img
                      src={route.image}
                      alt={route.name}
                      className="w-full h-32 object-cover"
                      loading="lazy"
                    />
                    <div className="p-6">
                      <div className="text-3xl mb-3">{route.icon}</div>
                      <Heading as="h3" className={`text-lg mb-2 ${textColorClass}`}>
                        {route.name}
                      </Heading>
                      <Body className="text-sm text-slate-700">{route.description}</Body>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <Card className="bg-gradient-to-br from-digital/10 to-water/10 border-2 border-digital/30 mb-8">
            <div className="p-8">
              <Heading as="h3" className="text-2xl mb-4 text-digital">
                Культурно-познавательный и деловой туризм
              </Heading>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Body className="text-slate-700 mb-3">
                    <strong>Главный экскурсионный пешеходный маршрут</strong> по Твери, направленный 
                    на популяризацию достопримечательностей.
                  </Body>
                  <Body className="text-slate-700">
                    <strong>Деловой и событийный туризм</strong> через строительство крупных объектов, 
                    генерирующих события (конференции, выставки, фестивали).
                  </Body>
                </div>
                <div>
                  <Body className="text-slate-700 mb-3">
                    Развитие <strong>культурно-познавательного туризма</strong> с акцентом на историческое 
                    наследие и архитектуру.
                  </Body>
                  <Body className="text-slate-700">
                    Создание <strong>туристических якорей</strong> для увеличения туристического потока 
                    и привлечения деловых туристов.
                  </Body>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </PageSection>

      {/* Туристическая инфраструктура */}
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
              <Caption className="text-digital mb-2">Инфраструктура</Caption>
              <Heading as="h2" className="text-3xl">
                Туристическая инфраструктура
              </Heading>
            </div>
          </div>

          <div className="space-y-8">
            {tourismInfrastructure.map((infra, index) => (
              <motion.div
                key={infra.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                  <Card className="overflow-hidden h-full">
                    <img
                      src={infra.image}
                      alt={infra.title}
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                  </Card>
                </div>
                <div className={index % 2 === 0 ? "order-2" : "order-1"}>
                  <Heading as="h3" className="text-2xl mb-4 text-water">{infra.title}</Heading>
                  <Body className="text-slate-700 mb-4">
                    {infra.description}
                  </Body>
                  <ul className="space-y-3">
                    {infra.items.map((item, itemIndex) => (
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
              <Caption className="text-heritage mb-2">Якорные проекты</Caption>
              <Heading as="h2" className="text-3xl">
                Деловой и событийный туризм
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
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    {project.isAnchor && <Tag tone="heritage" className="mb-2">Якорный проект</Tag>}
                    <Heading as="h3" className="text-xl mb-2">{project.name}</Heading>
                    <Body className="text-sm text-slate-600">{project.description}</Body>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </PageSection>

      {/* Брендинг и маркетинг */}
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
              <Caption className="text-digital mb-2">Брендинг</Caption>
              <Heading as="h2" className="text-3xl">
                Брендинг и маркетинг
              </Heading>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-heritage/20 via-water/10 to-digital/20 border-2 border-heritage/30">
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <Heading as="h3" className="text-xl mb-4 text-heritage">Основной бренд</Heading>
                  <Body className="text-slate-700 mb-4">
                    Главная концепция айдентики – <strong>«Исток Великой Реки»</strong>.
                  </Body>
                  <Body className="text-slate-700 mb-4">
                    Слоган: <strong>"Тверь — где начинается Россия"</strong>.
                  </Body>
                  <Body className="text-slate-700">
                    Цель: <strong>рост турпотока на +50% через 3 года</strong> и вхождение Твери 
                    в <strong>топ-20 городов</strong> для посещения.
                  </Body>
                </div>
                <div>
                  <Heading as="h3" className="text-xl mb-4 text-heritage">Промоушн и цифровые продукты</Heading>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-heritage mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Создание, актуализация и тиражирование информационных материалов</Body>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-heritage mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Печатная и сувенирная продукция с фирменной айдентикой города</Body>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-heritage mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Создание программных продуктов/приложений (например, <strong>«Тверь в кармане»</strong>)</Body>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-heritage mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Повышение туристской привлекательности через цифровые решения</Body>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
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
            {/* Карта туристического каркаса */}
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[400px] flex items-center justify-center">
              <div className="text-center p-6">
                <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <Heading as="h3" className="text-xl text-slate-600 mb-2">
                  Туристический и Культурный Каркас
                </Heading>
                <Body className="text-slate-500 mb-4">
                  Объекты культурного наследия (ОКН): более 500 ОКН, зоны охраны. Туристические якоря: 
                  Тверь-Сити, Тверь-Экспо. Культурные объекты: музеи, театры, Дворцы культуры.
                </Body>
                <Caption className="text-slate-400">Основной разворот</Caption>
              </div>
            </Card>

            {/* Схема маршрутов */}
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[400px] flex items-center justify-center">
              <div className="text-center p-6">
                <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <Heading as="h3" className="text-xl text-slate-600 mb-2">
                  Туристические Маршруты и Навигация
                </Heading>
                <Body className="text-slate-500 mb-4">
                  Тематические маршруты («Путь Афанасия», «Императорский маршрут»). Водный туризм: 
                  места размещения пассажирских пристаней. Пешеходные оси с 100% обеспеченностью тротуарами.
                </Body>
                <Caption className="text-slate-400">Схематичный план</Caption>
              </div>
            </Card>

            {/* Карта рекреационного потенциала */}
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[400px] flex items-center justify-center md:col-span-2">
              <div className="text-center p-6">
                <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <Heading as="h3" className="text-xl text-slate-600 mb-2">
                  Рекреационный Потенциал (Экотуризм)
                </Heading>
                <Body className="text-slate-500 mb-4">
                  Природный каркас: долины рек Волга, Тверца, Тьмака, Лазурь. ООПТ: парки, рощи, 
                  спортивно-рекреационные зоны. Экологические маршруты: велосипедные и водные маршруты 
                  для экотуризма.
                </Body>
                <Caption className="text-slate-400">Врезка «Зеленая ось»</Caption>
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
            {/* Визуализация бренда */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop"
                alt="Визуализация бренда"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="heritage" className="mb-2">Брендинг</Tag>
                <Heading as="h3" className="text-lg mb-2">Логотип «Тверь-900»</Heading>
                <Body className="text-sm text-slate-600">
                  Визуализация бренда со слоганом «соединяя столицы, создавая своё» и 
                  «Тверь — где начинается Россия».
                </Body>
              </div>
            </Card>

            {/* Исторический объект */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop"
                alt="Исторический объект"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="heritage" className="mb-2">Реставрация</Tag>
                <Heading as="h3" className="text-lg mb-2">Отреставрированный ОКН</Heading>
                <Body className="text-sm text-slate-600">
                  Фото или рендер отреставрированного ОКН (например, Путевого дворца) или коллаж 
                  «До/После» применения Дизайн-кода.
                </Body>
              </div>
            </Card>

            {/* Набережная */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=90&auto=format&fit=crop"
                alt="Набережная"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="water" className="mb-2">Благоустройство</Tag>
                <Heading as="h3" className="text-lg mb-2">Сцена на набережной</Heading>
                <Body className="text-sm text-slate-600">
                  Рендер благоустроенного участка набережной Волги или Тьмаки, адаптированного для 
                  пешеходного движения и речных прогулок.
                </Body>
              </div>
            </Card>

            {/* Цифровой гид */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop"
                alt="Цифровой гид"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="digital" className="mb-2">Цифровизация</Tag>
                <Heading as="h3" className="text-lg mb-2">Цифровой гид</Heading>
                <Body className="text-sm text-slate-600">
                  Скриншот мобильного приложения (MaaS) или интерактивного стенда с туристической 
                  навигацией. Приложение «Тверь в кармане».
                </Body>
              </div>
            </Card>

            {/* Сувенирная продукция */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=90&auto=format&fit=crop"
                alt="Сувенирная продукция"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="heritage" className="mb-2">Промоушн</Tag>
                <Heading as="h3" className="text-lg mb-2">Туристический продукт</Heading>
                <Body className="text-sm text-slate-600">
                  Фотография или макет сувенирной продукции с фирменной айдентикой, например, 
                  с символом Тверского козла или паттерном волн.
                </Body>
              </div>
            </Card>

            {/* Якорный объект */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop"
                alt="Якорный объект"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="heritage" className="mb-2">Якорный проект</Tag>
                <Heading as="h3" className="text-lg mb-2">Тверь-Экспо и Тверь-Сити</Heading>
                <Body className="text-sm text-slate-600">
                  Рендер Выставочного центра «Тверь-Экспо» или Бизнес-центра «Тверь-Сити», 
                  как площадок для делового туризма.
                </Body>
              </div>
            </Card>
          </div>
        </motion.div>
      </PageSection>
    </div>
  );
};

export default TourismPage;

