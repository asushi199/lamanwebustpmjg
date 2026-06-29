const malayWeekdays: Record<string, string> = {
  Sun: "Ahad",
  Mon: "Isnin",
  Tue: "Selasa",
  Wed: "Rabu",
  Thu: "Khamis",
  Fri: "Jumaat",
  Sat: "Sabtu",
};

const malayMonths = [
  "Jan",
  "Feb",
  "Mac",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Ogos",
  "Sep",
  "Okt",
  "Nov",
  "Dis",
];

export function formatMalaysiaDateTime(date: Date): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kuala_Lumpur",
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  const value = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";
  const weekday = malayWeekdays[value("weekday")] ?? value("weekday");
  const month = malayMonths[Number(value("month")) - 1] ?? value("month");

  return `${weekday}, ${Number(value("day"))} ${month} ${value("year")} · ${value("hour")}:${value("minute")} MYT`;
}
