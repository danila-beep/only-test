# Historical Timeline Component

# Prod-билд
https://danila-beep.github.io/only-test/

## Требования

- Node.js >= 14.0.0
- npm >= 6.14.0

## Установка

```bash
# Клонирование репозитория
git clone <repository-url>

# Переход в директорию проекта
cd <project-directory>

# Установка зависимостей
npm install
```

## Запуск

```bash
# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Запуск собранной версии
npm run preview
```

## Структура проекта

```
src/
├── app/              # Инициализация приложения
├── entities/         # Бизнес-сущности
│   └── timeline/     # Сущность временной шкалы
├── features/         # Функциональные модули
│   └── HistoricalDates/  # Основной компонент временной шкалы
├── shared/           # Переиспользуемый код
│   ├── ui/          # UI компоненты
│   ├── lib/         # Утилиты и хуки
│   ├── config/      # Конфигурации
│   └── types/       # TypeScript типы
└── widgets/         # Композиционные компоненты
    ├── Tabs/        # Компонент навигации
    └── Slider/      # Компонент слайдера событий
```

## Использование компонента

```typescript
import { HistoricalDates } from '@features/HistoricalDates';
import { Timeline } from '@shared/types/timeline';

const timelineData: Timeline = [
  {
    id: "1",
    category: "Категория",
    events: [
      {
        id: "1",
        date: new Date("2020"),
        description: "Описание события"
      }
      // ... другие события
    ]
  }
  // ... другие периоды
];

function App() {
  return <HistoricalDates data={timelineData} />;
}
```

## Требования к данным

1. Количество периодов: от 2 до 6
2. События в каждом периоде должны:
   - Иметь уникальные ID
   - Быть отсортированы по дате
   - Содержать валидные даты
