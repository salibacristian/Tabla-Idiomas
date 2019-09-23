import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { SmartAudioService } from "./smart-audio.service"

const firebaseConfig = {
  apiKey: "AIzaSyDP8jCTOmMwKfcb90aol_pvQFY3ARlLKwo",
  authDomain: "myapp2-99293.firebaseapp.com",
  databaseURL: "https://myapp2-99293.firebaseio.com",
  projectId: "myapp2-99293",
  storageBucket: "myapp2-99293.appspot.com",
  messagingSenderId: "38953046633",
  appId: "1:38953046633:web:7efd9c86110dcd8cc288f8"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FirestoreSettingsToken, useValue:{}},
    NativeAudio,
    SmartAudioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
