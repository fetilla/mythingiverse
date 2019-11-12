export function formatToDateString(date: Date | string) {
  return date && typeof date == "object" ? date.toLocaleString() :
    date && typeof date == "string" ? new Date(date).toLocaleDateString() : "";
}