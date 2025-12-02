import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PageSection } from "../components/layout/PageSection";
import { Heading, Body, Caption } from "../components/ui/Typography";
import { Card } from "../components/ui/Card";
import { Tag } from "../components/ui/Tag";
import { Button } from "../components/ui/Button";

export const InfrastructurePage: React.FC = () => {
  const navigate = useNavigate();

  const kpiData = [
    { label: "Износ теплоснабжения", value: "84.1% → 20%", target: "2035", color: "heritage", current: "84.1%" },
    { label: "Износ водоснабжения", value: "85.3% → 20%", target: "2035", color: "water", current: "85.3%" },
    { label: "Износ канализации", value: "85.8% → 20%", target: "2035", color: "water", current: "85.8%" },
    { label: "Утилизация ТКО", value: "62%", target: "2025", color: "digital", current: "0%" },
  ];

  const infrastructureSystems = [
    {
      title: "Водоснабжение и Водоотведение",
      description: "Модернизация сетей, реконструкция ОСК, глубокая доочистка",
      icon: "💧",
      color: "water",
      measures: [
        {
          category: "Модернизация сетей",
          items: [
            "Реконструкция и капитальный ремонт сетей водоснабжения",
            "Прокладка Северо-Западного разгрузочного коллектора",
            "Строительство двух КНС (Мамулино, Бурашевское шоссе) суммарной производительностью 17 тыс. м³/сут",
            "Ликвидация выпусков очищенных сточных вод от промышленных предприятий",
          ],
        },
        {
          category: "Очистка сточных вод (ОСК)",
          items: [
            "Поэтапная реконструкция существующих очистных сооружений",
            "Строительство комплекса глубокой доочистки (трехступенчатая)",
            "Ультрафиолетовое обеззараживание",
            "Строительство напорных трубопроводов с глубоководным рассеивающим оголовком в Волгу",
          ],
        },
        {
          category: "Утилизация осадка",
          items: [
            "Рекультивация иловых площадок",
            "Строительство цеха по сжиганию подсушенного осадка",
            "Использование золы в производстве строительных материалов",
          ],
        },
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop",
    },
    {
      title: "Теплоснабжение",
      description: "Переход на закрытую систему ГВС, строительство новых источников",
      icon: "🔥",
      color: "heritage",
      measures: [
        {
          category: "Переход на закрытую систему ГВС",
          items: [
            "Полный переход на закрытую систему ГВС в соответствии с ФЗ № 416-ФЗ",
            "Поэтапный перевод потребителей с «открытой» на «закрытую» схему",
            "Установка индивидуальных тепловых пунктов (ИТП) с погодным регулированием",
            "Замена элеваторных узлов на ИТП",
          ],
        },
        {
          category: "Строительство и модернизация источников",
          items: [
            "Строительство новой ТЭЦ Залинейная (западнее Боровлево-1)",
            "Реконструкция котельных ТЭЦ-1 для выработки электроэнергии в комбинированном цикле",
            "Модернизация котельных ВК-Южная и ВК-1",
            "Перевод котельной «Брусилово» на природный газ",
          ],
        },
        {
          category: "Реконструкция сетей",
          items: [
            "Перекладка части трубопроводов с увеличением диаметров",
            "Снижение износа тепловых сетей до 20% к 2035 году",
          ],
        },
      ],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop",
    },
    {
      title: "Электроснабжение и Газоснабжение",
      description: "Повышение надежности, строительство новых подстанций",
      icon: "⚡",
      color: "digital",
      measures: [
        {
          category: "Повышение надежности",
          items: [
            "Реконструкция сети 110 кВ городского кольца для работы в замкнутом режиме",
            "Снятие ограничений на технологическое присоединение потребителей",
          ],
        },
        {
          category: "Строительство новых подстанций",
          items: [
            "Строительство ПС «Городская» 110/10 кВ",
            "Строительство ПС «Восточная» 110/35 кВ",
          ],
        },
        {
          category: "Модернизация существующих",
          items: [
            "Реконструкция ПС «Заволжская», «Завод 1 мая», «Вогжановская»",
            "Телемеханизация в городских ГРП",
            "Установка счетчиков учета газа",
          ],
        },
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop",
    },
    {
      title: "Ливневое водоотведение",
      description: "Развитие сети, очистка стока, защита от подтопления",
      icon: "🌧️",
      color: "water",
      measures: [
        {
          category: "Развитие сети и очистка стока",
          items: [
            "Развитие водосточной сети города",
            "Строительство комплекса очистных сооружений в устье ручья Соминка",
            "Комплекс очистных сооружений в районе деревни Бобачево",
            "Пруды-отстойники в районах Черкассы и Сахарово",
          ],
        },
        {
          category: "Защита от подтопления",
          items: [
            "Устройство дамб обвалования в районах сложившейся застройки (Киселево, Затверечье)",
            "Подсыпка территорий минеральным грунтом на проектируемых пойменных территориях",
            "Устройство дренажно-дождевых коллекторов для понижения уровня грунтовых вод",
          ],
        },
      ],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=90&auto=format&fit=crop",
    },
    {
      title: "Система управления ТКО",
      description: "Раздельный сбор, переработка, утилизация отходов",
      icon: "♻️",
      color: "digital",
      measures: [
        {
          category: "Раздельный сбор",
          items: [
            "Внедрение и популяризация селективного (раздельного) сбора ТКО",
            "Достижение доли утилизированных ТКО до 62% к 2025 году",
          ],
        },
        {
          category: "Инфраструктура",
          items: [
            "Строительство мусоросортировочных станций (Затверечье, Пролетарский район)",
            "Строительство мусороперерабатывающего завода (МПЗ) в период 2028–2031 годы",
            "Объем финансирования МПЗ: 500 млн. руб.",
          ],
        },
        {
          category: "Утилизация опасных отходов",
          items: [
            "Приобретение инсенераторной установки для утилизации биологических отходов",
            "Установка по утилизации больничных и медицинских отходов",
          ],
        },
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=90&auto=format&fit=crop",
    },
    {
      title: "Цифровизация инфраструктуры",
      description: "Умный город: АСУ ТП, цифровой учет, мониторинг",
      icon: "🤖",
      color: "digital",
      measures: [
        {
          category: "АСУ ТП",
          items: [
            "Создание Автоматизированной системы управления технологическими процессами",
            "Диспетчеризация и дистанционный контроль сбора и транспортировки сточной воды",
          ],
        },
        {
          category: "Цифровой учет",
          items: [
            "Внедрение системы «Цифровой учет коммуникационных ресурсов»",
            "Установка приборов учета тепловой энергии у потребителей",
          ],
        },
        {
          category: "Мониторинг",
          items: [
            "Применение автоматизированных технологий мониторинга режимов использования сетей",
            "Диагностика технического состояния и определение остаточного ресурса",
          ],
        },
      ],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop",
    },
  ];

  const keyProjects = [
    {
      name: "ТЭЦ Залинейная",
      description: "Строительство новой ТЭЦ для обслуживания перспективной застройки южной части города",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop",
    },
    {
      name: "Комплекс глубокой доочистки ОСК",
      description: "Трехступенчатая доочистка с УФ-обеззараживанием для достижения рыбохозяйственных нормативов",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop",
    },
    {
      name: "Мусороперерабатывающий завод",
      description: "Строительство МПЗ в период 2028–2031 годы (объем финансирования 500 млн. руб.)",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=90&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      {/* Hero секция */}
      <PageSection className="relative overflow-hidden min-h-[50vh] flex items-center bg-gradient-to-br from-digital/10 via-heritage/5 to-water/10">
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
              <Tag tone="digital">Раздел 4.5</Tag>
            </div>
            <Caption className="text-digital mb-4 font-semibold">Этап 2. Проектные решения</Caption>
            <Heading as="h1" className="text-4xl md:text-5xl mb-6 text-digital">
              Инженерная инфраструктура
            </Heading>
            <Body className="text-xl text-slate-700 mb-4 max-w-3xl">
              Коммуникации и инженерные сети
            </Body>
            <Body className="text-lg text-slate-600 max-w-3xl">
              Кардинальная модернизация критически изношенных сетей и внедрение ресурсосберегающих 
              и «умных» технологий для достижения СЦ-2 Пространство-2035.
            </Body>
          </motion.div>
        </div>
      </PageSection>

      {/* Критическое состояние */}
      <PageSection className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 mb-8">
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  ⚠️
                </div>
                <div>
                  <Heading as="h2" className="text-2xl mb-2 text-red-700">Критическое состояние</Heading>
                  <Body className="text-slate-700">Исходные данные по износу сетей</Body>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/80 rounded-lg p-4 border border-red-200">
                  <Body className="text-sm text-slate-600 mb-2">Теплоснабжение</Body>
                  <Heading as="h3" className="text-3xl font-bold text-red-600">84.1%</Heading>
                  <Body className="text-xs text-slate-500 mt-1">Критический износ</Body>
                </div>
                <div className="bg-white/80 rounded-lg p-4 border border-red-200">
                  <Body className="text-sm text-slate-600 mb-2">Водоснабжение</Body>
                  <Heading as="h3" className="text-3xl font-bold text-red-600">85.3%</Heading>
                  <Body className="text-xs text-slate-500 mt-1">79% сети нуждается в замене</Body>
                </div>
                <div className="bg-white/80 rounded-lg p-4 border border-red-200">
                  <Body className="text-sm text-slate-600 mb-2">Канализация</Body>
                  <Heading as="h3" className="text-3xl font-bold text-red-600">85.8%</Heading>
                  <Body className="text-xs text-slate-500 mt-1">62.9% уличной сети нуждается в замене</Body>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </PageSection>

      {/* KPI карточки */}
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

      {/* Системы инженерной инфраструктуры */}
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
              <Caption className="text-digital mb-2">Проектные решения</Caption>
              <Heading as="h2" className="text-3xl">
                Системы инженерной инфраструктуры
              </Heading>
            </div>
          </div>

          <div className="space-y-12">
            {infrastructureSystems.map((system, index) => {
              const colorClasses = {
                heritage: "border-heritage/30 bg-gradient-to-br from-amber-50/50 to-amber-100/30",
                digital: "border-digital/30 bg-gradient-to-br from-blue-50/50 to-blue-100/30",
                water: "border-water/30 bg-gradient-to-br from-teal-50/50 to-teal-100/30",
              };
              const colorClass = colorClasses[system.color as keyof typeof colorClasses] || "";
              const textColorClasses = {
                heritage: "text-heritage",
                digital: "text-digital",
                water: "text-water",
              };
              const textColorClass = textColorClasses[system.color as keyof typeof textColorClasses] || "";

              return (
                <motion.div
                  key={system.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className={`${colorClass} border-2`}>
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-${system.color} to-${system.color}/70 flex items-center justify-center text-white text-3xl shadow-lg`}>
                          {system.icon}
                        </div>
                        <div>
                          <Heading as="h3" className={`text-2xl mb-2 ${textColorClass}`}>
                            {system.title}
                          </Heading>
                          <Body className="text-slate-700">{system.description}</Body>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8 mb-6">
                        <div>
                          <img
                            src={system.image}
                            alt={system.title}
                            className="w-full h-64 object-cover rounded-lg"
                            loading="lazy"
                          />
                        </div>
                        <div className="space-y-6">
                          {system.measures.map((measure, measureIndex) => (
                            <div key={measureIndex}>
                              <Heading as="h4" className={`text-lg mb-3 ${textColorClass}`}>
                                {measure.category}
                              </Heading>
                              <ul className="space-y-2">
                                {measure.items.map((item, itemIndex) => (
                                  <li key={itemIndex} className="flex items-start gap-3">
                                    <span className={`${textColorClass} mt-1 font-bold`}>•</span>
                                    <Body className="text-slate-700 text-sm">{item}</Body>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
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
                Ключевые проекты модернизации
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
                    <Tag tone="digital" className="mb-2">Якорный проект</Tag>
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
            <div className="w-1 h-16 bg-gradient-to-b from-digital to-water rounded-full" />
            <div>
              <Caption className="text-digital mb-2">Картографические материалы</Caption>
              <Heading as="h2" className="text-3xl">
                ГИС-слои и схемы планирования
              </Heading>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Карта канализации */}
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[400px] flex items-center justify-center">
              <div className="text-center p-6">
                <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <Heading as="h3" className="text-xl text-slate-600 mb-2">
                  Инженерная инфраструктура. Канализация
                </Heading>
                <Body className="text-slate-500 mb-4">
                  Существующие и проектируемые коллекторы, КНС, трассировка Северо-Западного коллектора, 
                  места реконструкции ОСК и строительства комплекса глубокой доочистки.
                </Body>
                <Caption className="text-slate-400">Основной разворот</Caption>
              </div>
            </Card>

            {/* Схема теплоснабжения */}
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[400px] flex items-center justify-center">
              <div className="text-center p-6">
                <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <Heading as="h3" className="text-xl text-slate-600 mb-2">
                  Теплоснабжение и энергоэффективность
                </Heading>
                <Body className="text-slate-500 mb-4">
                  Источники теплоснабжения (ТЭЦ Залинейная, котельные), магистральные тепловые сети, 
                  ключевые подстанции и линии ЛЭП. Участки высокого износа.
                </Body>
                <Caption className="text-slate-400">Врезка или дополнительный слайд</Caption>
              </div>
            </Card>

            {/* Карта инженерной подготовки */}
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[400px] flex items-center justify-center">
              <div className="text-center p-6">
                <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <Heading as="h3" className="text-xl text-slate-600 mb-2">
                  Инженерная подготовка территории
                </Heading>
                <Body className="text-slate-500 mb-4">
                  Зоны затопления паводком 1%, места инженерной защиты (дамбы, подсыпка), 
                  проектные очистные сооружения ливневой канализации.
                </Body>
                <Caption className="text-slate-400">Врезка «Климатическая устойчивость»</Caption>
              </div>
            </Card>

            {/* Схема обращения с ТКО */}
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[400px] flex items-center justify-center">
              <div className="text-center p-6">
                <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <Heading as="h3" className="text-xl text-slate-600 mb-2">
                  Обращение с ТКО
                </Heading>
                <Body className="text-slate-500 mb-4">
                  Местоположение мусоросортировочных станций, МПЗ, места рекультивации нарушенных 
                  территорий (золоотвалы ТЭЦ-1, ТЭЦ-4).
                </Body>
                <Caption className="text-slate-400">Инфографичный план</Caption>
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
            {/* Инфографика износа */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop"
                alt="Критический износ"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="heritage" className="mb-2">Инфографика</Tag>
                <Heading as="h3" className="text-lg mb-2">Критический износ</Heading>
                <Body className="text-sm text-slate-600">
                  Диаграммы, показывающие процент износа сетей (84,1% Тепло, 85,3% Вода) 
                  и целевое снижение до 20%.
                </Body>
              </div>
            </Card>

            {/* Комплекс доочистки */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop"
                alt="Комплекс глубокой доочистки"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="water" className="mb-2">Очистка</Tag>
                <Heading as="h3" className="text-lg mb-2">Комплекс глубокой доочистки ОСК</Heading>
                <Body className="text-sm text-slate-600">
                  Рендер нового комплекса очистных сооружений (включая УФ-обеззараживание) 
                  для достижения рыбохозяйственных нормативов.
                </Body>
              </div>
            </Card>

            {/* Цех сжигания осадка */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=90&auto=format&fit=crop"
                alt="Цех сжигания осадка"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="heritage" className="mb-2">Утилизация</Tag>
                <Heading as="h3" className="text-lg mb-2">Цех по сжиганию осадка</Heading>
                <Body className="text-sm text-slate-600">
                  Рендер/схема цеха по сжиганию осадка: иллюстрация решения проблемы 
                  утилизации илового осадка.
                </Body>
              </div>
            </Card>

            {/* Закрытая система ГВС */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop"
                alt="Закрытая система ГВС"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="heritage" className="mb-2">Теплоснабжение</Tag>
                <Heading as="h3" className="text-lg mb-2">Переход на закрытую систему ГВС</Heading>
                <Body className="text-sm text-slate-600">
                  Схематичное изображение (или фото ИТП) для объяснения перехода на закрытую 
                  систему горячего водоснабжения.
                </Body>
              </div>
            </Card>

            {/* МПЗ */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=90&auto=format&fit=crop"
                alt="Мусороперерабатывающий завод"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="digital" className="mb-2">ТКО</Tag>
                <Heading as="h3" className="text-lg mb-2">Мусороперерабатывающий завод</Heading>
                <Body className="text-sm text-slate-600">
                  Рендер современного МПЗ: визуализация крупного якорного проекта в сфере ТКО.
                </Body>
              </div>
            </Card>

            {/* Smart Utilities */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop"
                alt="Smart Utilities"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="digital" className="mb-2">Умный город</Tag>
                <Heading as="h3" className="text-lg mb-2">Smart Utilities</Heading>
                <Body className="text-sm text-slate-600">
                  Инфографика: набор иконок или схема, показывающая внедрение цифрового учета 
                  коммунальных ресурсов и АСУ ТП для повышения энергоэффективности.
                </Body>
              </div>
            </Card>
          </div>
        </motion.div>
      </PageSection>
    </div>
  );
};

export default InfrastructurePage;

