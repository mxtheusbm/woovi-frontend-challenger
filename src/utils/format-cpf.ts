export function formatCPF(cpf: string) {
  cpf = cpf.replace(/\D/g, '');

  if (cpf.length > 11) {
    cpf = cpf.slice(0, 11);
  }

  return cpf.replace(/(\d{3})(\d{1,3})?(\d{1,3})?(\d{1,2})?/, function (_, p1, p2, p3, p4) {
    let formatted = p1;
    if (p2) formatted += '.' + p2;
    if (p3) formatted += '.' + p3;
    if (p4) formatted += '-' + p4;
    return formatted;
  });
}