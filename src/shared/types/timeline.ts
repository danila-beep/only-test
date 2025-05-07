export interface ITimelineEvent {
  id: string;
  date: Date;
  description: string;
}

export interface ITimelineCategory {
  id: string;
  category: string;
  events: ITimelineEvent[];
}

export type Timeline = ITimelineCategory[];
