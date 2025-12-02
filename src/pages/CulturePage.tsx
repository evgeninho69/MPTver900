import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PageSection } from "../components/layout/PageSection";
import { Heading, Body, Caption } from "../components/ui/Typography";
import { Card } from "../components/ui/Card";
import { Tag } from "../components/ui/Tag";
import { Button } from "../components/ui/Button";

export const CulturePage: React.FC = () => {
  const navigate = useNavigate();

  const kpiData = [
    { label: "Объектов культурного наследия", value: "500+", target: "2035", color: "heritage" },
    { label: "Отреставрированных ОКН", value: "70%", target: "2035", color: "heritage" },
    { label: "Концертный зал", value: "3000 мест", target: "2035", color: "digital" },
    { label: "Детская школа искусств", value: "650 мест", target: "2035", color: "water" },
  ];

  const heritageMeasures = [
    {
      title: "Реставрация и адаптивное использование",
      description: "Программная реставрация муниципальных объектов культурного наследия",
      items: [
        "Проведение работ по сохранению муниципальных объектов культурного и исторического наследия",
        "Реконструкция существующих музеев, библиотек и досуговых центров",
        "Адаптивное использование отреставрированных объектов для интеграции в современную экономику",
        "Функциональное развитие общественной застройки в историческом центре",
        "Вынос производственных предприятий из исторического ядра",
      ],
      image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop",
    },
    {
      title: "Градостроительные регламенты",
      description: "Ограничения застройки и сохранение исторического облика",
      items: [
        "Ограничения высотности и плотности новой застройки в Центральной части",
        "Режим, установленный проектами зон охраны ОКН",
        "Регулирование высоты фоновой застройки с учетом исторических доминант",
        "Сохранение зон охраняемого природного ландшафта прибрежных территорий",
        "Сохранение лучевой (тангенциональной) планировочной структуры конца XVIII века",
      ],
      image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop",
    },
    {
      title: "Дизайн-код",
      description: "Единое архитектурно-стилевое решение для сохранения исторического облика",
      items: [
        "Разработка и реализация Дизайн-кода города Твери",
        "Контроль оформления фасадов и вывесок",
        "Предотвращение искажения исторического облика улиц новым ремонтом и рекламой",
        "Единый архитектурно-стилевой подход к оформлению",
        "Сохранение ценной историко-градостроительной среды",
      ],
      image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop",
    },
  ];

  const newCulturalObjects = [
    {
      name: "Детская школа искусств",
      description: "Строительство на 650 мест для развития дополнительного образования",
      capacity: "650 мест",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=90&auto=format&fit=crop",
    },
    {
      name: "Концертно-зрелищный центр",
      description: "Строительство концертного зала вместимостью 3000 мест",
      capacity: "3000 мест",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=90&auto=format&fit=crop",
    },
    {
      name: "Инновационный центр",
      description: "Строительство инновационного центра, конгресс-холла, планетария",
      capacity: "Многофункциональный",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop",
    },
    {
      name: "Молодежные центры",
      description: "Создание многофункциональных молодежных центров в новых микрорайонах",
      capacity: "Мамулино, Дорошиха",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=90&auto=format&fit=crop",
    },
  ];

  const modernizationObjects = [
    {
      name: "Тверская картинная галерея",
      description: "Реконструкция при государственной поддержке на переоснащение",
      image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop",
    },
    {
      name: "Тверской академический театр драмы",
      description: "Реконструкция при государственной поддержке на переоснащение",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=90&auto=format&fit=crop",
    },
    {
      name: "Кукольный театр",
      description: "Проведение капитального ремонта",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=90&auto=format&fit=crop",
    },
  ];

  const creativeEconomy = [
    {
      title: "Креативные кластеры",
      description: "Создание креативных кластеров и Art & Design District",
      items: [
        "Создание креативных кластеров для развития современной культуры",
        "Art & Design District в рамках СЦ-3/СЦ-5",
        "Создание современного музея, интегрированного в проект технопарка",
        "Развитие креативной экономики мирового значения",
      ],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop",
    },
    {
      title: "Событийность и досуг",
      description: "Объекты круглогодичного действия",
      items: [
        "Создание объектов круглогодичного действия",
        "Закрытые помещения для проведения мероприятий",
        "Летние театры",
        "Расширение качественного ассортимента культурной индустрии",
      ],
      image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop",
    },
  ];

  const subBrands = [
    {
      name: "«Путь Афанасия — Город первопроходцев»",
      description: "Суббренд для туризма",
      symbol: "Ладья, компас",
      image: "https://images.unsplash.com/photo-1551524164-6cf77f5e1d6e?w=1200&q=90&auto=format&fit=crop",
    },
    {
      name: "«Тверь Шансонная — Душа города»",
      description: "Суббренд для культурных событий",
      symbol: "Михаил Круг",
      image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop",
    },
  ];

  const tver900Projects = [
    {
      name: "Инициатива ЮНЕСКО",
      description: "Включение исторического центра Твери в перечень объектов историко-культурного наследия ЮНЕСКО",
      image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop",
    },
    {
      name: "Монумент 900-летия",
      description: "Возведение монумента (создание мемориального комплекса), посвященного 900-летию основания города Твери",
      image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop",
    },
    {
      name: "Кинофестиваль",
      description: "Проведение кинофестиваля документальных и художественных фильмов «Тверь, я люблю тебя!»",
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
              <Tag tone="heritage">Раздел 4.9</Tag>
            </div>
            <Caption className="text-heritage mb-4 font-semibold">Этап 2. Проектные решения</Caption>
            <Heading as="h1" className="text-4xl md:text-5xl mb-6 text-heritage">
              Культура
            </Heading>
            <Body className="text-xl text-slate-700 mb-4 max-w-3xl">
              Культурное наследие и творчество
            </Body>
            <Body className="text-lg text-slate-600 max-w-3xl">
              Сохранение уникальной исторической среды и развитие креативной экономики. 
              Использование богатого исторического наследия (500+ ОКН) как базы для пространственного 
              и культурного обновления к 900-летию в 2035 году.
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

      {/* Сохранение культурного наследия */}
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
              <Caption className="text-digital mb-2">Регенерация</Caption>
              <Heading as="h2" className="text-3xl">
                Сохранение культурного наследия и регенерация
              </Heading>
            </div>
          </div>

          <div className="space-y-8 mb-8">
            {heritageMeasures.map((measure, index) => (
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

          {/* Комплексный редевелопмент */}
          <Card className="bg-gradient-to-br from-heritage/20 via-digital/10 to-water/20 border-2 border-heritage/30">
            <div className="p-8">
              <Heading as="h3" className="text-2xl mb-4 text-heritage">
                Комплексный редевелопмент
              </Heading>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Body className="text-slate-700 mb-3">
                    <strong>Якорный проект:</strong> Комплексная реновация <strong>«Двора Пролетарки» 
                    (Морозовского городка)</strong>, представляющего собой крупный промышленный ансамбль.
                  </Body>
                  <Body className="text-slate-700">
                    Регенерация исторического ядра с сохранением ценной историко-градостроительной среды 
                    и лучевой планировочной структуры конца XVIII века.
                  </Body>
                </div>
                <div>
                  <Body className="text-slate-700 mb-3">
                    <strong>Целевой показатель:</strong> Доля отреставрированных/адаптированных ОКН 
                    в отобранном приоритетном пуле должна достигнуть <strong>70% к 2035 году</strong>.
                  </Body>
                  <Body className="text-slate-700">
                    Использование богатого исторического наследия (более 500 ОКН) как базы для 
                    пространственного и культурного обновления к празднованию 900-летия.
                  </Body>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </PageSection>

      {/* Инициатива Тверь-900 */}
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
              <Caption className="text-heritage mb-2">Инициатива «Тверь-900»</Caption>
              <Heading as="h2" className="text-3xl">
                Проекты к 900-летию города
              </Heading>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {tver900Projects.map((project, index) => (
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
                    <Tag tone="heritage" className="mb-2">Тверь-900</Tag>
                    <Heading as="h3" className="text-lg mb-2">{project.name}</Heading>
                    <Body className="text-sm text-slate-600">{project.description}</Body>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </PageSection>

      {/* Инфраструктура культуры */}
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
              <Caption className="text-water mb-2">Инфраструктура</Caption>
              <Heading as="h2" className="text-3xl">
                Развитие инфраструктуры культуры и досуга
              </Heading>
            </div>
          </div>

          <div className="mb-8">
            <Heading as="h3" className="text-2xl mb-6 text-water">Строительство новых объектов</Heading>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {newCulturalObjects.map((object, index) => (
                <motion.div
                  key={object.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden h-full">
                    <img
                      src={object.image}
                      alt={object.name}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="p-6">
                      <Tag tone="water" className="mb-2">Новый объект</Tag>
                      <Heading as="h3" className="text-lg mb-2">{object.name}</Heading>
                      <Body className="text-sm text-slate-600 mb-2">{object.description}</Body>
                      <Body className="text-xs text-slate-500">
                        <strong>Вместимость:</strong> {object.capacity}
                      </Body>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <Heading as="h3" className="text-2xl mb-6 text-water">Модернизация существующих объектов</Heading>
            <div className="grid md:grid-cols-3 gap-6">
              {modernizationObjects.map((object, index) => (
                <motion.div
                  key={object.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden h-full">
                    <img
                      src={object.image}
                      alt={object.name}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="p-6">
                      <Tag tone="water" className="mb-2">Модернизация</Tag>
                      <Heading as="h3" className="text-lg mb-2">{object.name}</Heading>
                      <Body className="text-sm text-slate-600">{object.description}</Body>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-to-br from-water/10 to-digital/10 border-2 border-water/30">
            <div className="p-8">
              <Heading as="h3" className="text-xl mb-4 text-water">Дополнительные мероприятия</Heading>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Body className="text-slate-700 mb-3">
                    <strong>Развитие библиотечной сети:</strong> Расширение сети учреждений культуры 
                    путем создания многофункциональных культурно-досуговых и выставочных центров, 
                    библиотек в новых микрорайонах.
                  </Body>
                  <Body className="text-slate-700">
                    <strong>Обеспеченность музыкальными инструментами:</strong> Для Детских школ искусств 
                    необходимо 170 млн руб.
                  </Body>
                </div>
                <div>
                  <Body className="text-slate-700 mb-3">
                    <strong>Культурно-туристические зоны:</strong> Формирование культурно-туристических зон 
                    с музейными и событийными площадками, а также фестивальными маршрутами.
                  </Body>
                  <Body className="text-slate-700">
                    <strong>Капитальные ремонты:</strong> Дворцов культуры и Досуговых центров.
                  </Body>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </PageSection>

      {/* Креативная экономика */}
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
              <Caption className="text-digital mb-2">Креативная экономика</Caption>
              <Heading as="h2" className="text-3xl">
                Условия для творческой деятельности
              </Heading>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {creativeEconomy.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="grid md:grid-cols-2 gap-6 items-center"
              >
                <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                  <Card className="overflow-hidden h-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                  </Card>
                </div>
                <div className={index % 2 === 0 ? "order-2" : "order-1"}>
                  <Heading as="h3" className="text-2xl mb-4 text-digital">{item.title}</Heading>
                  <Body className="text-slate-700 mb-4">
                    {item.description}
                  </Body>
                  <ul className="space-y-3">
                    {item.items.map((listItem, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <span className="text-digital mt-1 font-bold">•</span>
                        <Body className="text-slate-700">{listItem}</Body>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Суббренды */}
          <div className="mb-8">
            <Heading as="h3" className="text-2xl mb-6 text-digital">Айдентика и суббренды</Heading>
            <div className="grid md:grid-cols-2 gap-6">
              {subBrands.map((brand, index) => (
                <motion.div
                  key={brand.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-gradient-to-br from-digital/10 to-heritage/10 border-2 border-digital/30 h-full">
                    <div className="p-6">
                      <img
                        src={brand.image}
                        alt={brand.name}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                        loading="lazy"
                      />
                      <Heading as="h3" className="text-xl mb-2 text-digital">{brand.name}</Heading>
                      <Body className="text-slate-700 mb-2">{brand.description}</Body>
                      <Body className="text-sm text-slate-600">
                        <strong>Символ:</strong> {brand.symbol}
                      </Body>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-to-br from-heritage/10 to-digital/10 border-2 border-heritage/30">
            <div className="p-8">
              <Heading as="h3" className="text-xl mb-4 text-heritage">Кадровое обеспечение</Heading>
              <Body className="text-slate-700">
                К 2020 году была поставлена задача <strong>сформировать для системы образования муниципальный заказ</strong> 
                на профессиональную подготовку продюсеров и управляющих в сфере городских креативных индустрий и туризма.
              </Body>
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
            <div className="w-1 h-16 bg-gradient-to-b from-digital to-heritage rounded-full" />
            <div>
              <Caption className="text-digital mb-2">Картографические материалы</Caption>
              <Heading as="h2" className="text-3xl">
                ГИС-слои и схемы планирования
              </Heading>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Карта ОКН */}
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[400px] flex items-center justify-center">
              <div className="text-center p-6">
                <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <Heading as="h3" className="text-xl text-slate-600 mb-2">
                  Территории ОКН и зоны охраны
                </Heading>
                <Body className="text-slate-500 mb-4">
                  Объекты культурного наследия (ОКН), включая федеральные, региональные, выявленные. 
                  Границы зон охраны ОКН и зоны регулирования застройки для Центрального района.
                </Body>
                <Caption className="text-slate-400">Основной разворот раздела</Caption>
              </div>
            </Card>

            {/* Карта объектов культуры */}
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[400px] flex items-center justify-center">
              <div className="text-center p-6">
                <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
                <Heading as="h3" className="text-xl text-slate-600 mb-2">
                  Объекты культуры и досуга
                </Heading>
                <Body className="text-slate-500 mb-4">
                  Существующие и проектируемые объекты культурно-досугового назначения. Местоположение 
                  Детской школы искусств, молодежных центров и концертного зала.
                </Body>
                <Caption className="text-slate-400">Схема «Культурный каркас 2035»</Caption>
              </div>
            </Card>

            {/* Схема регенерации */}
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[400px] flex items-center justify-center md:col-span-2">
              <div className="text-center p-6">
                <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <Heading as="h3" className="text-xl text-slate-600 mb-2">
                  Регенерация и пешеходный каркас
                </Heading>
                <Body className="text-slate-500 mb-4">
                  Границы исторического ядра. Участки, запланированные под реновацию/редевелопмент 
                  (Морозовский городок, участки вдоль Тьмаки). Пешеходные оси (Старый Волжский мост 
                  как пешеходная зона) и фестивальные маршруты.
                </Body>
                <Caption className="text-slate-400">Врезка «Центр: Сохранение и Адаптация»</Caption>
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
            <div className="w-1 h-16 bg-gradient-to-b from-heritage to-digital rounded-full" />
            <div>
              <Caption className="text-heritage mb-2">Визуализация проектов</Caption>
              <Heading as="h2" className="text-3xl">
                Ключевые проекты и решения
              </Heading>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Коллаж От прошлого к будущему */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop"
                alt="От прошлого к будущему"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="heritage" className="mb-2">Коллаж</Tag>
                <Heading as="h3" className="text-lg mb-2">От прошлого к будущему</Heading>
                <Body className="text-sm text-slate-600">
                  Графический прием, иллюстрирующий преемственность и всестороннее обновление. 
                  Путевой дворец или Трехлучевая планировка, переходящая в рендер обновленных набережных.
                </Body>
              </div>
            </Card>

            {/* Рендер ОКН До/После */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop"
                alt="ОКН До/После"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="heritage" className="mb-2">Реставрация</Tag>
                <Heading as="h3" className="text-lg mb-2">ОКН «До/После»</Heading>
                <Body className="text-sm text-slate-600">
                  Визуализация реставрации исторически значимого здания (фасада на набережной Степана Разина 
                  или Морозовского городка) с применением Дизайн-кода.
                </Body>
              </div>
            </Card>

            {/* Новые объекты культуры */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=90&auto=format&fit=crop"
                alt="Новые объекты культуры"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="water" className="mb-2">Новые объекты</Tag>
                <Heading as="h3" className="text-lg mb-2">Концертно-зрелищный центр</Heading>
                <Body className="text-sm text-slate-600">
                  Визуализация Детской школы искусств или Концертно-зрелищного центра (на 3000 мест).
                </Body>
              </div>
            </Card>

            {/* Айдентика Юбилея */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop"
                alt="Айдентика Тверь-900"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="heritage" className="mb-2">Брендинг</Tag>
                <Heading as="h3" className="text-lg mb-2">Айдентика Юбилея</Heading>
                <Body className="text-sm text-slate-600">
                  Логотип «Тверь-900» и слоган «Соединяя столицы, создавая своё». 
                  Иконки трех волн/трезубца (Концепция 1: «Исток Великой Реки»).
                </Body>
              </div>
            </Card>

            {/* Символы идентичности */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551524164-6cf77f5e1d6e?w=1200&q=90&auto=format&fit=crop"
                alt="Символы идентичности"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="heritage" className="mb-2">Суббренды</Tag>
                <Heading as="h3" className="text-lg mb-2">Символы идентичности</Heading>
                <Body className="text-sm text-slate-600">
                  Иллюстрация Афанасия Никитина (символ первопроходства и туризма) или стилизованное 
                  изображение Михаила Круга (Душа города).
                </Body>
              </div>
            </Card>

            {/* Пешеходный мост */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551524164-6cf77f5e1d6e?w=1200&q=90&auto=format&fit=crop"
                alt="Пешеходный мост"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="water" className="mb-2">Регенерация</Tag>
                <Heading as="h3" className="text-lg mb-2">Пешеходный мост</Heading>
                <Body className="text-sm text-slate-600">
                  Рендер Старого Волжского моста в качестве прогулочной зоны, демонстрирующий трансформацию 
                  объекта культурного наследия (мост 1898–1900 гг.) в публичное пространство.
                </Body>
              </div>
            </Card>
          </div>
        </motion.div>
      </PageSection>
    </div>
  );
};

export default CulturePage;

