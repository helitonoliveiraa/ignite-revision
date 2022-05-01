import * as Dialog from '@radix-ui/react-dialog';
import { useState, FormEvent } from 'react';

import { CloseIcon, IncomeIcon, OutcomeIcon } from '../../assets/icons';
import { Button } from '../Button';
import { Input } from '../Input';
import { Strong } from '../Strong';

import * as S from './styles';

type TransactionType = 'income' | 'outcome';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
}

export function NewTransactionModal({ isOpen, onClose }: ModalProps) {
  const [transactionType, setTransactionType] = useState<TransactionType>('income');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    // onClose();
  }

  return (
    <Dialog.Root 
      open={isOpen}
      onOpenChange={onClose}
    >
      <Dialog.Trigger />
      <Dialog.Portal>
        <S.Overlay />
        <S.Content>
          <S.CloseButton onClick={onClose}>
            <CloseIcon />
          </S.CloseButton>

            <Strong size='middle'>Cadastrar transação</Strong>

            <form onSubmit={handleCreateNewTransaction}>
              <S.Wrapper>
                <Input 
                  placeholder='Name'
                  value={name}
                  onChange={e => setName(e.target.value)}
                />

                <Input 
                  placeholder='price' 
                  type='number'
                  value={price}
                  onChange={e => setPrice(Number(e.target.value))} 
                />

                <S.WrapperButtons>
                  <Button  
                    icon={IncomeIcon} 
                    withIcon='default'
                    income={transactionType === 'income'}
                    onClick={() => setTransactionType('income')}
                  >
                    Income
                  </Button>
                  <Button 
                    icon={OutcomeIcon} 
                    withIcon='default'
                    outcome={transactionType === 'outcome'}
                    onClick={() => setTransactionType('outcome')}
                  >
                    Outcome
                  </Button>
                </S.WrapperButtons>

                <Input 
                  placeholder='Category'
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                />
              </S.Wrapper>

              <Button type='submit' large='default'>Register</Button>
            </form>
        </S.Content>
      </Dialog.Portal>
  </Dialog.Root>
  );
}
