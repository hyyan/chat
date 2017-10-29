((Chatroom) => {

  Chatroom.Config = {
    firebase: {
      apiKey: "AIzaSyBjwHf8QNncuP7ScgRmhb18Zfjkn_6J6kI",
      authDomain: "chat-dbc11.firebaseapp.com",
      databaseURL: "https://chat-dbc11.firebaseio.com",
      projectId: "chat-dbc11",
      storageBucket: "chat-dbc11.appspot.com",
      messagingSenderId: "8463355577"
    }
  };

  window.Polymer = { rootPath: '/' };

  // Initialize Firebase
  firebase.initializeApp(Chatroom.Config.firebase);

  // Load and register pre-caching Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('service-worker.js', {
        scope: Polymer.rootPath,
      });
    });
  }


})(window.Chatroom = window.Chatroom || {});
