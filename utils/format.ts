/**
 * format date in format yyyy-mm-dd to MMMM dd, yyyy
 * @param date
 * @returns newDate
 */
export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
