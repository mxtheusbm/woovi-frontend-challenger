export function formatExpiryDate(date: string) {
  date = date.replace(/\D/g, '');

  if (date.length > 4) {
    date = date.slice(0, 4);
  }

  return date.replace(/(\d{2})(\d{1,2})?/, function (_, p1, p2) {
    let formatted = p1;
    if (p2) formatted += '/' + p2;
    return formatted;
  });
}
