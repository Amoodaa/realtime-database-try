/* eslint-disable no-underscore-dangle */
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
// import 'firebase/';


import config from './config.json';

const app = firebase.initializeApp(config);

class FireClass {
  private database: firebase.database.Database;

  private auth: firebase.auth.Auth;

  private googleProvider: firebase.auth.GoogleAuthProvider;

  constructor() {
    this.database = app.database();
    this.auth = app.auth();
    this.googleProvider = new firebase.auth.GoogleAuthProvider();
  }


  signinWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);
}
export default new FireClass();
