import * as Dialog from '@radix-ui/react-dialog';
import { styled } from '../../styles';

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  background: 'rgba(0, 0, 0, 0.4)',
});

export const Content = styled(Dialog.Content, {
  background: '$background',
  maxWidth: '576px',
  width: '100%',
  py: '$44',
  px: '$48',
  br: '$4',
  transform: 'translate(-50%, -50%)',

  position: 'fixed',
  top: '50%',
  left: '50%',
});

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '$16',
  margin: '3.2rem 0 2.4rem'
}); 

export const WrapperButtons = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$16',
}); 

export const CloseButton = styled(Dialog.Close, {
  width: '4rem',
  height: '4rem',
  marginLeft: 'auto',
  fontSize: '0',
  background: 'transparent',
  border: 'none',

  position: 'absolute',
  top: '0.4rem',
  right: '0.4rem',
});