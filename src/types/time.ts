export type ResponseTime = {
  abbreviation: string;
  client_ip: string;
  datetime: string;
  day_of_week: number;
  day_of_year: number;
  dst: boolean;
  dst_from: string | null;
  dst_offset: number;
  dst_until: string | null;
  raw_offset: number;
  timezone: string;
  unixtime: number;
  utc_datetime: string;
  utc_offset: string;
  week_number: number;
};

export type ClockType = {
  abbreviation: string;
  datetime: Date;
  timezone: string;
  dayOfWeek: number;
  dayOfYear: number;
  weekNumber: number;
};
