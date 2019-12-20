import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

import config from './config.json';

const app = firebase.initializeApp(config);
interface Chat {
  [x: string]: {
    metadata: {
      title: string;
    };
  };
}
class FireClass {
  private database: firebase.database.Database;

  private auth: firebase.auth.Auth;

  private googleProvider: firebase.auth.GoogleAuthProvider;

  private currentUser: firebase.User | null;

  constructor() {
    this.database = app.database();
    this.auth = app.auth();
    this.googleProvider = new firebase.auth.GoogleAuthProvider();
    this.currentUser = null;
    this.auth.onAuthStateChanged((newUser) => {
      this.currentUser = newUser;
      this.onCurrentUserChange(newUser);
    });
  }

  onCurrentUserChange: (newUser: firebase.User | null) => void = (newUser) => newUser;

  signinWithGoogle = () => this.auth.signInWithRedirect(this.googleProvider);

  onRoomsStateChange = (cb: (a: Chat) => void) => {
    this.database
      .ref(`/users_chats_ids/${this.currentUser?.uid}`)
      .on('value', (snapshot) => {
        const chats = Object.keys(snapshot.val());
        chats.map((chatKey) => this.database.ref(`/chats/${chatKey}`).on('value', (chatSnapshot) => {
          cb({ [chatKey]: chatSnapshot.val() });
        }));
      });
  };
}
export default new FireClass();
