# Instaclone

Simple project created to try StencilJS [https://stenciljs.com/]

Demo [https://instaclone-250909.firebaseapp.com/]

## Objectives
* ~~`@ionic/core` for the UI.
* ~~Stencil for the application logic and routing
* ~~Pre-rendering
* ~~Lazy-loading and code splitting
* ~~Modern mode: ES6/ESM for new browser, ES5 for older
* Firebase realtime database and authentications
* Image upload
* Firebase storage
* Firebase functions
* Firestore
* Push notifications (OneSignal? [https://onesignal.com/])

## Features

* `@ionic/core` for the UI.
* Stencil for the application logic and routing
* Pre-rendering
* Lazy-loading and code splitting
* Modern mode: ES6/ESM for new browser, ES5 for older

## Building

To build, clone this repo to a new directory:

```bash
npm install
npm run build
```


## Running

To build, clone this repo to a new directory:

```bash
npm start
```

## Production

To build for production, run:

```bash
npm run build
firebase deploy --only hosting
```

A production build includes:

* Minified code bundles
* Generated Service workers
* App manifest

## Hosting

Apps should be hosted on through HTTPS, and if possible, through a provider that supports HTTP2.
One provider that does support this is [Firebase Hosting](https://firebase.google.com/docs/hosting/).
