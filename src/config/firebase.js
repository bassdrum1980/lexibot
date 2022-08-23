import { initializeApp } from 'firebase/app';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: 'AIzaSyCssHRiQ3PfgqK467d2exPgW1qTAg8kPZc',
  authDomain: 'repeat-a738a.firebaseapp.com',
  databaseURL: 'https://repeat-a738a.firebaseio.com',
  projectId: 'repeat-a738a',
  storageBucket: 'repeat-a738a.appspot.com',
  messagingSenderId: '811484102953',
};

const app = initializeApp(firebaseConfig);
export const functions = getFunctions(app);
