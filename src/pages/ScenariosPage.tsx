// src/pages/ScenariosPage.tsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { PageSection } from "../components/layout/PageSection";
import { Heading, Body, Caption } from "../components/ui/Typography";
import { Card } from "../components/ui/Card";
import { Tag } from "../components/ui/Tag";
import { Button } from "../components/ui/Button";

const scenarios = [
  {
    id: "limited",
    name: "Ограниченный сценарий",
    subtitle: "Пессимистический",
    color: "heritage",
    investment: "0.5×",
    investmentFull: "~0,5× от инвестиций Стратегии‑2035",
    description: "Точечные улучшения, ИТС, минимальная капиталоемкость",
    risks: "Низкие, но слабый эффект",
    focus: "Точечные улучшения, ИТС, минимальная капиталоемкость",
    transport: "Локальные узлы, без системного перелома модальностей",
    heritage: "Адресная консервация объектов",
    ecology: "Поддержание статус‑кво",
    tourism: "Стабилизация, рост за счет общероссийского тренда",
  },
  {
    id: "base",
    name: "Базовый сценарий",
    subtitle: "Реалистичный/Основной",
    color: "water",
    investment: "1×",
    investmentFull: "~1×, адаптированный к текущей макросреде",
    description: "Регулярная регенерация, модернизация сетей, парковка, пилотные набережные",
    risks: "Средние, управляемые",
    focus: "Регулярная регенерация, модернизация сетей, парковка, пилотные набережные",
    transport: "Улучшение ОТ и связности, подготовка к ВСМ",
    heritage: "Реставрация приоритетного пула, запуск адаптивного использования",
    ecology: "Локальные проекты на Тьмаке",
    tourism: "Устойчивый рост, до 3,5–4 млн поездок в область к 2027 году",
  },
  {
    id: "ambitious",
    name: "Амбициозный сценарий",
    subtitle: "Оптимистический",
    color: "digital",
    investment: "1.5–1.8×",
    investmentFull: "1,5–1,8× с опорой на федеральные, частные и ГЧП‑механизмы",
    description: "Пешеходный центр, полная связность набережных, крупные якорные проекты",
    risks: "Высокие, риск недофинансирования и незавершенности",
    focus: "Пешеходный центр, полная связность набережных, крупные якорные проекты",
    transport: "Полноценная интегрированная система, опора на эффект ВСМ‑2035+",
    heritage: "До 70% адаптированных ОКН, сильный бренд исторического центра",
    ecology: "Системная реабилитация Тьмаки и Лазури, зелёный каркас",
    tourism: "Туризм как ключевой экономический кластер, рост к 4,5–5+ млн",
  },
];

// Таймлайн ключевых событий
const timelineEvents = [
  { year: "2025", event: "Начало реализации мастер-плана", icon: "🚀" },
  { year: "2026", event: "Завершение Западного моста", icon: "🌉" },
  { year: "2028", event: "Запуск ВСМ Москва–Санкт-Петербург", icon: "🚄" },
  { year: "2030", event: "Ввод новых общественных пространств", icon: "🏛️" },
  { year: "2035", event: "900-летие Твери, достижение целевых показателей", icon: "🎉" },
  { year: "2040", event: "ВСМ «Новая Тверь» в полной эксплуатации", icon: "🚇" },
  { year: "2045", event: "Завершение долгосрочных проектов", icon: "✨" },
];

// Динамика туристического потока
const tourismData = [
  { year: "2023", value: 2.5, label: "Базовый уровень" },
  { year: "2024", value: 2.8, label: "Рост 12%" },
  { year: "2025", value: 3.7, label: "Рост 49%", highlight: true },
  { year: "2027", value: 4.0, label: "Цель базового сценария" },
  { year: "2035", value: 5.0, label: "Цель амбициозного сценария" },
];

