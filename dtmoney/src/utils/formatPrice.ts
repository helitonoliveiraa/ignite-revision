type formatPriceProps = {
  amount: number;
  type?: 'income' | 'outcome';
}

export function formatPrice({ amount, type }: formatPriceProps) {
  const value = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount);

  if(type) {
    return `${type === 'outcome' ? ' - ' : ''}${value}`;
  }

  return value;
}