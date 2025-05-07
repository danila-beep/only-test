import { Timeline } from "@shared/types/timeline";

export const MOCK_TIMELINE: Timeline = [
  {
    id: "1",
    category: "Кино",
    events: [
      {
        id: "1",
        date: new Date("1927"),
        description: "Выход первого звукового фильма 'Певец джаза' (The Jazz Singer)",
      },
      {
        id: "2",
        date: new Date("1939"),
        description: "Премьера фильма 'Унесённые ветром', ставшего классикой мирового кинематографа",
      },
      {
        id: "3",
        date: new Date("1977"),
        description: "Выход первого эпизода 'Звёздных войн', революция в области спецэффектов",
      },
      {
        id: "4",
        date: new Date("1995"),
        description: "Выход 'Истории игрушек' - первого полнометражного компьютерного анимационного фильма",
      },
      {
        id: "5",
        date: new Date("2009"),
        description: "Премьера фильма 'Аватар', установившего новые стандарты 3D-технологий в кино",
      }
    ],
  },
  {
    id: "2",
    category: "Литература",
    events: [
      {
        id: "1",
        date: new Date("1929"),
        description: "Эрнест Хемингуэй публикует роман 'Прощай, оружие!'",
      },
      {
        id: "2",
        date: new Date("1947"),
        description: "Публикация 'Дневника Анны Франк', ставшего символом жертв Холокоста",
      },
      {
        id: "3",
        date: new Date("1957"),
        description: "Борис Пастернак получает Нобелевскую премию за роман 'Доктор Живаго'",
      },
      {
        id: "4",
        date: new Date("1997"),
        description: "Выход первой книги о Гарри Поттере 'Философский камень'",
      },
      {
        id: "5",
        date: new Date("2006"),
        description: "Орхан Памук получает Нобелевскую премию по литературе",
      }
    ],
  },
  {
    id: "3",
    category: "Игры",
    events: [
      {
        id: "1",
        date: new Date("1972"),
        description: "Выпуск игры Pong - первой коммерчески успешной видеоигры",
      },
      {
        id: "2",
        date: new Date("1985"),
        description: "Выход консоли Nintendo Entertainment System (NES) и игры Super Mario Bros",
      },
      {
        id: "3",
        date: new Date("1996"),
        description: "Появление Pokemon Red и Blue, начало феномена Pokemon",
      },
      {
        id: "4",
        date: new Date("2004"),
        description: "Запуск World of Warcraft, определившей развитие MMORPG",
      },
      {
        id: "5",
        date: new Date("2011"),
        description: "Выход Minecraft, ставшей самой продаваемой видеоигрой всех времён",
      }
    ],
  },
  {
    id: "4",
    category: "Наука",
    events: [
      {
        id: "1",
        date: new Date("1905"),
        description: "Альберт Эйнштейн публикует специальную теорию относительности",
      },
      {
        id: "2",
        date: new Date("1953"),
        description: "Джеймс Уотсон и Фрэнсис Крик открывают структуру ДНК",
      },
      {
        id: "3",
        date: new Date("1969"),
        description: "Первая высадка человека на Луну - миссия Apollo 11",
      },
      {
        id: "4",
        date: new Date("1990"),
        description: "Запуск космического телескопа Хаббл",
      },
      {
        id: "5",
        date: new Date("2012"),
        description: "Открытие бозона Хиггса в ЦЕРНе",
      }
    ],
  },
  {
    id: "5",
    category: "Спорт",
    events: [
      {
        id: "1",
        date: new Date("1936"),
        description: "Джесси Оуэнс выигрывает 4 золотые медали на Олимпийских играх в Берлине",
      },
      {
        id: "2",
        date: new Date("1980"),
        description: "Олимпийские игры в Москве - первая Олимпиада в СССР",
      },
      {
        id: "3",
        date: new Date("1992"),
        description: "Американская 'Dream Team' по баскетболу на Олимпиаде в Барселоне",
      },
      {
        id: "4",
        date: new Date("2008"),
        description: "Усэйн Болт устанавливает мировой рекорд в беге на 100 метров",
      },
      {
        id: "5",
        date: new Date("2018"),
        description: "Чемпионат мира по футболу в России",
      }
    ],
  },
  {
    id: "6",
    category: "Технологии",
    events: [
      {
        id: "1",
        date: new Date("1947"),
        description: "Создание первого транзистора в Bell Labs",
      },
      {
        id: "2",
        date: new Date("1969"),
        description: "Создание ARPANET - предшественника современного интернета",
      },
      {
        id: "3",
        date: new Date("1981"),
        description: "IBM выпускает первый персональный компьютер",
      },
      {
        id: "4",
        date: new Date("2007"),
        description: "Презентация первого iPhone, революция в мире смартфонов",
      },
      {
        id: "5",
        date: new Date("2011"),
        description: "Watson от IBM побеждает чемпионов в игре Jeopardy!, демонстрируя возможности ИИ",
      }
    ],
  }
];


const MOCK_TIMELINE_2 = MOCK_TIMELINE.slice(0, 2);
const MOCK_TIMELINE_3 = MOCK_TIMELINE.slice(0, 3);
const MOCK_TIMELINE_4 = MOCK_TIMELINE.slice(0, 4);
const MOCK_TIMELINE_5 = MOCK_TIMELINE.slice(0, 5);
const MOCK_TIMELINE_6 = MOCK_TIMELINE.slice(0, 6);

export const MOCK_TIMELINE_VARIANTS = {
  "2_items": MOCK_TIMELINE_2,
  "3_items": MOCK_TIMELINE_3,
  "4_items": MOCK_TIMELINE_4,
  "5_items": MOCK_TIMELINE_5,
  "6_items": MOCK_TIMELINE_6,
};