export const ScenariosPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[color:var(--color-bg)]">
      <Header />
      
      {/* Hero секция */}
      <PageSection className="relative overflow-hidden min-h-[60vh] flex items-center bg-gradient-to-br from-water/10 via-digital/5 to-heritage/10">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=90&auto=format&fit=crop"
            alt="Развитие города"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60" />
        <div className="relative z-10 max-w-5xl w-full">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6"
          >
            ← Назад к структуре
          </Button>
          <Caption className="text-water font-semibold mb-4">
            Раздел 2
          </Caption>
          <Heading as="h1" className="text-4xl md:text-5xl lg:text-6xl mb-6 text-slate-900">
            Сценарии развития города и агломерации
          </Heading>
          <Body className="text-lg text-slate-700 max-w-3xl">
            Три сценария развития Твери и агломерации до 2035 года формируют рамку для выбора целевой траектории,
            обеспечивающей прорывное развитие к 900‑летию города как <strong>«города, привлекающего таланты»</strong>.
            Целевым рекомендуется <strong className="text-digital">гибридный сценарий</strong>, сочетающий устойчивость базового и прорывные элементы амбициозного.
          </Body>
        </div>
      </PageSection>

      {/* Стратегическая рамка */}
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
              <Caption className="text-water mb-2">Раздел I</Caption>
              <Heading as="h2" className="text-3xl">
                Стратегический контур и исходные условия
              </Heading>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-gradient-to-br from-digital/5 to-digital/10 border-digital/30">
              <Heading as="h3" className="mb-4 text-xl">Стратегическое видение</Heading>
              <Body className="text-slate-700 mb-4">
                Тверь закрепляет видение <strong className="text-digital">«города, привлекающего таланты»</strong>,
                опираясь на историческое ядро, рекреационный потенциал Волги и Тьмаки, выгодное положение на оси Москва–Санкт‑Петербург
                и запуск ВСМ, который сократит время в пути от Москвы до <strong>39 минут</strong>.
              </Body>
              <div className="flex flex-wrap gap-2">
                <Tag tone="digital">ВСМ 2028</Tag>
                <Tag tone="water">СЦ-2 Пространство</Tag>
                <Tag tone="heritage">СЦ-5 Инновации</Tag>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-heritage/5 to-heritage/10 border-heritage/30">
              <Heading as="h3" className="mb-4 text-xl">Ключевые достижения</Heading>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                  <div>
                    <Body className="font-semibold text-slate-900">Рост туристического потока</Body>
                    <Body className="text-sm text-slate-600">
                      Увеличение на <strong className="text-heritage">49%</strong> за 10 месяцев 2025 года
                    </Body>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                  <div>
                    <Body className="font-semibold text-slate-900">Развитие общественных пространств</Body>
                    <Body className="text-sm text-slate-600">
                      Реализация программ благоустройства
                    </Body>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                  <div>
                    <Body className="font-semibold text-slate-900">Спортивная инфраструктура</Body>
                    <Body className="text-sm text-slate-600">
                      Повышение обеспеченности спортивными объектами
                    </Body>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Таймлайн 2025-2045 */}
          <Card className="bg-gradient-to-br from-slate-50 to-white border-slate-200 mb-8">
            <Heading as="h3" className="text-2xl mb-6">Таймлайн развития 2025–2045</Heading>
            <div className="relative">
              {/* Линия таймлайна */}
              <div className="absolute left-0 right-0 top-12 h-1 bg-gradient-to-r from-heritage via-water to-digital opacity-30" />
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 relative">
                {timelineEvents.map((event, index) => (
                  <motion.div
                    key={event.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-3 rounded-full bg-white border-4 border-slate-200 flex items-center justify-center text-3xl shadow-lg hover:scale-110 transition-transform">
                        {event.icon}
                      </div>
                      <div className="text-2xl font-bold text-slate-900 mb-1">{event.year}</div>
                      <Body className="text-xs text-slate-600 leading-tight">{event.event}</Body>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </PageSection>

      {/* Сценарный анализ */}
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
              <Caption className="text-digital mb-2">Раздел II</Caption>
              <Heading as="h2" className="text-3xl">
                Сценарная рамка: три траектории развития
              </Heading>
            </div>
          </div>

          {/* Инфографика: Диаграмма-веер трех сценариев */}
          <Card className="bg-white mb-12 overflow-hidden">
            <Heading as="h3" className="text-2xl mb-6 px-6 pt-6">Сравнение сценариев</Heading>
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                {scenarios.map((scenario, index) => {
                  const colorClasses: Record<string, string> = {
                    heritage: "from-heritage/20 to-heritage/5 border-heritage/30",
                    water: "from-water/20 to-water/5 border-water/30",
                    digital: "from-digital/20 to-digital/5 border-digital/30",
                  };
                  const bgColorClasses: Record<string, string> = {
                    heritage: "bg-heritage",
                    water: "bg-water",
                    digital: "bg-digital",
                  };
                  const investmentValues: Record<string, number> = {
                    heritage: 0.5,
                    water: 1.0,
                    digital: 1.65, // среднее между 1.5 и 1.8
                  };
                  
                  return (
                    <motion.div
                      key={scenario.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative"
                    >
                      <Card className={`bg-gradient-to-br ${colorClasses[scenario.color] || ""} h-full`}>
                        {/* Индикатор инвестиций */}
                        <div className="mb-6">
                          <div className="flex items-baseline gap-2 mb-2">
                            <div className={`text-5xl font-bold ${bgColorClasses[scenario.color] || ""} text-white px-4 py-2 rounded-lg`}>
                              {scenario.investment}
                            </div>
                            <Body className="text-xs text-slate-600">инвестиций</Body>
                          </div>
                          <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${(investmentValues[scenario.color] || 1) * 50}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: index * 0.2 }}
                              className={`h-full ${bgColorClasses[scenario.color] || ""} rounded-full`}
                            />
                          </div>
                        </div>

                        <div className="mb-4">
                          <Heading as="h3" className="text-xl mb-1">{scenario.name}</Heading>
                          <Caption className="text-xs">{scenario.subtitle}</Caption>
                        </div>

                        <div className="space-y-3 text-sm">
                          <div>
                            <Body className="font-semibold text-slate-900 mb-1">Фокус:</Body>
                            <Body className="text-slate-700 text-xs">{scenario.focus}</Body>
                          </div>
                          <div>
                            <Body className="font-semibold text-slate-900 mb-1">Транспорт:</Body>
                            <Body className="text-slate-700 text-xs">{scenario.transport}</Body>
                          </div>
                          <div>
                            <Body className="font-semibold text-slate-900 mb-1">Наследие:</Body>
                            <Body className="text-slate-700 text-xs">{scenario.heritage}</Body>
                          </div>
                          <div>
                            <Body className="font-semibold text-slate-900 mb-1">Экология:</Body>
                            <Body className="text-slate-700 text-xs">{scenario.ecology}</Body>
                          </div>
                          <div>
                            <Body className="font-semibold text-slate-900 mb-1">Туризм:</Body>
                            <Body className="text-slate-700 text-xs">{scenario.tourism}</Body>
                          </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-slate-200">
                          <Body className="text-xs text-slate-600">
                            <strong>Риски:</strong> {scenario.risks}
                          </Body>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </Card>

          {/* Детальная таблица сравнения */}
          <Card className="overflow-x-auto mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-4 px-4 font-bold text-slate-900">Параметр</th>
                  <th className="text-left py-4 px-4 font-bold text-heritage">1. Ограниченный</th>
                  <th className="text-left py-4 px-4 font-bold text-water">2. Базовый</th>
                  <th className="text-left py-4 px-4 font-bold text-digital">3. Амбициозный</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 font-semibold">Инвестиции 2025–2035</td>
                  <td className="py-4 px-4">~0,5× от инвестиций Стратегии‑2035</td>
                  <td className="py-4 px-4">~1×, адаптированный к текущей макросреде</td>
                  <td className="py-4 px-4">1,5–1,8× с опорой на федеральные, частные и ГЧП‑механизмы</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 font-semibold">Фокус</td>
                  <td className="py-4 px-4">Точечные улучшения, ИТС, минимальная капиталоемкость</td>
                  <td className="py-4 px-4">Регулярная регенерация, модернизация сетей, парковка, пилотные набережные</td>
                  <td className="py-4 px-4"><strong>Пешеходный центр, полная связность набережных, крупные якорные проекты</strong></td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 font-semibold">Транспорт</td>
                  <td className="py-4 px-4">Локальные узлы, без системного перелома модальностей</td>
                  <td className="py-4 px-4">Улучшение ОТ и связности, подготовка к ВСМ</td>
                  <td className="py-4 px-4"><strong>Полноценная интегрированная система, опора на эффект ВСМ‑2035+</strong></td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 font-semibold">Наследие и идентичность</td>
                  <td className="py-4 px-4">Адресная консервация объектов</td>
                  <td className="py-4 px-4">Реставрация приоритетного пула, запуск адаптивного использования</td>
                  <td className="py-4 px-4"><strong>До 70% адаптированных ОКН, сильный бренд исторического центра</strong></td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 font-semibold">Экология</td>
                  <td className="py-4 px-4">Поддержание статус‑кво</td>
                  <td className="py-4 px-4">Локальные проекты на Тьмаке</td>
                  <td className="py-4 px-4"><strong>Системная реабилитация Тьмаки и Лазури, зелёный каркас</strong></td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 font-semibold">Туризм</td>
                  <td className="py-4 px-4">Стабилизация, рост за счет общероссийского тренда</td>
                  <td className="py-4 px-4">Устойчивый рост, до 3,5–4 млн поездок в область к 2027 году</td>
                  <td className="py-4 px-4"><strong>Туризм как ключевой экономический кластер, рост к 4,5–5+ млн</strong></td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 font-semibold">Риски</td>
                  <td className="py-4 px-4">Низкие, но слабый эффект</td>
                  <td className="py-4 px-4">Средние, управляемые</td>
                  <td className="py-4 px-4">Высокие, риск недофинансирования и незавершенности</td>
                </tr>
              </tbody>
            </table>
          </Card>

          {/* Диаграмма динамики туристического потока */}
          <Card className="bg-white mb-8">
            <Heading as="h3" className="text-2xl mb-6">Динамика туристического потока</Heading>
            <Body className="text-slate-600 mb-6">
              Тверская область входит в число лидеров по росту туристического потока. 
              Увеличение на <strong className="text-digital">49%</strong> за 10 месяцев 2025 года превращает туризм 
              в один из ключевых драйверов городской экономики.
            </Body>
            <div className="relative h-64 flex items-end justify-between gap-2">
              {tourismData.map((data, index) => {
                const maxValue = 5.0;
                const height = (data.value / maxValue) * 100;
                return (
                  <motion.div
                    key={data.year}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className={`flex-1 flex flex-col items-center ${
                      data.highlight ? "bg-gradient-to-t from-digital to-water" : "bg-gradient-to-t from-slate-300 to-slate-400"
                    } rounded-t-lg relative group`}
                  >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-slate-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        {data.value} млн
                      </div>
                    </div>
                    <div className="mt-auto mb-2 text-xs font-semibold text-white">
                      {data.value} млн
                    </div>
                    <div className="text-xs text-slate-600 mb-1 font-semibold">{data.year}</div>
                    <div className="text-xs text-slate-500 text-center px-1">{data.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </Card>

          {/* Целевой гибридный сценарий */}
          <Card className="bg-gradient-to-br from-digital/20 via-water/10 to-heritage/20 border-2 border-digital/30 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-digital via-water to-heritage flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                ⭐
              </div>
              <div>
                <Heading as="h3" className="text-2xl mb-2">Целевой сценарий: Гибридный</Heading>
                <Body className="text-slate-600">Базовый + прорывные элементы амбициозного</Body>
              </div>
            </div>
            <Body className="text-lg text-slate-700 mb-6">
              С учетом текущих достижений реализации Стратегии‑2035, подтвержденного роста туристического потока,
              запуска ВСМ и масштабного строительства Западного моста целевым для мастер‑плана предлагается{" "}
              <strong className="text-digital">гибридный сценарий</strong>, объединяющий основу базового и критически важные элементы амбициозного.
            </Body>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <Card className="bg-white/80">
                <div className="text-3xl mb-2">🔧</div>
                <Heading as="h3" className="text-lg mb-2">Модернизация сетей</Heading>
                <Body className="text-sm text-slate-700">
                  Износ тепловых сетей с 84,1% до 20–25% к 2035 году
                </Body>
              </Card>
              <Card className="bg-white/80">
                <div className="text-3xl mb-2">🌉</div>
                <Heading as="h3" className="text-lg mb-2">Западный мост</Heading>
                <Body className="text-sm text-slate-700">
                  Новая транспортная хора и связка с трассой М‑11
                </Body>
              </Card>
              <Card className="bg-white/80">
                <div className="text-3xl mb-2">🌊</div>
                <Heading as="h3" className="text-lg mb-2">Набережные</Heading>
                <Body className="text-sm text-slate-700">
                  Системная переработка набережных Волги и Тьмаки
                </Body>
              </Card>
              <Card className="bg-white/80">
                <div className="text-3xl mb-2">🎯</div>
                <Heading as="h3" className="text-lg mb-2">Туризм</Heading>
                <Body className="text-sm text-slate-700">
                  Поддержка туристического рывка через инфраструктуру и события
                </Body>
              </Card>
            </div>

            {/* Корректировки сценария */}
            <div className="bg-white/60 rounded-lg p-6">
              <Heading as="h3" className="text-xl mb-4">Корректировки исходного сценария</Heading>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Body className="font-semibold text-slate-900 mb-2">Демография</Body>
                  <Body className="text-sm text-slate-700">
                    Переход к качественным показателям (удержание талантов) при коридоре 450–460 тыс. жителей к 2035 году
                  </Body>
                </div>
                <div>
                  <Body className="font-semibold text-slate-900 mb-2">Инвестиции</Body>
                  <Body className="text-sm text-slate-700">
                    Адаптация с учетом санкций и удорожания строительства, опора на федеральное финансирование и ГЧП
                  </Body>
                </div>
                <div>
                  <Body className="font-semibold text-slate-900 mb-2">Экология</Body>
                  <Body className="text-sm text-slate-700">
                    Экологические проекты переводятся в перечень обязательных для выполнения к 2035 году
                  </Body>
                </div>
              </div>
            </div>
          </Card>

          {/* Место для картографического материала сценариев */}
          <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[500px] flex items-center justify-center">
            <div className="text-center">
              <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <Heading as="h3" className="text-xl text-slate-600 mb-2">
                Карта сценариев развития
              </Heading>
              <Body className="text-slate-500">
                Здесь будет размещена карта с визуализацией трех сценариев развития города и агломерации
              </Body>
            </div>
          </Card>
        </motion.div>
      </PageSection>

      {/* Пространственная жизнестойкость */}
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
              <Caption className="text-heritage mb-2">Раздел III</Caption>
              <Heading as="h2" className="text-3xl">
                Роль жизнестойкости и пространственной устойчивости
              </Heading>
            </div>
          </div>

          <Body className="text-lg text-slate-700 mb-8 max-w-4xl">
            Во всех трех сценариях уделяется внимание пространственной жизнестойкости: способности городской системы
            адаптироваться и восстанавливаться под воздействием климатических, экономических и инфраструктурных вызовов.
            Гибридный сценарий усиливает этот блок через интеграцию климатически устойчивого проектирования.
          </Body>

          {/* Аналогия резилентности */}
          <Card className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white mb-8">
            <Heading as="h3" className="text-2xl mb-4 text-white">Аналогия: Тверь как «город‑смартфон нового поколения»</Heading>
            <Body className="text-white/90 text-lg leading-relaxed mb-6">
              Пространственная жизнестойкость города подобна тому, как современный смартфон защищен от сбоев:
            </Body>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <Heading as="h3" className="text-lg mb-2 text-white">Базовый сценарий</Heading>
                <Body className="text-white/80 text-sm">
                  «Антивирус и регулярные обновления» — поддерживающие меры и модернизация
                </Body>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <Heading as="h3" className="text-lg mb-2 text-white">Амбициозный сценарий</Heading>
                <Body className="text-white/80 text-sm">
                  «Расширенный комплект защиты и аксессуаров» — крупные якорные проекты и расширенная инфраструктура
                </Body>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <Heading as="h3" className="text-lg mb-2 text-white">Гибридный сценарий</Heading>
                <Body className="text-white/80 text-sm">
                  Умное сочетание программной и аппаратной модернизации, включая замену устаревших компонентов (коммунальные сети) 
                  и внедрение «умных» сервисов управления (ИТС)
                </Body>
              </Card>
            </div>
          </Card>

          {/* Климатическая устойчивость */}
          <div className="mb-12">
            <Heading as="h3" className="text-2xl mb-6">1. Климатическая и экологическая устойчивость</Heading>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=90&auto=format&fit=crop"
                  alt="Водно-зелёный каркас"
                  className="w-full h-[300px] object-cover"
                />
                <div className="bg-white p-6">
                  <Heading as="h3" className="mb-2">Водно-зелёный каркас</Heading>
                  <Body className="text-sm text-slate-600">
                    Создание единого непрерывного каркаса зеленых насаждений общего пользования
                  </Body>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=90&auto=format&fit=crop"
                  alt="Реабилитация рек"
                  className="w-full h-[300px] object-cover"
                />
                <div className="bg-white p-6">
                  <Heading as="h3" className="mb-2">Реабилитация рек</Heading>
                  <Body className="text-sm text-slate-600">
                    Системная реабилитация малых рек Тьмаки и Лазури, формирование связного водно‑зелёного каркаса
                  </Body>
                </div>
              </div>
            </div>
          </div>

          {/* Инфраструктурная жизнестойкость */}
          <div className="mb-12">
            <Heading as="h3" className="text-2xl mb-6">2. Инфраструктурная и технологическая жизнестойкость</Heading>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
                <div className="text-5xl font-bold text-red-600 mb-2">84.1%</div>
                <Body className="text-slate-700 mb-4">Текущий износ тепловых сетей</Body>
                <div className="text-3xl font-bold text-green-600">→ 20–25%</div>
                <Body className="text-slate-700">Целевой показатель к 2035 году (гибридный сценарий)</Body>
              </Card>
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <div className="text-5xl font-bold text-blue-600 mb-2">100%</div>
                <Body className="text-slate-700 mb-4">Покрытие интеллектуальными светофорами</Body>
                <Body className="text-slate-700">К 2035 году</Body>
              </Card>
            </div>
          </div>

          {/* Транспортная связность */}
          <div className="mb-8">
            <Heading as="h3" className="text-2xl mb-6">3. Транспортная и пространственная связность</Heading>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <Heading as="h3" className="mb-4 text-lg">Обход транзита</Heading>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-digital mt-1">•</span>
                    <span>Строительство <strong>кольцевой автомобильной дороги</strong> вокруг Твери</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-digital mt-1">•</span>
                    <span>Система <strong>магистралей непрерывного движения</strong></span>
                  </li>
                </ul>
              </Card>
              <Card>
                <Heading as="h3" className="mb-4 text-lg">Усиление связности</Heading>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-water mt-1">•</span>
                    <span>Строительство <strong>четырех пересечений</strong> с Октябрьской железной дорогой</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-water mt-1">•</span>
                    <span>Создание <strong>Транспортно-пересадочных узлов (ТПУ)</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-water mt-1">•</span>
                    <span>Интеграция с <strong>ВСМ «Новая Тверь»</strong> (2028)</span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* Место для карты транспортной связности */}
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[500px] flex items-center justify-center">
              <div className="text-center">
                <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <Heading as="h3" className="text-xl text-slate-600 mb-2">
                  Карта транспортной связности и ВСМ
                </Heading>
                <Body className="text-slate-500">
                  Здесь будет размещена карта с обходными трассами, путепроводами, ТПУ и трассой ВСМ со станцией «Новая Тверь»
                </Body>
              </div>
            </Card>
          </div>
        </motion.div>
      </PageSection>
    </div>
  );
};

export default ScenariosPage;
