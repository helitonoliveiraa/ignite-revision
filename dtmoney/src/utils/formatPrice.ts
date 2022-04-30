export function formatPrice(amount: number) {
  const value = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount);

  return value;
}