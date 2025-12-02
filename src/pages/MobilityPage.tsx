import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PageSection } from "../components/layout/PageSection";
import { Heading, Body, Caption } from "../components/ui/Typography";
import { Card } from "../components/ui/Card";
import { Tag } from "../components/ui/Tag";
import { Button } from "../components/ui/Button";

export const MobilityPage: React.FC = () => {
  const navigate = useNavigate();

  const kpiData = [
    { label: "Доля ОТ в перевозках", value: "100%", target: "2035", color: "water" },
    { label: "Умных перекрестков", value: "65", target: "2035", color: "digital" },
    { label: "Дорог в нормативе", value: "85%", target: "2035", color: "heritage" },
    { label: "Подвижного состава", value: "1037", target: "2039", color: "water" },
    { label: "Трамвайных путей", value: "20 км", target: "2035", color: "digital" },
    { label: "Паркингов", value: "8+", target: "2035", color: "heritage" },
  ];

  const measures2035 = [
    {
      id: "ot",
      title: "Общественный транспорт",
      items: [
        "Возрождение трамвайного сообщения (~20 км путей)",
        "Обновление парка: ~290 автобусов, ~100 троллейбусов",
        "Оптимизация маршрутной сети",
        "Развитие водного транспорта",
        "Организация малой авиации (4 вертодрома)",
      ],
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&q=90&auto=format&fit=crop",
    },
    {
      id: "roads",
      title: "Дорожная сеть",
      items: [
        "Капитальный ремонт 38 мостовых сооружений",
        "Строительство Западного моста",
        "Кольцевая автомобильная дорога (обход)",
        "Продление магистралей (ул. Фрунзе, Оснабрюкской)",
        "Организация пунктов весового контроля",
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop",
    },
    {
      id: "pedestrian",
      title: "Пешеходная инфраструктура",
      items: [
        "100% обеспечение центра тротуарами",
        "Пешеходизация Старого Волжского моста",
        "Пешеходные связи (Трехсвятская, Советская)",
        "Строительство надземных переходов",
      ],
      image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop",
    },
    {
      id: "micromobility",
      title: "Микромобильность",
      items: [
        "Городской веломаршрут вдоль Волги",
        "Благоустройство набережных",
        "Сеть велопроката",
        "Приоритетный маршрут к ВСМ",
      ],
      image: "https://images.unsplash.com/photo-1551524164-6cf77f5e1d6e?w=1200&q=90&auto=format&fit=crop",
    },
    {
      id: "parking",
      title: "Парковочное пространство",
      items: [
        "Расширение платной парковки (×2)",
        "Строительство 8+ многоуровневых паркингов",
        "Перехватывающие парковки (P+R)",
        "35 412 организованных машиномест",
      ],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop",
    },
    {
      id: "tpu",
      title: "Транспортно-пересадочные узлы",
      items: [
        "Реконструкция ТПУ «Тверь-Центральный»",
        "Создание ТПУ «ОКБ»",
        "Пригородные ТПУ (Никифоровское, Глазково)",
        "Принцип «сухие ноги»",
      ],
      image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop",
    },
    {
      id: "its",
      title: "Интеллектуальное управление",
      items: [
        "65 умных светофорных перекрестков",
        "Единый цифровой сервис (MaaS)",
        "35 «умных остановок»",
        "Система детектирования нарушений",
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=90&auto=format&fit=crop",
    },
    {
      id: "ecology",
      title: "Экологическая трансформация",
      items: [
        "20–30 электробусов",
        "Инфраструктура зарядки (15–20 станций)",
        "Модернизация тяговых подстанций",
        "Стимулирование EV",
      ],
      image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=1200&q=90&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      {/* Hero секция */}
      <PageSection className="relative overflow-hidden min-h-[50vh] flex items-center bg-gradient-to-br from-water/10 via-digital/5 to-heritage/10">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230f766e' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
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
              <Tag tone="water">Раздел 4.1</Tag>
            </div>
            <Caption className="text-water mb-4 font-semibold">Этап 2. Проектные решения</Caption>
            <Heading as="h1" className="text-4xl md:text-5xl mb-6 text-water">
              Мобильность
            </Heading>
            <Body className="text-xl text-slate-700 mb-4 max-w-3xl">
              Транспортная инфраструктура и логистика
            </Body>
            <Body className="text-lg text-slate-600 max-w-3xl">
              Ключевой фактор повышения качества жизни и устойчивости города, направленный на устранение 
              критических транспортных проблем и переход к системе универсальной мобильности.
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Общая стратегическая цель */}
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
                  🎯
                </div>
                <div>
                  <Heading as="h2" className="text-2xl mb-2">Общая стратегическая цель</Heading>
                  <Body className="text-slate-600">К 2035 году</Body>
                </div>
              </div>
              <Body className="text-lg text-slate-800 leading-relaxed">
                Тверь должна перейти к системе <strong>универсальной мобильности</strong>, где поездка общественным 
                или комбинированным транспортом будет столь же быстрой и удобной, как на личном автомобиле. 
                Целевой показатель: доля общественного транспорта в пассажирских перевозках должна достигнуть 
                <strong className="text-water"> 100% к 2035 году</strong>.
              </Body>
            </div>
          </Card>

          {/* Проблема - визуализация */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop"
                alt="Старый Волжский мост"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Heading as="h3" className="text-xl mb-2">Текущие вызовы</Heading>
                <Body className="text-slate-700">
                  Высокая автомобилизация (1-е место в ЦФО), перегруженность УДС, недостаток мостов 
                  и ликвидация электротранспорта создают критические проблемы для мобильности города.
                </Body>
              </div>
            </Card>
            <Card className="bg-gradient-to-br from-digital/10 to-water/10 border-2 border-digital/30">
              <div className="p-6">
                <Heading as="h3" className="text-xl mb-4">Принципы развития</Heading>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-water" />
                    <Body className="font-semibold">Экологичность</Body>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-digital" />
                    <Body className="font-semibold">Доступность</Body>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-heritage" />
                    <Body className="font-semibold">Устойчивость</Body>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-water" />
                    <Body className="font-semibold">Цифровизация</Body>
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
            <div className="w-1 h-16 bg-gradient-to-b from-digital to-water rounded-full" />
            <div>
              <Caption className="text-digital mb-2">Основные направления</Caption>
              <Heading as="h2" className="text-3xl">
                Меры реализации до 2035 и 2045 годов
              </Heading>
            </div>
          </div>

          <div className="space-y-12">
            {measures2035.map((measure, index) => (
              <motion.div
                key={measure.id}
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
                  <div className="flex items-center gap-3 mb-4">
                    <Tag tone="water">{measure.id.toUpperCase()}</Tag>
                    <Heading as="h3" className="text-2xl">{measure.title}</Heading>
                  </div>
                  <Body className="text-slate-700 mb-4">
                    <strong>Меры до 2035 года (I этап):</strong>
                  </Body>
                  <ul className="space-y-3 mb-6">
                    {measure.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <span className="text-water mt-1 font-bold">•</span>
                        <Body className="text-slate-700">{item}</Body>
                      </li>
                    ))}
                  </ul>
                  <Body className="text-sm text-slate-600 italic">
                    <strong>Меры до 2045 года (II этап):</strong> Продолжение развития и интеграция 
                    с системой ВСМ «Новая Тверь».
                  </Body>
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
            <div className="w-1 h-16 bg-gradient-to-b from-heritage to-water rounded-full" />
            <div>
              <Caption className="text-heritage mb-2">Картографические материалы</Caption>
              <Heading as="h2" className="text-3xl">
                ГИС-слои и схемы планирования
              </Heading>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Схема транспортного планирования */}
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[400px] flex items-center justify-center">
              <div className="text-center p-6">
                <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <Heading as="h3" className="text-xl text-slate-600 mb-2">
                  Схема транспортного планирования
                </Heading>
                <Body className="text-slate-500 mb-4">
                  Магистральный каркас 2035/2045: проектируемые участки магистралей, 
                  места строительства мостов, развязки и путепроводы
                </Body>
                <Caption className="text-slate-400">ГИС-слой в формате МСК-69</Caption>
              </div>
            </Card>

            {/* Схема развития ОТ */}
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[400px] flex items-center justify-center">
              <div className="text-center p-6">
                <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                <Heading as="h3" className="text-xl text-slate-600 mb-2">
                  Схема развития ОТ
                </Heading>
                <Body className="text-slate-500 mb-4">
                  Каркас ОТ: трамвайные пути (~20 км), автобусные магистрали, 
                  маршруты речных трамваев, расположение ТПУ
                </Body>
                <Caption className="text-slate-400">Линейная схема (стиль карты метро)</Caption>
              </div>
            </Card>

            {/* Схема пешеходного каркаса */}
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[400px] flex items-center justify-center">
              <div className="text-center p-6">
                <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <Heading as="h3" className="text-xl text-slate-600 mb-2">
                  Пешеходный каркас и микромобильность
                </Heading>
                <Body className="text-slate-500 mb-4">
                  Единый пешеходно-велосипедный каркас, веломаршруты вдоль Волги/Тьмаки, 
                  участки пешеходизации
                </Body>
                <Caption className="text-slate-400">Карта «Город для людей»</Caption>
              </div>
            </Card>

            {/* Схема парковочной политики */}
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[400px] flex items-center justify-center">
              <div className="text-center p-6">
                <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                <Heading as="h3" className="text-xl text-slate-600 mb-2">
                  Парковочная политика и логистика
                </Heading>
                <Body className="text-slate-500 mb-4">
                  Зоны платной парковки, многоуровневые паркинги, перехватывающие парковки (P+R), 
                  маршруты объезда грузового транспорта
                </Body>
                <Caption className="text-slate-400">План центра и периферии</Caption>
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
            {/* Западный мост */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop"
                alt="Западный мост"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="water" className="mb-2">Якорный проект</Tag>
                <Heading as="h3" className="text-lg mb-2">Западный мост</Heading>
                <Body className="text-sm text-slate-600">
                  3D-рендер ключевого инфраструктурного проекта, соединяющего район Мамулино 
                  с пос. Химинститута
                </Body>
              </div>
            </Card>

            {/* Трамвай */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&q=90&auto=format&fit=crop"
                alt="Современный трамвай"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="digital" className="mb-2">Общественный транспорт</Tag>
                <Heading as="h3" className="text-lg mb-2">Возрождение трамвая</Heading>
                <Body className="text-sm text-slate-600">
                  Рендер современного низкопольного трамвая на обновленных путях. 
                  Экологичный и вместительный транспорт
                </Body>
              </div>
            </Card>

            {/* Пешеходный мост */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop"
                alt="Пешеходный мост"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="heritage" className="mb-2">Пешеходизация</Tag>
                <Heading as="h3" className="text-lg mb-2">Старый Волжский мост</Heading>
                <Body className="text-sm text-slate-600">
                  Рендер пешеходного Старого Волжского моста с зонами отдыха. 
                  Превращение в прогулочную зону
                </Body>
              </div>
            </Card>

            {/* ТПУ */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop"
                alt="ТПУ Тверь-Центральный"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="digital" className="mb-2">Транспортные узлы</Tag>
                <Heading as="h3" className="text-lg mb-2">ТПУ «Тверь-Центральный»</Heading>
                <Body className="text-sm text-slate-600">
                  Концептуальный рендер современного вокзала с галереями. 
                  Реализация принципа «сухие ноги»
                </Body>
              </div>
            </Card>

            {/* Умная остановка */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=90&auto=format&fit=crop"
                alt="Умная остановка"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="digital" className="mb-2">ИТС</Tag>
                <Heading as="h3" className="text-lg mb-2">Умная остановка</Heading>
                <Body className="text-sm text-slate-600">
                  Фото «умной остановки» с электронным табло, Wi-Fi и USB-зарядками. 
                  Цифровая трансформация сервисов
                </Body>
              </div>
            </Card>

            {/* Электробус */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=1200&q=90&auto=format&fit=crop"
                alt="Электробус"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="water" className="mb-2">Экология</Tag>
                <Heading as="h3" className="text-lg mb-2">Экологичный транспорт</Heading>
                <Body className="text-sm text-slate-600">
                  Фото электробуса или зарядной станции для EV в городе. 
                  Экологическая трансформация транспорта
                </Body>
              </div>
            </Card>
          </div>
        </motion.div>
      </PageSection>
    </div>
  );
};

export default MobilityPage;

