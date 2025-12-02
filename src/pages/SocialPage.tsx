import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PageSection } from "../components/layout/PageSection";
import { Heading, Body, Caption } from "../components/ui/Typography";
import { Card } from "../components/ui/Card";
import { Tag } from "../components/ui/Tag";
import { Button } from "../components/ui/Button";

export const SocialPage: React.FC = () => {
  const navigate = useNavigate();

  const educationKpi = [
    { label: "Дефицит школ", value: "10 → 0", target: "2035", color: "digital", current: "10" },
    { label: "Дефицит детских садов", value: "27 → 0", target: "2035", color: "water", current: "27" },
    { label: "Дети во вторую смену", value: "8256 → 0", target: "2035", color: "heritage", current: "8256" },
    { label: "Молодежь трудоспособного возраста", value: "16.3% → 31.15%", target: "2035", color: "digital", current: "16.3%" },
  ];

  const healthcareKpi = [
    { label: "Ожидаемая продолжительность жизни", value: "75 лет", target: "2035", color: "water" },
    { label: "Амбулаторно-поликлинические учреждения", value: "+2.7 тыс.", target: "2037-2039", color: "digital" },
  ];

  const sportKpi = [
    { label: "Доля населения, занимающегося спортом", value: "34.7% → 70%", target: "2035", color: "heritage", current: "34.7%" },
    { label: "Обеспеченность спортсооружениями", value: "46% → 68%+", target: "2027-2035", color: "water", current: "46%" },
  ];

  const educationProjects = [
    {
      name: "Инновационная школа «Сколково-Тверь»",
      description: "Строительство инновационной школы при участии Правительства Тверской области и Фонда Сколково",
      budget: "2,5 млрд руб.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=90&auto=format&fit=crop",
      isAnchor: true,
    },
    {
      name: "Университетский Кампус",
      description: "Строительство в Заволжском районе для формирования научно-образовательного кластера",
      budget: "1,5 млрд руб.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=90&auto=format&fit=crop",
      isAnchor: true,
    },
    {
      name: "Детская школа искусств",
      description: "Строительство на 650 мест для развития дополнительного образования",
      budget: "205 млн руб.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=90&auto=format&fit=crop",
      isAnchor: false,
    },
  ];

  const healthcareProjects = [
    {
      name: "Детская поликлиника",
      description: "Строительство в микрорайоне Южный",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&q=90&auto=format&fit=crop",
    },
    {
      name: "Подстанция скорой помощи",
      description: "Строительство в Заволжском районе",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&q=90&auto=format&fit=crop",
    },
    {
      name: "Комплекс детской областной клинической больницы",
      description: "Расширение на улице Болотникова",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&q=90&auto=format&fit=crop",
    },
  ];

  const sportProjects = [
    {
      name: "Спортивно-концертный комплекс",
      description: "С ледовой ареной и трибунами на 10 000 зрителей в микрорайоне «Южный» (221 000 м²)",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=90&auto=format&fit=crop",
      isAnchor: true,
    },
    {
      name: "Стадион имени Вагжанова",
      description: "Реконструкция с легкоатлетическими дорожками, универсальной площадкой, двумя бассейнами, теннисными кортами",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=90&auto=format&fit=crop",
      isAnchor: false,
    },
    {
      name: "Воднолыжный парк",
      description: "Развитие спортивно-рекреационных центров с водными видами спорта",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=90&auto=format&fit=crop",
      isAnchor: false,
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
              <Tag tone="digital">Раздел 4.6</Tag>
            </div>
            <Caption className="text-digital mb-4 font-semibold">Этап 2. Проектные решения</Caption>
            <Heading as="h1" className="text-4xl md:text-5xl mb-6 text-digital">
              Социальная сфера
            </Heading>
            <Body className="text-xl text-slate-700 mb-4 max-w-3xl">
              Образование, Здравоохранение, Спорт
            </Body>
            <Body className="text-lg text-slate-600 max-w-3xl">
              Обеспечение современных передовых стандартов качества жизни и превращение Твери в 
              «город – лидера по привлекательности для молодых» и «город, привлекающий таланты».
            </Body>
          </motion.div>
        </div>
      </PageSection>

      {/* KPI карточки - Образование */}
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
                Образование и наука
              </Heading>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {educationKpi.map((kpi, index) => {
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

      {/* Образование */}
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
              <Caption className="text-digital mb-2">Проектные решения</Caption>
              <Heading as="h2" className="text-3xl">
                Система образования и наука
              </Heading>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-digital/20 via-water/10 to-heritage/20 border-2 border-digital/30 mb-8">
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <Heading as="h3" className="text-xl mb-4 text-digital">Масштабное строительство</Heading>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-digital mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Строительство <strong>13 общеобразовательных школ</strong> (более чем на 15 тыс. мест)</Body>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-digital mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Строительство <strong>28 дошкольных учреждений</strong></Body>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-digital mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Реализация в рамках нацпроекта «Развитие образования» и проектов КРТ</Body>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-digital mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Развитие детского технопарка <strong>«Кванториум»</strong></Body>
                    </li>
                  </ul>
                </div>
                <div>
                  <Heading as="h3" className="text-xl mb-4 text-digital">Кадровое обеспечение</Heading>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-digital mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Муниципальный проект <strong>«Жилье в кредит»</strong></Body>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-digital mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Порядок предоставления муниципального жилого фонда</Body>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-digital mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Грант <strong>«Наш новый учитель»</strong> для привлечения молодых специалистов</Body>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-digital mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Трансформация сети учреждений всех уровней</Body>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* Якорные проекты образования */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {educationProjects.map((project, index) => (
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
                    {project.isAnchor && <Tag tone="digital" className="mb-2">Якорный проект</Tag>}
                    <Heading as="h3" className="text-lg mb-2">{project.name}</Heading>
                    <Body className="text-sm text-slate-600 mb-2">{project.description}</Body>
                    <Body className="text-xs text-slate-500">
                      <strong>Бюджет:</strong> {project.budget}
                    </Body>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </PageSection>

      {/* Здравоохранение */}
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
                Здравоохранение и социальная защита
              </Heading>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {healthcareKpi.map((kpi, index) => {
              const colorClasses = {
                water: "text-water",
                digital: "text-digital",
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

          <Card className="bg-gradient-to-br from-water/20 via-digital/10 to-heritage/20 border-2 border-water/30 mb-8">
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <Heading as="h3" className="text-xl mb-4 text-water">Модернизация и реконструкция</Heading>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-water mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Реконструкция и модернизация существующих объектов здравоохранения</Body>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-water mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Обновление основных фондов больниц и поликлиник</Body>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-water mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Ремонт Клинической больницы скорой медицинской помощи</Body>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-water mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Внедрение цифровизации медицины (ICT) для ведения «истории здоровья»</Body>
                    </li>
                  </ul>
                </div>
                <div>
                  <Heading as="h3" className="text-xl mb-4 text-water">Строительство и расширение сети</Heading>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-water mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Рост амбулаторно-поликлинических учреждений на <strong>2,7 тыс. посещений в смену</strong></Body>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-water mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Строительство <strong>Детской поликлиники</strong> в микрорайоне Южный</Body>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-water mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Строительство <strong>Подстанции скорой медицинской помощи</strong> в Заволжском районе</Body>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-water mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Размещение <strong>Офисов врачебной практики</strong> в новых микрорайонах</Body>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* Проекты здравоохранения */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {healthcareProjects.map((project, index) => (
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
                    <Tag tone="water" className="mb-2">Проект</Tag>
                    <Heading as="h3" className="text-lg mb-2">{project.name}</Heading>
                    <Body className="text-sm text-slate-600">{project.description}</Body>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Социальное обеспечение */}
          <Card className="bg-gradient-to-br from-heritage/10 to-water/10 border-2 border-heritage/30">
            <div className="p-8">
              <Heading as="h3" className="text-2xl mb-4 text-heritage">
                Социальное обеспечение и геронтология
              </Heading>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Body className="text-slate-700 mb-3">
                    <strong>Ликвидация дефицита койко-мест</strong> для социально уязвимых групп:
                  </Body>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-heritage mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Строительство домов-интернатов для престарелых, ветеранов (на 12,6 тыс. мест)</Body>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-heritage mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Дома-интернаты для взрослых инвалидов</Body>
                    </li>
                  </ul>
                </div>
                <div>
                  <Body className="text-slate-700 mb-3">
                    <strong>Развитие рынка коммерческой геронтологии:</strong>
                  </Body>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-heritage mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Строительство частных домов и пансионатов для пожилых и инвалидов (1,3 млн руб.)</Body>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-heritage mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Пилотный проект «Система долговременного ухода за гражданами пожилого возраста и инвалидами»</Body>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </PageSection>

      {/* Спорт */}
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
              <Caption className="text-heritage mb-2">Ключевые показатели</Caption>
              <Heading as="h2" className="text-3xl">
                Физическая культура и спорт
              </Heading>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {sportKpi.map((kpi, index) => {
              const colorClasses = {
                heritage: "text-heritage",
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

          <Card className="bg-gradient-to-br from-heritage/20 via-water/10 to-digital/20 border-2 border-heritage/30 mb-8">
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <Heading as="h3" className="text-xl mb-4 text-heritage">Крупные спортивные объекты</Heading>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-heritage mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Строительство <strong>Спортивно-концертного комплекса</strong> с ледовой ареной на 10 000 зрителей</Body>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-heritage mt-1 font-bold">•</span>
                      <Body className="text-slate-700"><strong>Реконструкция стадиона имени Вагжанова</strong> для соревнований всероссийского уровня</Body>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-heritage mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Создание <strong>Воднолыжного парка</strong> и развитие водных видов спорта</Body>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-heritage mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Строительство крупного спортивного комплекса на северо-западе Заволжья</Body>
                    </li>
                  </ul>
                </div>
                <div>
                  <Heading as="h3" className="text-xl mb-4 text-heritage">Массовый спорт</Heading>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-heritage mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Строительство новых <strong>ФОК</strong> (в микрорайоне «Радужный»)</Body>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-heritage mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Ремонт и модернизация спортивных площадок по месту жительства</Body>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-heritage mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Реализация проектов <strong>ППМИ</strong> (Программа поддержки местных инициатив)</Body>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-heritage mt-1 font-bold">•</span>
                      <Body className="text-slate-700">Увеличение числа спортивных школ и обеспечение условий для людей с ограниченными возможностями</Body>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* Проекты спорта */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {sportProjects.map((project, index) => (
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
            {/* Карта дефицитов */}
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[400px] flex items-center justify-center">
              <div className="text-center p-6">
                <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <Heading as="h3" className="text-xl text-slate-600 mb-2">
                  Дефициты и обеспеченность социальной сферой
                </Heading>
                <Body className="text-slate-500 mb-4">
                  Существующие и проектируемые объекты (ДОУ, школы, поликлиники, больницы). 
                  Радиусы доступности (400-500 м) для выявления «белых пятен» и зон дефицита.
                </Body>
                <Caption className="text-slate-400">Основной разворот раздела</Caption>
              </div>
            </Card>

            {/* Карта ключевых проектов */}
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[400px] flex items-center justify-center">
              <div className="text-center p-6">
                <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <Heading as="h3" className="text-xl text-slate-600 mb-2">
                  Ключевые социальные инвестиционные проекты
                </Heading>
                <Body className="text-slate-500 mb-4">
                  Места размещения якорных объектов: Школа «Сколково-Тверь», Университетский Кампус, 
                  Спортивно-концертный комплекс (Южный), ТПУ «ОКБ».
                </Body>
                <Caption className="text-slate-400">Схематичный план</Caption>
              </div>
            </Card>

            {/* Карта доступности спорта */}
            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 min-h-[400px] flex items-center justify-center md:col-span-2">
              <div className="text-center p-6">
                <svg className="w-24 h-24 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <Heading as="h3" className="text-xl text-slate-600 mb-2">
                  Доступность спортивной инфраструктуры
                </Heading>
                <Body className="text-slate-500 mb-4">
                  Существующие и планируемые спортивные сооружения: стадионы, ФОКи, бассейны. 
                  Реконструируемые объекты (Стадион Вагжанова) и места строительства плоскостных 
                  спортивных сооружений (ППМИ). Визуализация охвата населения.
                </Body>
                <Caption className="text-slate-400">Врезка или отдельный слайд</Caption>
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
            {/* Школа Сколково */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=90&auto=format&fit=crop"
                alt="Школа Сколково-Тверь"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="digital" className="mb-2">Якорный проект</Tag>
                <Heading as="h3" className="text-lg mb-2">Инновационная школа «Сколково-Тверь»</Heading>
                <Body className="text-sm text-slate-600">
                  Рендер якорного проекта в образовании, направленного на привлечение молодежи и талантов.
                </Body>
              </div>
            </Card>

            {/* Спортивный комплекс */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=90&auto=format&fit=crop"
                alt="Спортивно-концертный комплекс"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="heritage" className="mb-2">Якорный проект</Tag>
                <Heading as="h3" className="text-lg mb-2">Спортивно-концертный комплекс</Heading>
                <Body className="text-sm text-slate-600">
                  3D-модель крупнейшего спортивно-развлекательного объекта (10 000 мест) в Южном районе.
                </Body>
              </div>
            </Card>

            {/* Медицина До/После */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&q=90&auto=format&fit=crop"
                alt="Медицина До/После"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="water" className="mb-2">Модернизация</Tag>
                <Heading as="h3" className="text-lg mb-2">Медицина До/После</Heading>
                <Body className="text-sm text-slate-600">
                  Коллаж: фото существующей поликлиники и рендер модернизированного амбулаторного центра 
                  с акцентом на пациентоориентированность.
                </Body>
              </div>
            </Card>

            {/* Вторая смена */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=90&auto=format&fit=crop"
                alt="Ликвидация второй смены"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="digital" className="mb-2">Инфографика</Tag>
                <Heading as="h3" className="text-lg mb-2">Вторая смена</Heading>
                <Body className="text-sm text-slate-600">
                  Диаграмма, демонстрирующая ликвидацию второй смены в школах: 
                  8256 учащихся (2017) → 0 (2035).
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
                <Heading as="h3" className="text-lg mb-2">Плоскостная спортплощадка</Heading>
                <Body className="text-sm text-slate-600">
                  Фото/рендер современной, ухоженной площадки для занятий спортом шаговой доступности 
                  в рамках программы ППМИ.
                </Body>
              </div>
            </Card>

            {/* Доступная среда */}
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&q=90&auto=format&fit=crop"
                alt="Доступная среда"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <Tag tone="water" className="mb-2">Доступность</Tag>
                <Heading as="h3" className="text-lg mb-2">Доступная среда</Heading>
                <Body className="text-sm text-slate-600">
                  Иконка/схема, иллюстрирующая пандусы, лифты и специальное оборудование, 
                  подчеркивающая доступность для лиц с ограниченными возможностями.
                </Body>
              </div>
            </Card>
          </div>
        </motion.div>
      </PageSection>
    </div>
  );
};

export default SocialPage;

