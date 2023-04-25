import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { signOut } from 'features/user/user-slice';
import { signIn } from 'features/user/user-slice-actions';
import { resetInvalidToken } from 'features/loading/loading-slice';

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: isAnyOf(resetInvalidToken, signOut),
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
