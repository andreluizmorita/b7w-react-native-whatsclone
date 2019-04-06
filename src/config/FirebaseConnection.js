import { firebase } from 'firebase';
import ENV from './Env';

const config = {
  apiKey: ENV.firebase.apiKey,
  authDomain: ENV.firebase.authDomain,
  databaseURL: ENV.firebase.databaseURL,
  projectId: ENV.firebase.projectId,
  storageBucket: ENV.firebase.storageBucket,
  messagingSenderId: ENV.firebase.messagingSenderId
};
firebase.initializeApp(config);

export default firebase;
