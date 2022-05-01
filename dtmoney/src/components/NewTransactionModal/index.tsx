import * as Dialog from '@radix-ui/react-dialog';
import { useState, FormEvent } from 'react';

import { CloseIcon, IncomeIcon, OutcomeIcon } from '../../assets/icons';
import { useTransaction } from '../../hooks/useTransaction';
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
  const [type, setType] = useState<TransactionType>('income');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  const { createTransaction } = useTransaction();

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      type,
      title,
      amount,
      category
    });
    
    setType('income');
    setTitle('');
    setAmount(0);
    setCategory('');
    onClose();
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
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />

                <Input 
                  placeholder='price' 
                  type='number'
                  value={amount}
                  onChange={e => setAmount(Number(e.target.value))} 
                />

                <S.WrapperButtons>
                  <Button  
                    type='button'
                    icon={IncomeIcon} 
                    withIcon='default'
                    income={type === 'income'}
                    onClick={() => setType('income')}
                  >
                    Income
                  </Button>
                  <Button 
                    type='button'
                    icon={OutcomeIcon} 
                    withIcon='default'
                    outcome={type === 'outcome'}
                    onClick={() => setType('outcome')}
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
