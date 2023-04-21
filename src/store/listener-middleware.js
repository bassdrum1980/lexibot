import { createListenerMiddleware } from '@reduxjs/toolkit';
import { signOut } from 'features/user/user-slice';
import { signIn } from 'features/user/user-slice-actions';

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: signOut,
  effect: () => {
    localStorage.removeItem('token');
  },
});

listenerMiddleware.startListening({
  actionCreator: signIn.fulfilled,
  effect: (action) => {
    localStorage.setItem('token', JSON.stringify(action.payload.token));
  },
});
