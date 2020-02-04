import firebase from 'firebase/app';
import 'firebase/auth';

import environment from '../global/env';

export class Firebase {
    private static instance: Firebase;

    constructor() {}

    public static getInstance() {
        if(!Firebase.instance) {
            Firebase.instance = firebase.initializeApp(environment.firebase);
        }
        return Firebase.instance;
    }
}
