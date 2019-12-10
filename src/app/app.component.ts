import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as firebase from 'firebase/app';
//import { Icon } from 'ionicons/dist/types/icon/icon';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Calendar',
      url: '/home',
      icon: 'calendar'
    },
    {
      title: 'Notes',
      url: '/list',
      icon: 'journal'
    },
    {
      title: 'Logout',
      url: '/login',
      icon: 'log-out'
    }
  ];


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    firebase.initializeApp({
      apiKey: "AIzaSyBqGWNAuFnmPFi4JfALjmBPzGNJvdHTax4",
      authDomain: "calendar-app-855b4.firebaseapp.com",
      databaseURL: "https://calendar-app-855b4.firebaseio.com",
      projectId: "calendar-app-855b4",
      storageBucket: "calendar-app-855b4.appspot.com",
      messagingSenderId: "1041138863815",
      appId: "1:1041138863815:web:f5f577f9af7fe6d34578e2",
      measurementId: "G-16SP9E2BP0"
    })
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout() {
    firebase.auth().signOut();
    this.menu.close();
  }
}