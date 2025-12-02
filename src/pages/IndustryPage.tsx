import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PageSection } from "../components/layout/PageSection";
import { Heading, Body, Caption } from "../components/ui/Typography";
import { Card } from "../components/ui/Card";
import { Tag } from "../components/ui/Tag";
import { Button } from "../components/ui/Button";

export const IndustryPage: React.FC = () => {
  const navigate = useNavigate();

  const kpiData = [
    { label: "Доля машиностроения", value: "42.9%", target: "2035", color: "heritage" },
    { label: "Рентабельность резиновых изделий", value: "24.6%", target: "2035", color: "digital" },
    { label: "Темп роста резиновых изделий", value: "114.8%", target: "2035", color: "digital" },
    { label: "Доля инновационной продукции", value: "20% → 35%", target: "2035", color: "water", current: "20%" },
  ];

  const traditionalIndustries = [
    {
      title: "Машиностроение и металлообработка",
      description: "Градообразующая отрасль, доля в обрабатывающих производствах — 42,9%",
      icon: "🏭",
      color: "heritage",
      details: [
        "Крупнейшее предприятие — ОАО «Тверской вагоностроительный завод» (ТВЗ)",
        "Системообразующее предприятие и крупнейший налогоплательщик",
        "Планируется модернизация и реконструкция производств",
        "Приносит наибольшие финансовые поступления в бюджет города",
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=90&auto=format&fit=crop",
    },
    {
      title: "Пищевая промышленность",
      description: "Занимает важное место (12,6% в объеме обрабатывающих производств)",
      icon: "🍞",
      color: "water",
      details: [
        "Рост потребительского спроса столичного региона",
        "Масштабное внедрение импортозамещающих производств",
        "Крупные предприятия: ООО «Частная пивоварня «Афанасий»",
        "ОАО «Волжский пекарь»",
      ],
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=90&auto=format&fit=crop",
    },
    {
      title: "Полиграфия",
      description: "Одна из отраслей специализации Твери",
      icon: "📰",
      color: "digital",
      details: [
        "Планируемые темпы роста обусловлены расширением производства",
        "Важная отрасль для развития креативной экономики",
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=90&auto=format&fit=crop",
    },
  ];

  const innovativeClusters = [
    {
      title: "ICT и Smart-системы",
      description: "Смарт-инжиниринг — приоритетное направление «умной» экономики",
      icon: "💻",
      color: "digital",
      details: [
        "Развитие «умной» экономики",
        "Организации: ООО «НПЦ «Система»",
        "Высокотехнологичные решения для городской инфраструктуры",
      ],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop",
    },
    {
      title: "Резиновые и пластмассовые изделия",
      description: "Самый высокий темп роста (114,8%) и рентабельность (24,6%)",
      icon: "⚙️",
      color: "digital",
      details: [
        "Высокая рентабельность — 24,6%",
        "Темп роста — 114,8%",
        "Крупнейшие налогоплательщики: АО «Диэлектрические кабельные системы»",
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=90&auto=format&fit=crop",
    },
    {
      title: "Фармацевтический кластер",
      description: "Локализация производства медицинских материалов и оборудования",
      icon: "💊",
      color: "water",
      details: [
        "Тверской филиал ООО «Гематек»",
        "Производство медицинских материалов",
        "Высокотехнологичное производство",
      ],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d4c09?w=1200&q=90&auto=format&fit=crop",
    },
    {
      title: "Транспортно-логистический кластер",
      description: "Использование выгодного расположения для развития логистики",
      icon: "🚚",
      color: "heritage",
      details: [
        "Развитие логистики, складов и транспортных услуг",
        "Выгодное расположение между Москвой и Санкт-Петербургом",
        "Примагистральные многофункциональные коммерческо-производственные зоны",
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop",
    },
  ];

  const industrialZones = [
    {
      name: "Северо-Западная",
      status: "Существующая",
      action: "Редевелопмент",
    },
    {
      name: "ТЭЦ-3",
      status: "Существующая",
      action: "Редевелопмент",
    },
    {
      name: "Химволокно",
      status: "Существующая",
      action: "Редевелопмент",
    },
    {
      name: "Лазурная",
      status: "Существующая",
      action: "Редевелопмент",
    },
    {
      name: "Борихино",
      status: "Существующая",
      action: "Редевелопмент",
    },
    {
      name: "Боровлево-3",
      status: "Проектируемая",
      action: "Создание промышленного парка",
    },
  ];

  const keyProjects = [
    {
      name: "Бизнес-центр «Тверь-Сити»",
      description: "Крупный деловой центр (180 000 м²) в Пролетарском районе, интегрированный с вокзалами",
      budget: "7,5 млрд руб.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop",
      isAnchor: true,
    },
    {
      name: "Выставочный центр «Тверь-Экспо»",
      description: "Новый общегородской центр в Заволжье на территории бывшей «Химбазы»",
      budget: "8 млрд руб.",
      image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop",
      isAnchor: true,
    },
    {
      name: "Индустриальный парк «Боровлево-3»",
      description: "Новая производственная территория для размещения наукоемкого производства",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=90&auto=format&fit=crop",
      isAnchor: false,
    },
  ];

  const mspSupport = [
    {
      title: "Финансовая поддержка",
      items: [
        "Субсидии из бюджета города",
        "Поддержка на приобретение оборудования",
        "Лизинг и уплата процентов по кредитам",
        "Присоединение к сетям",
        "Льготное финансирование (5-9% годовых) от Фонда развития промышленности",
      ],
    },
    {
      title: "Информационная поддержка",
      items: [
        "Организация ярмарок-вакансий для МСП",
        "Поощрение самозанятости",
        "Проведение исследований МСП",
        "Премия «Бизнес-Успех»",
      ],
    },
    {
      title: "Инфраструктурная поддержка",
      items: [
        "Муниципальные помещения на льготных условиях",
        "Акселерационная инфраструктура",
        "Инновационно-технологические центры",
        "Инжиниринговые центры и центры трансфера технологий",
      ],
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
              <Tag tone="heritage">Раздел 4.7</Tag>
            </div>
            <Caption className="text-heritage mb-4 font-semibold">Этап 2. Проектные решения</Caption>
            <Heading as="h1" className="text-4xl md:text-5xl mb-6 text-heritage">
              Производство и МСП
            </Heading>
            <Body className="text-xl text-slate-700 mb-4 max-w-3xl">
              Промышленность и малый бизнес
            </Body>
            <Body className="text-lg text-slate-600 max-w-3xl">
              Переход к «умной» экономике, основанной на знаниях, инновациях и креативности. 
              Достижение СЦ-3 Рынки-2035 и СЦ-5 Инновации и информация.
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
                Экономические показатели
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
                        <Heading as="h3" className={`text-2xl font-bold ${colorClass} kpi-numeric`}>
                          {kpi.value}
                        </Heading>
                      </div>
                      <Body className="text-xs text-slate-500">к {kpi.target}</Body>
                      {kpi.current && (
                        <Body className="text-xs text-red-600 mt-1">Текущее: {kpi.current}</Body>
                      )}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </PageSection>

      {/* Традиционные отрасли */}
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
              <Caption className="text-digital mb-2">Традиционные отрасли</Caption>
              <Heading as="h2" className="text-3xl">
                Развитие существующих производств
              </Heading>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {traditionalIndustries.map((industry, index) => {
              const colorClasses = {
                heritage: "border-heritage/30 bg-gradient-to-br from-amber-50/50 to-amber-100/30",
                digital: "border-digital/30 bg-gradient-to-br from-blue-50/50 to-blue-100/30",
                water: "border-water/30 bg-gradient-to-br from-teal-50/50 to-teal-100/30",
              };
              const colorClass = colorClasses[industry.color as keyof typeof colorClasses] || "";
              const textColorClasses = {
                heritage: "text-heritage",
                digital: "text-digital",
                water: "text-water",
              };
              const textColorClass = textColorClasses[industry.color as keyof typeof textColorClasses] || "";

              return (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`${colorClass} border-2 h-full`}>
                    <div className="p-6">
                      <div className="text-4xl mb-4">{industry.icon}</div>
                      <Heading as="h3" className={`text-xl mb-2 ${textColorClass}`}>
                        {industry.title}
                      </Heading>
                      <Body className="text-slate-700 mb-4 text-sm">{industry.description}</Body>
                      <ul className="space-y-2">
                        {industry.details.map((detail, detailIndex) => (
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

      {/* Инновационные кластеры */}
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
              <Caption className="text-water mb-2">Драйверы роста</Caption>
              <Heading as="h2" className="text-3xl">
                Наукоемкие кластеры и высокотехнологичные производства
              </Heading>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {innovativeClusters.map((cluster, index) => {
              const colorClasses = {
                heritage: "border-heritage/30 bg-gradient-to-br from-amber-50/50 to-amber-100/30",
                digital: "border-digital/30 bg-gradient-to-br from-blue-50/50 to-blue-100/30",
                water: "border-water/30 bg-gradient-to-br from-teal-50/50 to-teal-100/30",
              };
              const colorClass = colorClasses[cluster.color as keyof typeof colorClasses] || "";
              const textColorClasses = {
                heritage: "text-heritage",
                digital: "text-digital",
                water: "text-water",
              };
              const textColorClass = textColorClasses[cluster.color as keyof typeof textColorClasses] || "";

              return (
                <motion.div
                  key={cluster.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="grid md:grid-cols-2 gap-6 items-center"
                >
                  <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                    <Card className="overflow-hidden h-full">
                      <img
                        src={cluster.image}
                        alt={cluster.title}
                        className="w-full h-64 object-cover"
                        loading="lazy"
                      />
                    </Card>
                  </div>
                  <div className={index % 2 === 0 ? "order-2" : "order-1"}>
                    <Card className={`${colorClass} border-2 h-full`}>
                      <div className="p-6">
                        <div className="text-3xl mb-3">{cluster.icon}</div>
                        <Heading as="h3" className={`text-xl mb-3 ${textColorClass}`}>
                          {cluster.title}
                        </Heading>
                        <Body className="text-slate-700 mb-4">{cluster.description}</Body>
                        <ul className="space-y-2">
                          {cluster.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start gap-2">
                              <span className={`${textColorClass} mt-1 font-bold`}>•</span>
                              <Body className="text-slate-700 text-sm">{detail}</Body>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </PageSection>

      {/* Промышленные зоны */}
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
              <Caption className="text-heritage mb-2">Редевелопмент</Caption>
              <Heading as="h2" className="text-3xl">
                Промышленные зоны и реорганизация территорий
              </Heading>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-heritage/20 via-digital/10 to-water/20 border-2 border-heritage/30 mb-8">
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <Heading as="h3" className="text-xl mb-4 text-heritage">Ликвидация экологически опасных производств</Heading>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-heritage mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Вывод из наиболее ценных в градостроительном отношении узлов</Body>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-heritage mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Вывод из зон непосредственного контакта с жилой и общественной застройкой</Body>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-heritage mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Технологическое перевооружение или перепрофилирование предприятий-загрязнителей</Body>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-heritage mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Снижение класса санитарной вредности/опасности</Body>
                    </li>
                  </ul>
                </div>
                <div>
                  <Heading as="h3" className="text-xl mb-4 text-heritage">Функциональная трансформация</Heading>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-heritage mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Размещение наукоемкого производства</Body>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-heritage mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Размещение деловых и обслуживающих функций</Body>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-heritage mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Создание новых промышленных зон (промышленный парк «Боровлево-3»)</Body>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-heritage mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Развитие деловой инфраструктуры</Body>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {industrialZones.map((zone, index) => (
                  <Card key={zone.name} className="bg-white/80 border-heritage/30">
                    <div className="p-4">
                      <Heading as="h4" className="text-lg mb-2 text-heritage">{zone.name}</Heading>
                      <Body className="text-xs text-slate-600 mb-1">
                        <strong>Статус:</strong> {zone.status}
                      </Body>
                      <Body className="text-xs text-slate-700">
                        <strong>Действие:</strong> {zone.action}
                      </Body>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Card>
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
            <div className="w-1 h-16 bg-gradient-to-b from-digital to-heritage rounded-full" />
            <div>
              <Caption className="text-digital mb-2">Якорные проекты</Caption>
              <Heading as="h2" className="text-3xl">
                Деловая инфраструктура
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
                    {project.isAnchor && <Tag tone="heritage" className="mb-2">Якорный проект</Tag>}
                    <Heading as="h3" className="text-lg mb-2">{project.name}</Heading>
                    <Body className="text-sm text-slate-600 mb-2">{project.description}</Body>
                    {project.budget && (
                      <Body className="text-xs text-slate-500">
                        <strong>Бюджет:</strong> {project.budget}
                      </Body>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </PageSection>

      {/* Поддержка МСП */}
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
              <Caption className="text-water mb-2">Малый и средний бизнес</Caption>
              <Heading as="h2" className="text-3xl">
                Условия и стимулы для развития МСП
              </Heading>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {mspSupport.map((support, index) => (
              <motion.div
                key={support.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-gradient-to-br from-white to-slate-50 border-2 border-water/30 h-full">
                  <div className="p-6">
                    <Heading as="h3" className="text-xl mb-4 text-water">{support.title}</Heading>
                    <ul className="space-y-3">
                      {support.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <span className="text-water mt-1 font-bold">•</span>
                          <Body className="text-slate-700 text-sm">{item}</Body>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-digital/10 to-water/10 border-2 border-digital/30">
            <div className="p-8">
              <Heading as="h3" className="text-2xl mb-4 text-digital">
                Инфраструктура для инноваций
              </Heading>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Body className="text-slate-700 mb-3">
                    <strong>ГЧП и концессии:</strong> Для реализации капиталоемких проектов используются механизмы 
                    Государственно-частного партнерства и концессионные соглашения.
                  </Body>
                  <Body className="text-slate-700 mb-3">
                    <strong>КРТ:</strong> Использование механизма комплексного развития территорий для минимизации 
                    бюджетных расходов.
                  </Body>
                </div>
                <div>
                  <Body className="text-slate-700 mb-3">
                    <strong>Логистика и аутсорсинг:</strong> Привлечение головных офисов столичных компаний и 
                    вывод на аутсорсинг различных видов деятельности.
                  </Body>
                  <Body className="text-slate-700">
                    <strong>Развитие торговли и услуг:</strong> Совершенствование схемы размещения нестационарных 
                    торговых объектов, рост числа пунктов формата «бистро».
                  </Body>
                </div>
              </div>
            </div>
          </Card>
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
            {/* Карта производственных зон */}
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[400px] flex items-center justify-center">
              <div className="text-center p-6">
                <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <Heading as="h3" className="text-xl text-slate-600 mb-2">
                  Производственные зоны и Кластеры
                </Heading>
                <Body className="text-slate-500 mb-4">
                  Промышленные зоны (существующие и проектируемые), зоны СЗЗ с указанием класса опасности, 
                  логистика. Зонирование П1, П2. Зоны редевелопмента.
                </Body>
                <Caption className="text-slate-400">Основной разворот раздела</Caption>
              </div>
            </Card>

            {/* Карта инвестиционных проектов */}
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[400px] flex items-center justify-center">
              <div className="text-center p-6">
                <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <Heading as="h3" className="text-xl text-slate-600 mb-2">
                  Инвестиционные проекты и Инновационная инфраструктура
                </Heading>
                <Body className="text-slate-500 mb-4">
                  Якорные проекты (Тверь-Экспо, Тверь-Сити), инновационная инфраструктура 
                  (Инжиниринговые центры, Технопарки). Точки концентрации инновационной деятельности.
                </Body>
                <Caption className="text-slate-400">Врезка или дополнительный слайд</Caption>
              </div>
            </Card>

            {/* Карта МСП */}
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[400px] flex items-center justify-center md:col-span-2">
              <div className="text-center p-6">
                <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <Heading as="h3" className="text-xl text-slate-600 mb-2">
                  МСП и розничная торговля
                </Heading>
                <Body className="text-slate-500 mb-4">
                  Зоны с высокой концентрацией объектов торговли, общественного питания, бытового обслуживания. 
                  Участки с особыми требованиями к размещению нестационарных торговых объектов.
                </Body>
                <Caption className="text-slate-400">Врезка «Сервисная экономика»</Caption>
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
            <div className="w-1 h-16 bg-gradient-to-b from-heritage to-digital rounded-full" />
            <div>
              <Caption className="text-heritage mb-2">Визуализация проектов</Caption>
              <Heading as="h2" className="text-3xl">
                Ключевые проекты и решения
              </Heading>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Схема кластеров */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop"
                alt="Схема кластеров"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="digital" className="mb-2">Инфографика</Tag>
                <Heading as="h3" className="text-lg mb-2">Схема кластеров</Heading>
                <Body className="text-sm text-slate-600">
                  Диаграмма, показывающая диверсификацию экономики (ЖД-машиностроение, ИКТ/Смарт-системы, 
                  Логистика, АПК) с иконками.
                </Body>
              </div>
            </Card>

            {/* Тверь-Сити и Тверь-Экспо */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop"
                alt="Тверь-Сити и Тверь-Экспо"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="heritage" className="mb-2">Якорные проекты</Tag>
                <Heading as="h3" className="text-lg mb-2">Бизнес-центры</Heading>
                <Body className="text-sm text-slate-600">
                  Рендер Бизнес-центра «Тверь-Сити» и «Тверь-Экспо» — визуализация новых центров 
                  деловой активности и выставочно-ярмарочной деятельности.
                </Body>
              </div>
            </Card>

            {/* Промышленный рост */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=90&auto=format&fit=crop"
                alt="Промышленный рост"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="digital" className="mb-2">Инфографика</Tag>
                <Heading as="h3" className="text-lg mb-2">Промышленный рост и рентабельность</Heading>
                <Body className="text-sm text-slate-600">
                  Диаграмма, подчеркивающая высокую рентабельность секторов (резиновые изделия: 24,6%) 
                  и прогнозируемый рост доли инновационной продукции (до 35% к 2035 г.).
                </Body>
              </div>
            </Card>

            {/* Модернизация ТВЗ */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=90&auto=format&fit=crop"
                alt="Модернизация ТВЗ"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="heritage" className="mb-2">Модернизация</Tag>
                <Heading as="h3" className="text-lg mb-2">Цех ТВЗ</Heading>
                <Body className="text-sm text-slate-600">
                  Фото/рендер модернизированного цеха ТВЗ — иллюстрация технологического перевооружения 
                  якорных производств.
                </Body>
              </div>
            </Card>

            {/* Сделано в Твери */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=90&auto=format&fit=crop"
                alt="Сделано в Твери"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="water" className="mb-2">МСП</Tag>
                <Heading as="h3" className="text-lg mb-2">Сделано в Твери</Heading>
                <Body className="text-sm text-slate-600">
                  Изображение знака добровольной сертификации или продукта МСП, демонстрирующее 
                  поддержку локального бизнеса.
                </Body>
              </div>
            </Card>

            {/* МСП в экономике */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop"
                alt="МСП в экономике"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="digital" className="mb-2">Инфографика</Tag>
                <Heading as="h3" className="text-lg mb-2">МСП в экономике Твери</Heading>
                <Body className="text-sm text-slate-600">
                  Схема, показывающая, что каждый третий работающий занят в МСП. 
                  Тверь занимает 4-е место среди областных центров ЦФО по количеству субъектов МСП.
                </Body>
              </div>
            </Card>
          </div>
        </motion.div>
      </PageSection>
    </div>
  );
};

export default IndustryPage;

