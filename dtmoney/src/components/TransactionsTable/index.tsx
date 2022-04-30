import * as S from './styles';

export function TransactionsTable() {
  return (
    <S.Container>
      <S.Table>
        <thead>
          <tr>
            <S.Th>Title</S.Th>
            <S.Th>Price</S.Th>
            <S.Th>Category</S.Th>
            <S.Th>Date</S.Th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <S.Td ribbon='left'>Desenvolvimento de site</S.Td>
            <S.Td type='income'>R$ 12.000,00</S.Td>
            <S.Td>Venda</S.Td>
            <S.Td>13/04/2021</S.Td>
          </tr>
          <tr>
            <S.Td ribbon='left'>Desenvolvimento de site</S.Td>
            <S.Td type='outcome'>- R$ 12.000,00</S.Td>
            <S.Td>Venda</S.Td>
            <S.Td>13/04/2021</S.Td>
          </tr>
          <tr>
            <S.Td ribbon='left'>Desenvolvimento de site</S.Td>
            <S.Td type='income'>R$ 12.000,00</S.Td>
            <S.Td>Venda</S.Td>
            <S.Td>13/04/2021</S.Td>
          </tr>
        </tbody>
      </S.Table>
    </S.Container>
  )
}