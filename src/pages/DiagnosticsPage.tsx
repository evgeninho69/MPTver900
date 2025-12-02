// src/pages/DiagnosticsPage.tsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { PageSection } from "../components/layout/PageSection";
import { Heading, Body, Caption } from "../components/ui/Typography";
import { Card } from "../components/ui/Card";
import { Tag } from "../components/ui/Tag";
import { Button } from "../components/ui/Button";

export const DiagnosticsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[color:var(--color-bg)]">
      <Header />
      {/* Hero секция страницы */}
      <PageSection className="relative overflow-hidden min-h-[60vh] flex items-center bg-gradient-to-br from-digital/10 via-water/5 to-heritage/10">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=90&auto=format&fit=crop"
            alt="Тверь"
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
          <Caption className="text-digital font-semibold mb-4">
            Раздел 1
          </Caption>
          <Heading as="h1" className="text-4xl md:text-5xl lg:text-6xl mb-6 text-slate-900">
            Диагностика текущего состояния и тенденций
          </Heading>
          <Body className="text-lg text-slate-700 max-w-3xl">
            Подробный анализ текущего положения и стратегических документов Твери,
            основанный на Генеральном плане и Стратегии социально-экономического развития до 2035 года.
          </Body>
        </div>
      </PageSection>

      {/* Общая диагностика */}
      <PageSection className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heading as="h2" className="mb-6 text-3xl">
            I. Общая диагностика и ключевые вызовы
          </Heading>
          <Body className="mb-8 text-lg max-w-4xl">
            Тверь обладает выгодным транспортно-географическим положением между Москвой и Санкт-Петербургом
            и богатым историко-культурным наследием. Однако на этапе диагностики выявлены{" "}
            <strong className="text-digital">критические инфраструктурные и пространственные проблемы</strong>,
            которые требуют приоритетного решения для обеспечения "прорывного развития" города к 900-летию в 2035 году.
          </Body>

          {/* Визуальная карточка с анализом */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-gradient-to-br from-digital/5 to-digital/10 border-digital/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-digital flex items-center justify-center text-white font-bold text-xl">
                  ✓
                </div>
                <Heading as="h3" className="text-xl">Сильные стороны</Heading>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-digital mt-1">•</span>
                  <span>Историко-культурное ядро, потенциал полицентричности</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-digital mt-1">•</span>
                  <span>Высокий логистический потенциал, выгодное геоположение</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-digital mt-1">•</span>
                  <span>Компактный и уютный город, развитый научный потенциал</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-gradient-to-br from-heritage/5 to-heritage/10 border-heritage/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-heritage flex items-center justify-center text-white font-bold text-xl">
                  ⚠
                </div>
                <Heading as="h3" className="text-xl">Ключевые вызовы</Heading>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-heritage mt-1">•</span>
                  <span>Дефицит свободных территорий и мозаичность зон</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-heritage mt-1">•</span>
                  <span>Критический износ сетей ЖКХ (84,1% теплоснабжение, 85,3% водоснабжение)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-heritage mt-1">•</span>
                  <span>Перегруженность УДС, недостаток мостов, ликвидация электротранспорта</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Изображения для визуализации проблем */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=90&auto=format&fit=crop"
                alt="Градостроительство"
                className="w-full h-[200px] object-cover"
              />
              <div className="bg-white p-4">
                <Caption className="text-slate-500">Градостроительство</Caption>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=90&auto=format&fit=crop"
                alt="Инженерная инфраструктура"
                className="w-full h-[200px] object-cover"
              />
              <div className="bg-white p-4">
                <Caption className="text-slate-500">Инженерная сфера</Caption>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=90&auto=format&fit=crop"
                alt="Транспорт"
                className="w-full h-[200px] object-cover"
              />
              <div className="bg-white p-4">
                <Caption className="text-slate-500">Транспорт</Caption>
              </div>
            </div>
          </div>

          {/* Таблица анализа */}
          <Card className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-4 px-4 font-bold text-slate-900">Сфера</th>
                  <th className="text-left py-4 px-4 font-bold text-digital">Сильные стороны/Потенциал</th>
                  <th className="text-left py-4 px-4 font-bold text-heritage">Слабые стороны/Ключевые вызовы</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 font-semibold">Градостроительство</td>
                  <td className="py-4 px-4">Историко-культурное ядро, потенциал полицентричности</td>
                  <td className="py-4 px-4">Дефицит свободных территорий и мозаичность селитебных и производственных зон в центре</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 font-semibold">Инженерная сфера</td>
                  <td className="py-4 px-4">Внедрение элементов «Умного города»</td>
                  <td className="py-4 px-4">Критический износ сетей ЖКХ (теплоснабжение — 84,1%, водоснабжение — 85,3%)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 font-semibold">Транспорт</td>
                  <td className="py-4 px-4">Высокий логистический потенциал, выгодное геоположение</td>
                  <td className="py-4 px-4">Перегруженность УДС из-за роста автомобилизации (1-е место в ЦФО), недостаток мостов, отсутствие обходных трасс. Ликвидация электротранспорта</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 font-semibold">Социокультурная сфера</td>
                  <td className="py-4 px-4">Компактный и уютный город, развитый научный потенциал, рост гражданской активности</td>
                  <td className="py-4 px-4">Дефицит социальной инфраструктуры (10 школ и 27 детских садов). Отток молодых кадров в Москву и Санкт-Петербург</td>
                </tr>
              </tbody>
            </table>
          </Card>
        </motion.div>
      </PageSection>

      {/* Архитектурно-градостроительный анализ */}
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
              <Caption className="text-digital mb-2">Раздел II</Caption>
              <Heading as="h2" className="text-3xl">
                Архитектурно-градостроительный анализ
              </Heading>
            </div>
          </div>

          {/* Галерея изображений исторического центра */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=90&auto=format&fit=crop"
                alt="Исторический центр Твери"
                className="w-full h-[400px] object-cover"
              />
              <div className="bg-white p-6">
                <Caption className="text-slate-500 mb-2">Историческое ядро Твери</Caption>
                <Body>Центральная часть города сохранила ценную историко-градостроительную среду и регулярную (лучевую) планировочную структуру конца XVIII века</Body>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1920&q=90&auto=format&fit=crop"
                alt="Архитектура Твери"
                className="w-full h-[400px] object-cover"
              />
              <div className="bg-white p-6">
                <Caption className="text-slate-500 mb-2">Объекты культурного наследия</Caption>
                <Body>В городе насчитывается более 500 объектов культурного наследия, требующих сохранения и реставрации</Body>
              </div>
            </div>
          </div>

          {/* Дополнительные изображения */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=90&auto=format&fit=crop"
                alt="Реки Твери"
                className="w-full h-[250px] object-cover"
              />
              <div className="bg-white p-4">
                <Caption className="text-slate-500">Волга, Тверца, Тьмака</Caption>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=90&auto=format&fit=crop"
                alt="Городская застройка"
                className="w-full h-[250px] object-cover"
              />
              <div className="bg-white p-4">
                <Caption className="text-slate-500">Планировочная структура</Caption>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=90&auto=format&fit=crop"
                alt="Культурное наследие"
                className="w-full h-[250px] object-cover"
              />
              <div className="bg-white p-4">
                <Caption className="text-slate-500">Культурное наследие</Caption>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card>
              <Heading as="h3" className="mb-4 text-xl">Текущее состояние</Heading>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-digital mt-1">•</span>
                  <span><strong>500+ объектов культурного наследия</strong> (ОКН) в городе</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-digital mt-1">•</span>
                  <span>Город разделен реками Волгой и Тверцой, а также Октябрьской железной дорогой</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-digital mt-1">•</span>
                  <span>Мозаичность взаиморасположения селитебных и производственных зон</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-digital mt-1">•</span>
                  <span>Практически отсутствуют свободные территории для нового строительства</span>
                </li>
              </ul>
            </Card>

            <Card>
              <Heading as="h3" className="mb-4 text-xl">Градостроительные цели</Heading>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-water mt-1">•</span>
                  <span><strong>Регенерация исторического центра</strong> с сохранением архитектурно-ландшафтного комплекса</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-water mt-1">•</span>
                  <span>Переход к <strong>полицентрической пространственной организации</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-water mt-1">•</span>
                  <span><strong>70% отреставрированных/адаптированных ОКН</strong> к 2035 году</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-water mt-1">•</span>
                  <span>Формирование <strong>природно-ландшафтного каркаса</strong></span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Место для картографического материала */}
          <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[500px] flex items-center justify-center">
            <div className="text-center">
              <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <Heading as="h3" className="text-xl text-slate-600 mb-2">
                Картографический материал
              </Heading>
              <Body className="text-slate-500">
                Здесь будет размещена карта планировочной структуры Твери
              </Body>
            </div>
          </Card>
        </motion.div>
      </PageSection>

      {/* Транспортный анализ */}
      <PageSection className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-gradient-to-b from-water to-heritage rounded-full" />
            <div>
              <Caption className="text-water mb-2">Раздел III</Caption>
              <Heading as="h2" className="text-3xl">
                Транспортный анализ
              </Heading>
            </div>
          </div>

          {/* KPI карточки */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
              <div className="text-4xl font-bold text-red-600 mb-2">1-е место</div>
              <Body className="text-slate-700">В ЦФО по числу легковых автомобилей на 1000 человек</Body>
            </Card>
            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
              <div className="text-4xl font-bold text-orange-600 mb-2">50%</div>
              <Body className="text-slate-700">Магистральных улиц требуют ремонта</Body>
            </Card>
            <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
              <div className="text-4xl font-bold text-amber-600 mb-2">100%</div>
              <Body className="text-slate-700">Целевая доля ОТ в перевозках к 2035 году</Body>
            </Card>
          </div>

          {/* Изображения транспорта */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90&auto=format&fit=crop"
                alt="Транспортная инфраструктура"
                className="w-full h-[300px] object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&q=90&auto=format&fit=crop"
                alt="Городской транспорт"
                className="w-full h-[300px] object-cover"
              />
            </div>
          </div>

          {/* Место для транспортной карты */}
          <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[500px] flex items-center justify-center mb-8">
            <div className="text-center">
              <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <Heading as="h3" className="text-xl text-slate-600 mb-2">
                Транспортная карта
              </Heading>
              <Body className="text-slate-500">
                Здесь будет размещена карта транспортной инфраструктуры и планируемых проектов
              </Body>
            </div>
          </Card>

          {/* Транспортные проекты */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <Heading as="h3" className="mb-4 text-xl">Текущие проблемы</Heading>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-heritage mt-1">•</span>
                  <span>Перегрузка улично-дорожной сети</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-heritage mt-1">•</span>
                  <span>Дефицит мостов через Волгу</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-heritage mt-1">•</span>
                  <span>Отсутствие обходных трасс</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-heritage mt-1">•</span>
                  <span>Ликвидация электротранспорта (трамвай, троллейбус)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-heritage mt-1">•</span>
                  <span>Острая нехватка парковок</span>
                </li>
              </ul>
            </Card>

            <Card>
              <Heading as="h3" className="mb-4 text-xl">Планируемые проекты</Heading>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-digital mt-1">•</span>
                  <span>Строительство <strong>Западного и Восточного</strong> мостовых переходов</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-digital mt-1">•</span>
                  <span>Создание системы <strong>магистралей непрерывного движения</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-digital mt-1">•</span>
                  <span><strong>Возрождение трамвая</strong> и приобретение 1037 единиц подвижного состава</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-digital mt-1">•</span>
                  <span>Внедрение <strong>65 умных светофорных перекрестков</strong> к 2035 году</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-digital mt-1">•</span>
                  <span>Пешеходизация Старого Волжского моста</span>
                </li>
              </ul>
            </Card>
          </div>
        </motion.div>
      </PageSection>

      {/* Социокультурный анализ */}
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
              <Caption className="text-heritage mb-2">Раздел IV</Caption>
              <Heading as="h2" className="text-3xl">
                Социокультурный анализ
              </Heading>
            </div>
          </div>

          {/* Приоритеты горожан */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-digital/10 to-digital/5 border-digital/30">
              <div className="text-5xl font-bold text-digital mb-2">68.1%</div>
              <Heading as="h3" className="text-lg mb-2">ЖКХ и благоустройство</Heading>
              <Body className="text-sm text-slate-600">Приоритет для жителей</Body>
            </Card>
            <Card className="bg-gradient-to-br from-water/10 to-water/5 border-water/30">
              <div className="text-5xl font-bold text-water mb-2">61.4%</div>
              <Heading as="h3" className="text-lg mb-2">Дороги и Транспорт</Heading>
              <Body className="text-sm text-slate-600">Приоритет для жителей</Body>
            </Card>
            <Card className="bg-gradient-to-br from-heritage/10 to-heritage/5 border-heritage/30">
              <div className="text-5xl font-bold text-heritage mb-2">62.5%</div>
              <Heading as="h3" className="text-lg mb-2">Уровень жизни</Heading>
              <Body className="text-sm text-slate-600">Приоритет для жителей</Body>
            </Card>
          </div>

          {/* Изображения социальной сферы */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="rounded-2xl overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=90&auto=format&fit=crop"
                alt="Образование"
                className="w-full h-[250px] object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="bg-white p-4">
                <Caption className="text-slate-500">Образование</Caption>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=90&auto=format&fit=crop"
                alt="Здравоохранение"
                className="w-full h-[250px] object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="bg-white p-4">
                <Caption className="text-slate-500">Здравоохранение</Caption>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&q=90&auto=format&fit=crop"
                alt="Общественные пространства"
                className="w-full h-[250px] object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="bg-white p-4">
                <Caption className="text-slate-500">Общественные пространства</Caption>
              </div>
            </div>
          </div>

          {/* Дополнительные изображения социокультурной сферы */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=90&auto=format&fit=crop"
                alt="Городская жизнь"
                className="w-full h-[300px] object-cover"
              />
              <div className="bg-white p-6">
                <Heading as="h3" className="mb-2">Компактный и уютный город</Heading>
                <Body className="text-slate-600">Тверь воспринимается жителями как уютный и компактный город с богатым историко-культурным наследием</Body>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=90&auto=format&fit=crop"
                alt="Культурная жизнь"
                className="w-full h-[300px] object-cover"
              />
              <div className="bg-white p-6">
                <Heading as="h3" className="mb-2">Рост гражданской активности</Heading>
                <Body className="text-slate-600">Активный рост гражданской активности молодежи и запрос на развитие креативных пространств</Body>
              </div>
            </div>
          </div>

          {/* Дефицит социальной инфраструктуры */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
              <Heading as="h3" className="mb-4 text-xl text-red-700">Дефицит объектов</Heading>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-1">10</div>
                  <Body className="text-slate-700">Школ</Body>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-1">27</div>
                  <Body className="text-slate-700">Детских садов</Body>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-1">8,256</div>
                  <Body className="text-slate-700">Учащихся во вторую смену (2017 год)</Body>
                </div>
              </div>
            </Card>

            <Card>
              <Heading as="h3" className="mb-4 text-xl">Цели к 2035 году</Heading>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-digital mt-1">•</span>
                  <span><strong>0 учащихся</strong> во вторую смену</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-digital mt-1">•</span>
                  <span>Строительство новых образовательных объектов</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-digital mt-1">•</span>
                  <span>Создание <strong>университетского Кампуса</strong> в Заволжье</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-digital mt-1">•</span>
                  <span>Тверь как <strong>«город, привлекающий таланты»</strong></span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Брендинг города */}
          <Card className="bg-gradient-to-br from-heritage/10 via-water/5 to-digital/10 border-2 border-heritage/30">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-heritage to-water flex items-center justify-center text-white text-2xl font-bold">
                Т
              </div>
              <div>
                <Heading as="h3" className="text-2xl mb-2">Брендинг города</Heading>
                <Body className="text-slate-600">Позиционирование Твери</Body>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Tag tone="water" className="mb-3">«Город на трех реках»</Tag>
                <Body className="text-slate-700">
                  Тверь позиционируется как уникальный город, расположенный на слиянии трех рек: Волги, Тверцы и Тьмаки
                </Body>
              </div>
              <div>
                <Tag tone="digital" className="mb-3">«Между двух столиц. На пути всей России»</Tag>
                <Body className="text-slate-700">
                  Стратегическое положение между Москвой и Санкт-Петербургом определяет особую роль города
                </Body>
              </div>
            </div>
          </Card>
        </motion.div>
      </PageSection>

      {/* Выводы */}
      <PageSection className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Caption className="text-white/70 mb-4">Вывод по диагностике</Caption>
          <Heading as="h2" className="text-3xl mb-6 text-white">
            Ключевая проблема Твери
          </Heading>
          <Body className="text-lg text-white/90 mb-8 leading-relaxed">
            Диагностика показывает, что <strong className="text-white">ключевая проблема Твери</strong> заключается
            в <strong className="text-white">конфликте между высокой транспортной нагрузкой/износом инфраструктуры</strong> и{" "}
            <strong className="text-white">ценным, но хрупким историческим ядром</strong>. Мастер-план нацелен на устранение
            этого конфликта путем <strong className="text-white">полицентрического пространственного развития</strong>,{" "}
            <strong className="text-white">агрессивной модернизации сетей</strong> (снижение износа до 20% к 2035 году) и{" "}
            <strong className="text-white">приоритета движения людей</strong> (ОТ, пешеходы, велосипеды).
          </Body>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <Body className="text-white/95 italic text-lg leading-relaxed">
              "Город Тверь находится в состоянии, когда сохранение его исторической и природной уникальности требует
              не "точечных" улучшений, а <strong className="text-white">системного прорыва</strong> в сфере инфраструктуры
              и мобильности, подобно тому, как изношенный, но ценный механизм требует полной реставрации и замены всех
              внутренних критических узлов, чтобы вновь стать образцом эффективности и красоты."
            </Body>
          </Card>
        </motion.div>
      </PageSection>
    </div>
  );
};

export default DiagnosticsPage;

