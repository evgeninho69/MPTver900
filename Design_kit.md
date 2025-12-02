Отлично, давай сразу заложим нормальный дизайн-кит, чтобы дальше не плодить «разовый» CSS.

---

## 1. Структура дизайн-кита

Предлагаю такую минимальную структуру:

| Слой           | Что в нём                               | Файлы                                 |
| -------------- | --------------------------------------- | ------------------------------------- |
| **Токены**     | Цвета, шрифты, радиусы, тени, брейки    | `src/design/tokens.ts`, `globals.css` |
| **Базовые UI** | Button, Tag, Card, типографика, Section | `src/components/ui/*`                 |
| **Layout**     | Контейнеры, секции, гриды               | `src/components/layout/*`             |

Дальше все экраны (TitlePage, карта, KPI и т.д.) уже собираем из этих кирпичей.

---

## 2. Дизайн-токены

### 2.1. `src/design/tokens.ts`

```ts
// src/design/tokens.ts

export const colors = {
  bg: "#f5f5f7", // архитектурный лист
  text: "#1f2933", // charcoal

  heritage: "#c27a35", // медный / золото — наследие, 900-летие
  water: "#0f766e",    // teal — вода, экология
  digital: "#2563eb",  // electric blue — цифра, ИТС

  borderSubtle: "#e5e7eb",
  cardBg: "#f9fafb",
};

export const radii = {
  sm: "0.5rem",
  md: "1rem",
  xl: "1.5rem",
};

export const shadows = {
  card: "0 14px 40px rgba(15, 23, 42, 0.08)",
};

export const typography = {
  fontFamilyDisplay: '"Montserrat", system-ui, -apple-system, sans-serif',
  fontFamilyBody: '"Inter", system-ui, -apple-system, sans-serif',
};
```

### 2.2. Глобальные стили и CSS-переменные (`src/index.css` или `src/globals.css`)

```css
:root {
  --color-bg: #f5f5f7;
  --color-text: #1f2933;
  --color-heritage: #c27a35;
  --color-water: #0f766e;
  --color-digital: #2563eb;
  --color-border-subtle: #e5e7eb;
  --color-card-bg: #f9fafb;

  --radius-sm: 0.5rem;
  --radius-md: 1rem;
  --radius-xl: 1.5rem;

  --shadow-card: 0 14px 40px rgba(15, 23, 42, 0.08);
}

body {
  margin: 0;
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: "Inter", system-ui, -apple-system, sans-serif;
}

/* заголовки – геометрический гротеск */
h1, h2, h3, h4 {
  font-family: "Montserrat", system-ui, -apple-system, sans-serif;
}

/* табличные цифры — для KPI */
.kpi-numeric {
  font-variant-numeric: tabular-nums;
}
```

(Шрифты `Inter` и `Montserrat` добавь через `<link>` из Google Fonts или локально.)

---

## 3. Базовые UI-компоненты

### 3.1. Типографика (`src/components/ui/Typography.tsx`)

```tsx
// src/components/ui/Typography.tsx
import React from "react";
import clsx from "clsx";

type HeadingProps = {
  as?: "h1" | "h2" | "h3";
  children: React.ReactNode;
  className?: string;
};

export const Heading: React.FC<HeadingProps> = ({
  as = "h2",
  children,
  className,
}) => {
  const Tag = as;
  const base =
    "font-bold tracking-tight text-slate-900 font-[Montserrat,system-ui,-apple-system,sans-serif]";
  const sizes: Record<HeadingProps["as"], string> = {
    h1: "text-3xl sm:text-4xl lg:text-5xl",
    h2: "text-2xl sm:text-3xl",
    h3: "text-xl sm:text-2xl",
  };

  return <Tag className={clsx(base, sizes[as], className)}>{children}</Tag>;
};

type BodyProps = {
  children: React.ReactNode;
  className?: string;
};

export const Body: React.FC<BodyProps> = ({ children, className }) => (
  <p className={clsx("text-sm md:text-base leading-relaxed text-slate-700", className)}>
    {children}
  </p>
);

type CaptionProps = {
  children: React.ReactNode;
  className?: string;
};

export const Caption: React.FC<CaptionProps> = ({ children, className }) => (
  <p
    className={clsx(
      "text-xs uppercase tracking-[0.2em] text-slate-500",
      className
    )}
  >
    {children}
  </p>
);
```

---

### 3.2. Кнопка (`src/components/ui/Button.tsx`)

Варианты:

* `primary` — акцент «цифровизация/динамика» (electric blue),
* `secondary` — «наследие» (copper),
* `ghost` — прозрачная для вторичных действий.

```tsx
// src/components/ui/Button.tsx
import React from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "sm";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}) => {
  const base =
    "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-[color:var(--color-accent-digital)] text-white hover:bg-blue-600 focus:ring-[color:var(--color-accent-digital)]",
    secondary:
      "bg-[color:var(--color-accent-heritage)] text-white hover:bg-[#a86224] focus:ring-[color:var(--color-accent-heritage)]",
    ghost:
      "bg-white/70 text-slate-800 border border-slate-200 hover:bg-slate-50 focus:ring-slate-300",
  };

  const sizes: Record<ButtonSize, string> = {
    md: "px-5 py-2.5 text-sm",
    sm: "px-3.5 py-1.5 text-xs",
  };

  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </button>
  );
};
```

