import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PageSection } from "../components/layout/PageSection";
import { Heading, Body, Caption } from "../components/ui/Typography";
import { Card } from "../components/ui/Card";
import { Tag } from "../components/ui/Tag";
import { Button } from "../components/ui/Button";

export const DigitalizationPage: React.FC = () => {
  const navigate = useNavigate();

  const kpiData = [
    { label: "Умных перекрестков", value: "65", target: "2035", color: "digital" },
    { label: "Покрытие ИТС", value: "100%", target: "2035", color: "digital" },
    { label: "Умных остановок", value: "35", target: "2035", color: "water" },
    { label: "Точек Wi-Fi", value: "10000", target: "2035", color: "digital" },
  ];

  const itsMeasures = [
    {
      title: "Интеллектуальная транспортная система (ИТС)",
      description: "100% покрытие городской агломерации интеллектуальными светофорами",
      items: [
        "Внедрение 65 умных светофорных перекрестков, объединенных в единую сеть",
        "Сокращение цикла ожидания с 112 секунд до ~60 секунд",
        "Центр управления транспортом (Ситуационный центр) в режиме онлайн",
        "Координация «зеленой волны» и приоритет общественному транспорту",
        "ОТ получает зеленый сигнал по запросу датчиков приближения",
      ],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop",
    },
    {
      title: "Единый цифровой сервис для мобильности (MaaS)",
      description: "Объединение всех функций мобильности в одном приложении",
      items: [
        "Оплата проезда в городском и пригородном транспорте",
        "Оплата парковки",
        "Аренда велосипедов/самокатов",
        "Построение маршрутов",
        "«Цифровой гид» по Твери для туристов",
        "Турбилет: проезд + посещение музеев",
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=90&auto=format&fit=crop",
    },
    {
      title: "Цифровизация сервиса ОТ",
      description: "Умные остановки с современным оборудованием",
      items: [
        "Установка 35 «умных остановок»",
        "Электронные табло с информацией о прибытии",
        "Wi-Fi и USB-зарядки",
        "Система голосового оповещения",
        "Повышение комфорта ожидания",
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop",
    },
  ];

  const smartMobility20 = [
    {
      title: "ИИ и Big Data",
      description: "Прогнозирование спроса и управление трафиком",
      items: [
        "Массовое использование больших данных и ИИ",
        "Прогнозирование спроса на перевозки",
        "Управление трафиком на основе данных",
        "Оптимизация маршрутов в реальном времени",
      ],
    },
    {
      title: "Беспилотный транспорт",
      description: "Интеграция с connected cars",
      items: [
        "Обмен данными с беспилотными автомобилями",
        "Координация движения беспилотного транспорта",
        "Повышение безопасности и эффективности",
      ],
    },
    {
      title: "Умные парковки",
      description: "Навигация к свободным местам",
      items: [
        "Датчики свободных мест на парковках",
        "Навигация к свободному месту в реальном времени",
        "Сокращение хаотичного кружения в поисках парковки",
      ],
    },
    {
      title: "Воздушная мобильность",
      description: "Регулирование дронов и беспилотных аппаратов",
      items: [
        "Регулирование воздушной мобильности",
        "Управление дронами и беспилотными аппаратами",
        "Интеграция в городскую транспортную систему",
      ],
    },
  ];

  const smartUtilities = [
    {
      title: "Интеллектуализация ЖКХ",
      description: "Объединение всех систем в единую платформу",
      items: [
        "Внедрение социально-технических систем",
        "Объединение транспортных, электроснабженческих, водоснабженческих и телекоммуникационных компонентов",
        "Система «Цифровой учет коммуникационных ресурсов»",
        "Контроль над потреблением через личные кабинеты",
      ],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop",
    },
    {
      title: "АСУ ТП и мониторинг",
      description: "Автоматизированное управление технологическими процессами",
      items: [
        "АСУ ТП Водоотведения с диспетчеризацией",
        "Дистанционный контроль сбора и транспортировки сточной воды",
        "Автоматизированные технологии мониторинга инженерных сетей",
        "Диагностика технического состояния в реальном времени",
        "Интеллектуализация местной энергетики и водного хозяйства",
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop",
    },
    {
      title: "Энергоэффективность",
      description: "Цифровые технологии для снижения энергопотребления",
      items: [
        "Умное освещение улиц",
        "Установка приборов учета тепла у потребителей",
        "Оптимизация энергопотребления",
        "Снижение потерь ресурсов",
      ],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop",
    },
  ];

  const safetyAndGovernance = [
    {
      title: "Безопасный город",
      description: "Интеллектуальные камеры и видеонаблюдение",
      items: [
        "Интеллектуальные камеры, фиксирующие нарушения",
        "Контроль скоростного режима",
        "Фиксация выезда на полосу ОТ",
        "Контроль парковки в неположенных местах",
        "Интеграция в общегородскую систему «Безопасный город»",
        "Проект «Умный домофон»",
      ],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop",
    },
    {
      title: "Цифровизация городского управления",
      description: "Единая информационная среда и открытый город",
      items: [
        "Единая унифицированная информационная среда администрации",
        "Отказоустойчивый Центр обработки данных (ЦОД)",
        "Формирование концепции открытого «информационного города»",
        "ГИС-платформа для визуализации проектов и мониторинга KPI",
        "Информационное обеспечение граждан в электронном виде",
        "Цифровые платформы для вовлечения горожан в принятие решений",
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=90&auto=format&fit=crop",
    },
    {
      title: "Цифровизация социальной сферы",
      description: "ИКТ в здравоохранении и телемедицине",
      items: [
        "Ведение «истории здоровья» человека",
        "Управление развитием здоровья в индивидуальном порядке",
        "Субсидии на развитие телемедицины",
        "Дистанционные методы диагностики",
        "Производство носимых беспроводных датчиков",
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&q=90&auto=format&fit=crop",
    },
    {
      title: "Связь и доступность",
      description: "Единое пространство Wi-Fi и навигация",
      items: [
        "Создание единого пространства Wi-Fi (10 000 единиц)",
        "Высокотехнологичные электронные комплексы пешеходной навигации (10 единиц)",
        "Обеспечение равноправного и недискриминационного доступа",
        "Современная информационно-коммуникационная среда",
      ],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      {/* Hero секция */}
      <PageSection className="relative overflow-hidden min-h-[50vh] flex items-center bg-gradient-to-br from-digital/10 via-water/5 to-heritage/10">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
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
              <Tag tone="digital">Раздел 4.10</Tag>
            </div>
            <Caption className="text-digital mb-4 font-semibold">Этап 2. Проектные решения</Caption>
            <Heading as="h1" className="text-4xl md:text-5xl mb-6 text-digital">
              Цифровизация
            </Heading>
            <Body className="text-xl text-slate-700 mb-4 max-w-3xl">
              Умный город и цифровая инфраструктура
            </Body>
            <Body className="text-lg text-slate-600 max-w-3xl">
              Лидерство Твери в развитии «умной» экономики и повсеместное использование ИКТ. 
              Концепция «Умный город» обеспечивает экологичность, безопасность, энергоэффективность 
              и максимальный комфорт жизнедеятельности.
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
            <div className="w-1 h-16 bg-gradient-to-b from-digital to-water rounded-full" />
            <div>
              <Caption className="text-digital mb-2">Ключевые показатели</Caption>
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
                  <Card className="bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 hover:border-digital/50 transition-all">
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

      {/* Концепция Умного города */}
      <PageSection className="bg-gradient-to-b from-white to-[color:var(--color-bg)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-digital/20 via-water/10 to-heritage/20 border-2 border-digital/30 mb-8">
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-digital via-water to-heritage flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  🧠
                </div>
                <div>
                  <Heading as="h2" className="text-2xl mb-2">Концепция «Умный город»</Heading>
                  <Body className="text-slate-600">Единая нервная система города</Body>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-white/80 border-digital/30">
                  <div className="p-6">
                    <Heading as="h3" className="text-lg mb-3 text-digital">Экологичность</Heading>
                    <Body className="text-slate-700">
                      Оптимизация ресурсопотребления и снижение негативного воздействия на окружающую среду 
                      через интеллектуальное управление.
                    </Body>
                  </div>
                </Card>
                <Card className="bg-white/80 border-water/30">
                  <div className="p-6">
                    <Heading as="h3" className="text-lg mb-3 text-water">Безопасность</Heading>
                    <Body className="text-slate-700">
                      Системы видеонаблюдения, датчиков и интеллектуального контроля для повышения 
                      безопасности граждан.
                    </Body>
                  </div>
                </Card>
                <Card className="bg-white/80 border-heritage/30">
                  <div className="p-6">
                    <Heading as="h3" className="text-lg mb-3 text-heritage">Энергоэффективность</Heading>
                    <Body className="text-slate-700">
                      Снижение энергопотребления и потерь ресурсов через умное управление и мониторинг 
                      в реальном времени.
                    </Body>
                  </div>
                </Card>
              </div>
            </div>
          </Card>
        </motion.div>
      </PageSection>

      {/* Интеллектуальное управление мобильностью */}
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
              <Caption className="text-digital mb-2">I этап (до 2035)</Caption>
              <Heading as="h2" className="text-3xl">
                Интеллектуальное управление мобильностью (ИТС)
              </Heading>
            </div>
          </div>

          <div className="space-y-8 mb-8">
            {itsMeasures.map((measure, index) => (
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
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                  </Card>
                </div>
                <div className={index % 2 === 0 ? "order-2" : "order-1"}>
                  <Heading as="h3" className="text-2xl mb-4 text-digital">{measure.title}</Heading>
                  <Body className="text-slate-700 mb-4">
                    {measure.description}
                  </Body>
                  <ul className="space-y-3">
                    {measure.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <span className="text-digital mt-1 font-bold">•</span>
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

      {/* Smart Mobility 2.0 */}
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
              <Caption className="text-water mb-2">II этап (до 2045)</Caption>
              <Heading as="h2" className="text-3xl">
                Smart Mobility 2.0 и ИИ
              </Heading>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {smartMobility20.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-gradient-to-br from-digital/10 to-water/10 border-2 border-digital/30 h-full">
                  <div className="p-6">
                    <Heading as="h3" className="text-lg mb-3 text-digital">{item.title}</Heading>
                    <Body className="text-slate-700 mb-4 text-sm">{item.description}</Body>
                    <ul className="space-y-2">
                      {item.items.map((listItem, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <span className="text-digital mt-1 font-bold text-xs">•</span>
                          <Body className="text-slate-700 text-xs">{listItem}</Body>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </PageSection>

      {/* Цифровизация инженерной инфраструктуры */}
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
              <Caption className="text-digital mb-2">Ресурсосбережение</Caption>
              <Heading as="h2" className="text-3xl">
                Цифровизация инженерной инфраструктуры
              </Heading>
            </div>
          </div>

          <div className="space-y-8">
            {smartUtilities.map((utility, index) => (
              <motion.div
                key={utility.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                  <Card className="overflow-hidden h-full">
                    <img
                      src={utility.image}
                      alt={utility.title}
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                  </Card>
                </div>
                <div className={index % 2 === 0 ? "order-2" : "order-1"}>
                  <Heading as="h3" className="text-2xl mb-4 text-digital">{utility.title}</Heading>
                  <Body className="text-slate-700 mb-4">
                    {utility.description}
                  </Body>
                  <ul className="space-y-3">
                    {utility.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <span className="text-digital mt-1 font-bold">•</span>
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

      {/* Безопасность и управление */}
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
              <Caption className="text-water mb-2">Безопасность и управление</Caption>
              <Heading as="h2" className="text-3xl">
                Цифровые технологии в сфере безопасности
              </Heading>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {safetyAndGovernance.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-gradient-to-br from-white to-slate-50 border-2 border-digital/30 h-full">
                  <div className="p-6">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                      loading="lazy"
                    />
                    <Heading as="h3" className="text-xl mb-4 text-digital">{item.title}</Heading>
                    <Body className="text-slate-700 mb-4">{item.description}</Body>
                    <ul className="space-y-2">
                      {item.items.map((listItem, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <span className="text-digital mt-1 font-bold">•</span>
                          <Body className="text-slate-700 text-sm">{listItem}</Body>
                        </li>
                      ))}
                    </ul>
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
            <div className="w-1 h-16 bg-gradient-to-b from-digital to-water rounded-full" />
            <div>
              <Caption className="text-digital mb-2">Картографические материалы</Caption>
              <Heading as="h2" className="text-3xl">
                ГИС-слои и схемы планирования
              </Heading>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Схема ИТС */}
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[400px] flex items-center justify-center">
              <div className="text-center p-6">
                <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <Heading as="h3" className="text-xl text-slate-600 mb-2">
                  Интеллектуальная Транспортная Система (ИТС)
                </Heading>
                <Body className="text-slate-500 mb-4">
                  Зоны покрытия: отображение всех значимых перекрестков. Выделение 65 умных светофорных 
                  перекрестков и планируемое 100% покрытие агломерации адаптивными светофорами к 2035 году. 
                  Местоположение Центра управления (Ситуационного центра).
                </Body>
                <Caption className="text-slate-400">Основной разворот раздела</Caption>
              </div>
            </Card>

            {/* Карта цифровой инфраструктуры */}
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[400px] flex items-center justify-center">
              <div className="text-center p-6">
                <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
                <Heading as="h3" className="text-xl text-slate-600 mb-2">
                  Цифровая Инфраструктура и Сервисы
                </Heading>
                <Body className="text-slate-500 mb-4">
                  Wi-Fi: места размещения 10 000 точек Wi-Fi для создания единого пространства. Навигация: 
                  местоположение электронных комплексов пешеходной навигации. Местоположение ЦОД 
                  (Центр обработки данных).
                </Body>
                <Caption className="text-slate-400">Схематичный план</Caption>
              </div>
            </Card>

            {/* Умное ЖКХ и Безопасный город */}
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[400px] flex items-center justify-center md:col-span-2">
              <div className="text-center p-6">
                <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <Heading as="h3" className="text-xl text-slate-600 mb-2">
                  Умное ЖКХ и Безопасный город
                </Heading>
                <Body className="text-slate-500 mb-4">
                  Видеоконтроль: зоны покрытия камерами видеонаблюдения, интегрированными в систему 
                  «Безопасный город». Интеллектуальные счетчики: зоны внедрения «Цифрового учета 
                  коммуникационных ресурсов». Местоположение АСУ ТП в системах водоотведения.
                </Body>
                <Caption className="text-slate-400">Аналитическая карта</Caption>
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
            <div className="w-1 h-16 bg-gradient-to-b from-digital to-heritage rounded-full" />
            <div>
              <Caption className="text-digital mb-2">Визуализация проектов</Caption>
              <Heading as="h2" className="text-3xl">
                Ключевые проекты и решения
              </Heading>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Концепция Умного города */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop"
                alt="Концепция Умного города"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="digital" className="mb-2">Инфографика</Tag>
                <Heading as="h3" className="text-lg mb-2">Концепция Умного города</Heading>
                <Body className="text-sm text-slate-600">
                  Схема, демонстрирующая интеграцию социально-технических систем (транспорт, энергия, 
                  вода, безопасность) в единую платформу. Графические мотивы: чипы, механизмы, 
                  динамические линии.
                </Body>
              </div>
            </Card>

            {/* Умная остановка */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop"
                alt="Умная остановка"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="water" className="mb-2">Инфраструктура</Tag>
                <Heading as="h3" className="text-lg mb-2">Умная остановка</Heading>
                <Body className="text-sm text-slate-600">
                  Визуализация одной из 35 «умных остановок» с электронным табло, Wi-Fi и USB-зарядкой. 
                  Современный комфорт ожидания общественного транспорта.
                </Body>
              </div>
            </Card>

            {/* Приложение MaaS */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=90&auto=format&fit=crop"
                alt="Приложение MaaS"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="digital" className="mb-2">Цифровой сервис</Tag>
                <Heading as="h3" className="text-lg mb-2">Приложение MaaS</Heading>
                <Body className="text-sm text-slate-600">
                  Скриншот Единого цифрового сервиса для мобильности, демонстрирующий функции оплаты 
                  и туристической навигации. «Цифровой гид» по Твери.
                </Body>
              </div>
            </Card>

            {/* Цифровой учет ресурсов */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop"
                alt="Цифровой учет ресурсов"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="digital" className="mb-2">Инфографика</Tag>
                <Heading as="h3" className="text-lg mb-2">Цифровой учет ресурсов</Heading>
                <Body className="text-sm text-slate-600">
                  Схема, показывающая, как интеллектуализация коммунального хозяйства и установка 
                  счетчиков способствуют снижению износа и потерь.
                </Body>
              </div>
            </Card>

            {/* Ситуационный центр */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=90&auto=format&fit=crop"
                alt="Ситуационный центр"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="digital" className="mb-2">Управление</Tag>
                <Heading as="h3" className="text-lg mb-2">Ситуационный центр</Heading>
                <Body className="text-sm text-slate-600">
                  Изображение Центра управления мобильностью или ГИС-платформы для визуализации 
                  управления городом в реальном времени.
                </Body>
              </div>
            </Card>

            {/* ИТС в действии */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop"
                alt="ИТС в действии"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="digital" className="mb-2">Инфографика</Tag>
                <Heading as="h3" className="text-lg mb-2">ИТС в действии</Heading>
                <Body className="text-sm text-slate-600">
                  Диаграмма, показывающая сокращение задержек на перекрестках (с 112 сек до ~60 сек) 
                  благодаря адаптивным светофорам.
                </Body>
              </div>
            </Card>
          </div>
        </motion.div>
      </PageSection>
    </div>
  );
};

export default DigitalizationPage;

