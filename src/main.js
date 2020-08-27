import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";
// eslint-disable-next-line no-unused-vars
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firebase-firestore";

Vue.config.productionTip = false;
Vue.use(VueTextareaAutosize);

firebase.initializeApp({
  apiKey: "AIzaSyAELzsLJsUGwQXQ4iZXJ2jSQijOIYGsiyM",
  authDomain: "vue-calender-43674.firebaseapp.com",
  databaseURL: "https://vue-calender-43674.firebaseio.com",
  projectId: "vue-calender-43674",
  storageBucket: "vue-calender-43674.appspot.com",
  messagingSenderId: "904332997531",
  appId: "1:904332997531:web:a379fcc28526ab82d3a73e"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
