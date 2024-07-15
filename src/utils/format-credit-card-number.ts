export function formatCardNumber(number: string) {
  number = number.replace(/\D/g, '');
  
  if (number.length > 16) {
    number = number.slice(0, 16);
  }

  return number.replace(/(\d{4})(\d{1,4})?(\d{1,4})?(\d{1,4})?/, function (_, p1, p2, p3, p4) {
    let formatted = p1;
    if (p2) formatted += ' ' + p2;
    if (p3) formatted += ' ' + p3;
    if (p4) formatted += ' ' + p4;
    return formatted;
  });
}