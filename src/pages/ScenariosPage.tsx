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
    description: "Минимум капиталоемкости, точечные улучшения",
    risks: "Низкие, но слабый эффект",
  },
  {
    id: "base",
    name: "Базовый сценарий",
    subtitle: "Реалистичный/Основной",
    color: "water",
    investment: "1×",
    description: "Условная база, соответствующая стратегии",
    risks: "Средние",
  },
  {
    id: "ambitious",
    name: "Амбициозный сценарий",
    subtitle: "Оптимистический",
    color: "digital",
    investment: "1.8×",
    description: "Агрессивный рост инвестиций",
    risks: "Высокие",
  },
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
            Формирование трех сценариев развития, выработка гипотез развития и определение целевого сценария
            для обеспечения прорывного развития Твери к 900-летию в 2035 году.
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
                Стратегическая рамка и предпосылки
              </Heading>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-gradient-to-br from-digital/5 to-digital/10 border-digital/30">
              <Heading as="h3" className="mb-4 text-xl">Стратегическое видение</Heading>
              <Body className="text-slate-700 mb-4">
                Тверь стремится стать <strong className="text-digital">«городом, привлекающим таланты»</strong> и лидером
                по привлекательности для молодежи, сочетая <strong>сохраненное историческое наследие</strong> с{" "}
                <strong>передовыми технологиями</strong>.
              </Body>
              <div className="flex flex-wrap gap-2">
                <Tag tone="digital">СЦ-2 Пространство</Tag>
                <Tag tone="water">СЦ-5 Инновации</Tag>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-heritage/5 to-heritage/10 border-heritage/30">
              <Heading as="h3" className="mb-4 text-xl">Этапность реализации</Heading>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-heritage text-white flex items-center justify-center font-bold text-sm">
                      I
                    </div>
                    <Body className="font-semibold">Этап 2025–2035</Body>
                  </div>
                  <Body className="text-sm text-slate-600 ml-10">
                    Фокус на подготовке, ключевых проектах и «быстрых победах». Цель — достижение показателей к 900-летию.
                  </Body>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-water text-white flex items-center justify-center font-bold text-sm">
                      II
                    </div>
                    <Body className="font-semibold">Этап 2035–2045</Body>
                  </div>
                  <Body className="text-sm text-slate-600 ml-10">
                    Реализация долгосрочных решений, включая ВСМ «Новая Тверь», полное формирование транспортной системы.
                  </Body>
                </div>
              </div>
            </Card>
          </div>

          {/* Изображения стратегического видения */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="rounded-2xl overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=90&auto=format&fit=crop"
                alt="Историческое наследие"
                className="w-full h-[250px] object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="bg-white p-4">
                <Caption className="text-slate-500">Историческое наследие</Caption>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=90&auto=format&fit=crop"
                alt="Передовые технологии"
                className="w-full h-[250px] object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="bg-white p-4">
                <Caption className="text-slate-500">Передовые технологии</Caption>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=90&auto=format&fit=crop"
                alt="Привлечение талантов"
                className="w-full h-[250px] object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="bg-white p-4">
                <Caption className="text-slate-500">Привлечение талантов</Caption>
              </div>
            </div>
          </div>

          {/* Дополнительные изображения этапности */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=90&auto=format&fit=crop"
                alt="Этап 2025-2035"
                className="w-full h-[300px] object-cover"
              />
              <div className="bg-white p-6">
                <Heading as="h3" className="mb-2">Этап I: 2025–2035</Heading>
                <Body className="text-slate-600">
                  Фокус на подготовке, ключевых проектах и «быстрых победах». Достижение целевых показателей к 900-летию Твери.
                </Body>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop"
                alt="Этап 2035-2045"
                className="w-full h-[300px] object-cover"
              />
              <div className="bg-white p-6">
                <Heading as="h3" className="mb-2">Этап II: 2035–2045</Heading>
                <Body className="text-slate-600">
                  Реализация долгосрочных решений, включая ВСМ «Новая Тверь», полное формирование интегрированной транспортной системы.
                </Body>
              </div>
            </div>
          </div>
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
                Сценарный анализ развития
              </Heading>
            </div>
          </div>

          {/* Карточки сценариев */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {scenarios.map((scenario, index) => {
              const colorClasses: Record<string, string> = {
                heritage: "bg-gradient-to-br from-heritage/10 to-heritage/5 border-heritage/30",
                water: "bg-gradient-to-br from-water/10 to-water/5 border-water/30",
                digital: "bg-gradient-to-br from-digital/10 to-digital/5 border-digital/30",
              };
              const bgColorClasses: Record<string, string> = {
                heritage: "bg-heritage",
                water: "bg-water",
                digital: "bg-digital",
              };
              
              return (
                <motion.div
                  key={scenario.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Card className={`${colorClasses[scenario.color] || ""} h-full`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-full ${bgColorClasses[scenario.color] || ""} flex items-center justify-center text-white font-bold text-xl`}>
                        {index + 1}
                      </div>
                      <div>
                        <Heading as="h3" className="text-lg">{scenario.name}</Heading>
                        <Caption className="text-xs">{scenario.subtitle}</Caption>
                      </div>
                    </div>
                    <div className="text-4xl font-bold mb-2" style={{ color: `var(--color-${scenario.color})` }}>
                      {scenario.investment}
                    </div>
                    <Body className="text-sm text-slate-700 mb-4">{scenario.description}</Body>
                    <div className="pt-4 border-t border-slate-200">
                      <Body className="text-xs text-slate-600">
                        <strong>Риски:</strong> {scenario.risks}
                      </Body>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

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
                  <td className="py-4 px-4 font-semibold">Инвестиции (10 лет)</td>
                  <td className="py-4 px-4">0.5× (Минимум)</td>
                  <td className="py-4 px-4">1× (База)</td>
                  <td className="py-4 px-4">1.8× (Агрессивный рост)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 font-semibold">Фокус развития</td>
                  <td className="py-4 px-4">Точечные улучшения, ИТС, минимум капиталоемкости</td>
                  <td className="py-4 px-4">Регулярная регенерация, ИТС, парковка, пилотные проекты</td>
                  <td className="py-4 px-4"><strong>Пешеходный центр, полная связность набережных, крупные якоря</strong></td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 font-semibold">Экология рек</td>
                  <td className="py-4 px-4">Поддержание статуса-кво</td>
                  <td className="py-4 px-4">Локальные улучшения Тьмаки</td>
                  <td className="py-4 px-4"><strong>Системная реабилитация Тьмаки и Лазури</strong></td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 font-semibold">Мобильность</td>
                  <td className="py-4 px-4">+5 п.п. доли ОТ/Пеш/Вело</td>
                  <td className="py-4 px-4">+10 п.п. доли, +15% скорости</td>
                  <td className="py-4 px-4"><strong>+18 п.п. доли, +25% скорости</strong></td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 font-semibold">Историческое наследие</td>
                  <td className="py-4 px-4">Адресная консервация</td>
                  <td className="py-4 px-4">Реставрация приоритетного пула</td>
                  <td className="py-4 px-4"><strong>70% адаптированных ОКН к 2035 г.</strong></td>
                </tr>
              </tbody>
            </table>
          </Card>

          {/* Изображения сценариев */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop"
                alt="Ограниченный сценарий"
                className="w-full h-[300px] object-cover"
              />
              <div className="bg-white p-6">
                <Caption className="text-heritage mb-2">Ограниченный сценарий</Caption>
                <Body className="text-sm">Точечные улучшения, минимальные инвестиции</Body>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=90&auto=format&fit=crop"
                alt="Базовый сценарий"
                className="w-full h-[300px] object-cover"
              />
              <div className="bg-white p-6">
                <Caption className="text-water mb-2">Базовый сценарий</Caption>
                <Body className="text-sm">Регулярная регенерация, умеренные инвестиции</Body>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&q=90&auto=format&fit=crop"
                alt="Амбициозный сценарий"
                className="w-full h-[300px] object-cover"
              />
              <div className="bg-white p-6">
                <Caption className="text-digital mb-2">Амбициозный сценарий</Caption>
                <Body className="text-sm">Пешеходный центр, полная связность, крупные проекты</Body>
              </div>
            </div>
          </div>

          {/* Целевой сценарий */}
          <Card className="bg-gradient-to-br from-digital/20 via-water/10 to-heritage/20 border-2 border-digital/30">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-digital via-water to-heritage flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                ⭐
              </div>
              <div>
                <Heading as="h3" className="text-2xl mb-2">Целевой сценарий: Гибридный</Heading>
                <Body className="text-slate-600">Базовый + Амбициозный</Body>
              </div>
            </div>
            <Body className="text-lg text-slate-700 mb-6">
              Для достижения главной стратегической цели – <strong>обеспечение прорывного развития экономики
              и повышение комфортности жизни</strong> – рекомендуется выбрать <strong className="text-digital">гибридный сценарий</strong>,
              который сочетает стабильность базового варианта с наиболее критичными и прорывными элементами амбициозного.
            </Body>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-white/80">
                <Heading as="h3" className="text-lg mb-2">1. Прорывной эффект</Heading>
                <Body className="text-sm text-slate-700">
                  Резкое снижение износа коммунальных сетей с 84,1% до 20% к 2035 году требует агрессивной модернизации
                </Body>
              </Card>
              <Card className="bg-white/80">
                <Heading as="h3" className="text-lg mb-2">2. Быстрые победы</Heading>
                <Body className="text-sm text-slate-700">
                  Пешеходизация Старого Волжского моста, редизайн Бульвара Радищева, пилотные участки набережных
                </Body>
              </Card>
              <Card className="bg-white/80">
                <Heading as="h3" className="text-lg mb-2">3. Гибкость</Heading>
                <Body className="text-sm text-slate-700">
                  Защита критически важных приоритетов даже при ограниченном финансировании, готовность к ускорению
                </Body>
              </Card>
            </div>
          </Card>

          {/* Место для картографического материала сценариев */}
          <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[500px] flex items-center justify-center mt-8">
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
                Повышение пространственной жизнестойкости
              </Heading>
            </div>
          </div>

          <Body className="text-lg text-slate-700 mb-8 max-w-4xl">
            Пространственная жизнестойкость (резилентность) — это способность городских систем, сообществ и инфраструктуры{" "}
            <strong>преодолевать угрозы, адаптироваться и восстанавливаться</strong>.
          </Body>

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
                    Регулирование стока и дноуглубление русел малых рек Тьмаки и Лазури
                  </Body>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <Heading as="h3" className="mb-3 text-lg">Рекультивация</Heading>
                <Body className="text-sm text-slate-700">
                  Рекультивация нарушенных ландшафтов для повышения экологической устойчивости
                </Body>
              </Card>
              <Card>
                <Heading as="h3" className="mb-3 text-lg">Акустический комфорт</Heading>
                <Body className="text-sm text-slate-700">
                  Ликвидация зон акустического дискомфорта от аэродрома «Мигалово»
                </Body>
              </Card>
              <Card>
                <Heading as="h3" className="mb-3 text-lg">Вынос производств</Heading>
                <Body className="text-sm text-slate-700">
                  Вынос экологически опасных производств из жилой застройки и прибрежных зон
                </Body>
              </Card>
            </div>
          </div>

          {/* Инфраструктурная жизнестойкость */}
          <div className="mb-12">
            <Heading as="h3" className="text-2xl mb-6">2. Инфраструктурная и технологическая жизнестойкость</Heading>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
                <div className="text-5xl font-bold text-red-600 mb-2">84.1%</div>
                <Body className="text-slate-700 mb-4">Текущий износ тепловых сетей</Body>
                <div className="text-3xl font-bold text-green-600">→ 20%</div>
                <Body className="text-slate-700">Целевой показатель к 2035 году</Body>
              </Card>
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <div className="text-5xl font-bold text-blue-600 mb-2">100%</div>
                <Body className="text-slate-700 mb-4">Покрытие интеллектуальными светофорами</Body>
                <Body className="text-slate-700">К 2035 году</Body>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=90&auto=format&fit=crop"
                  alt="Умный город"
                  className="w-full h-[200px] object-cover"
                />
                <div className="bg-white p-4">
                  <Caption className="text-slate-500">ИТС и умные технологии</Caption>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=90&auto=format&fit=crop"
                  alt="Инженерные сети"
                  className="w-full h-[200px] object-cover"
                />
                <div className="bg-white p-4">
                  <Caption className="text-slate-500">Модернизация сетей</Caption>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=90&auto=format&fit=crop"
                  alt="Обращение с отходами"
                  className="w-full h-[200px] object-cover"
                />
                <div className="bg-white p-4">
                  <Caption className="text-slate-500">МКОО</Caption>
                </div>
              </div>
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
                </ul>
              </Card>
            </div>

            {/* Изображения транспортной связности */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop"
                  alt="Транспортная инфраструктура"
                  className="w-full h-[300px] object-cover"
                />
                <div className="bg-white p-6">
                  <Heading as="h3" className="mb-2">Полицентрическое развитие</Heading>
                  <Body className="text-sm text-slate-600">
                    Создание новых центров активности: «Тверь-Экспо» в Заволжье, «Тверь-Сити» в Южном районе
                  </Body>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&q=90&auto=format&fit=crop"
                  alt="Мультимодальность"
                  className="w-full h-[300px] object-cover"
                />
                <div className="bg-white p-6">
                  <Heading as="h3" className="mb-2">Мультимодальность</Heading>
                  <Body className="text-sm text-slate-600">
                    ТПУ «Тверь-Центр» и будущая станция ВСМ «Новая Тверь» обеспечат свободное использование нескольких видов транспорта
                  </Body>
                </div>
              </div>
            </div>

            {/* Место для карты транспортной связности */}
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[500px] flex items-center justify-center">
              <div className="text-center">
                <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <Heading as="h3" className="text-xl text-slate-600 mb-2">
                  Карта транспортной связности
                </Heading>
                <Body className="text-slate-500">
                  Здесь будет размещена карта с обходными трассами, путепроводами и ТПУ
                </Body>
              </div>
            </Card>
          </div>

          {/* Аналогия резилентности */}
          <Card className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            <Heading as="h3" className="text-2xl mb-4 text-white">Аналогия для понимания резилентности</Heading>
            <Body className="text-white/90 text-lg leading-relaxed mb-6">
              Пространственная жизнестойкость города подобна тому, как современный смартфон защищен от сбоев:
            </Body>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <Heading as="h3" className="text-lg mb-2 text-white">Базовый сценарий</Heading>
                <Body className="text-white/80 text-sm">
                  Установка стандартного антивируса и регулярное обновление ПО (достаточно для повседневной работы)
                </Body>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <Heading as="h3" className="text-lg mb-2 text-white">Амбициозный сценарий</Heading>
                <Body className="text-white/80 text-sm">
                  Покупка дополнительной батареи, водонепроницаемого чехла и двухлетней гарантии (защита от серьезных угроз)
                </Body>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <Heading as="h3" className="text-lg mb-2 text-white">Гибридный сценарий</Heading>
                <Body className="text-white/80 text-sm">
                  Программная замена старых компонентов (коммунальные сети) и установка GPS-трекера (ИТС) для эффективности и устойчивости
                </Body>
              </Card>
            </div>
          </Card>
        </motion.div>
      </PageSection>
    </div>
  );
};

export default ScenariosPage;