---

### 3.3. Тег / маркер (для быстрых характеристик)

`src/components/ui/Tag.tsx`

```tsx
import React from "react";
import clsx from "clsx";

type TagTone = "default" | "water" | "heritage" | "digital";

type TagProps = {
  children: React.ReactNode;
  tone?: TagTone;
  className?: string;
};

export const Tag: React.FC<TagProps> = ({
  children,
  tone = "default",
  className,
}) => {
  const tones: Record<TagTone, string> = {
    default:
      "border-slate-300 text-slate-700 bg-white/70",
    water:
      "border-[color:var(--color-accent-water)] text-[color:var(--color-accent-water)] bg-teal-50/80",
    heritage:
      "border-[color:var(--color-accent-heritage)] text-[color:var(--color-accent-heritage)] bg-amber-50/80",
    digital:
      "border-[color:var(--color-accent-digital)] text-[color:var(--color-accent-digital)] bg-blue-50/80",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-sm",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
};
```

---

### 3.4. Карточка (`src/components/ui/Card.tsx`)

```tsx
// src/components/ui/Card.tsx
import React from "react";
import clsx from "clsx";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-[color:var(--color-border-subtle)] bg-[color:var(--color-card-bg)] p-4 shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
};
```

---

### 3.5. Секция / контейнер страницы

`src/components/layout/PageSection.tsx`

```tsx
// src/components/layout/PageSection.tsx
import React from "react";
import clsx from "clsx";

type PageSectionProps = {
  children: React.ReactNode;
  className?: string;
  withBgWhite?: boolean;
};

export const PageSection: React.FC<PageSectionProps> = ({
  children,
  className,
  withBgWhite = false,
}) => {
  return (
    <section
      className={clsx(
        "px-6 py-12 md:px-16",
        withBgWhite && "bg-white shadow-inner",
        className
      )}
    >
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  );
};
```

---

## 4. Как «подружить» дизайн-кит с титульной страницей

Пример: немного переписать твой `TitlePage`, чтобы он использовал дизайн-кит.

```tsx
// TitlePage.tsx
import React from "react";
import { PageSection } from "./components/layout/PageSection";
import { Heading, Body, Caption } from "./components/ui/Typography";
import { Tag } from "./components/ui/Tag";
import { Card } from "./components/ui/Card";

const tags = [
  { label: "Горизонт: до 2035 / 2045", tone: "digital" as const },
  { label: "Тверь и агломерация", tone: "heritage" as const },
  { label: "Умный город", tone: "digital" as const },
  { label: "Водно-зелёный каркас", tone: "water" as const },
  { label: "Мобильность и жизнестойкость", tone: "water" as const },
];

const TitlePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      {/* Титульный экран */}
      <PageSection className="relative overflow-hidden lg:py-24">
        {/* сюда при желании можно вернуть SVG-сетку */}
        <div className="relative">
          <Caption>
            Стратегический мастер-план города Твери и агломерации
          </Caption>

          <Heading as="h1" className="mt-4 text-[color:var(--color-heritage)]">
            Тверь – соединяя столицы, создавая своё
          </Heading>

          <Body className="mt-4 max-w-3xl">
            Разработка мастер-плана Твери и агломерации на 2025–2035 годы
            и на период до 2045 года. Комплексный документ, объединяющий
            социально-экономическое и пространственное развитие города
            и прилегающих территорий Калининского муниципального округа
            с фокусом на жизнестойкость, «умный город» и подготовку к
            900-летию Твери.
          </Body>

          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((t) => (
              <Tag key={t.label} tone={t.tone}>
                {t.label}
              </Tag>
            ))}
          </div>

          <div className="mt-8 h-1 w-40 rounded-full bg-gradient-to-r from-[color:var(--color-water)] via-[color:var(--color-digital)] to-[color:var(--color-heritage)]" />
        </div>
      </PageSection>

      {/* Блок идентификационных данных */}
      <PageSection withBgWhite>
        <Heading as="h2" className="mb-6">
          Основные идентификационные данные мастер-плана
        </Heading>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <Caption>Предмет работ / Наименование работы</Caption>
            <Body className="mt-2">
              Разработка мастер-плана Твери и агломерации на 2025–2035 годы
              и на период до 2045 года.
            </Body>
          </Card>

          {/* остальные карточки по аналогии */}
        </div>
      </PageSection>
    </div>
  );
};

export default TitlePage;
```

---

Если хочешь, следующим шагом можем:

* добавить в дизайн-кит **KPI-компонент** (прогресс-бар + табличные цифры);
* задать **единую сетку** для разделов 4.1–4.10 (карточки-направления с цветовой кодировкой: вода / наследие / цифра);
* накидать базовый макет для страницы «Мобильность» с местом под ГИС-карту и KPI.
