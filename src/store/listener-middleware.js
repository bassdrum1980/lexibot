import { createListenerMiddleware } from '@reduxjs/toolkit';
import { signOut } from 'features/user/user-slice';
import { signIn } from 'features/user/user-slice-actions';

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: signOut,
  effect: () => {
    console.log('signOut');
    localStorage.removeItem('token');
  },
});

listenerMiddleware.startListening({
  actionCreator: signIn.fulfilled,
  effect: () => {
    console.log('signIn');
    localStorage.removeItem('token');
  },
});
