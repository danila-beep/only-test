export interface TimelineEvent {
  id: string;
  date: Date;
  description: string;
}

export interface TimelinePeriod {
  id: string;
  category: string;
  events: TimelineEvent[];
}

export type Timeline = TimelinePeriod[];

export const validateTimeline = (timeline: Timeline): boolean => {
  if (timeline.length < 2 || timeline.length > 6) {
    console.error('Timeline must contain between 2 and 6 periods');
    return false;
  }

  // Проверка уникальности
  const periodIds = new Set<string>();
  for (const period of timeline) {
    if (periodIds.has(period.id)) {
      console.error(`Duplicate period ID found: ${period.id}`);
      return false;
    }
    periodIds.add(period.id);

    // Проверка уникальности событий
    const eventIds = new Set<string>();
    for (const event of period.events) {
      if (eventIds.has(event.id)) {
        console.error(`Duplicate event ID found in period ${period.id}: ${event.id}`);
        return false;
      }
      eventIds.add(event.id);
    }

    // Проверка сортировки дат
    const dates = period.events.map(event => event.date.getTime());
    const sortedDates = [...dates].sort((a, b) => a - b);
    if (!dates.every((date, index) => date === sortedDates[index])) {
      console.error(`Events in period ${period.id} are not sorted by date`);
      return false;
    }
  }

  return true;
};
