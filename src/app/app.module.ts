import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FoodPage } from '../pages/food/food';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AngularFireModule } from 'angularfire2';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';
import { StorageServiceProvider } from '../providers/storage-service/storage-service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HttpModule } from '@angular/http';
import { Network } from '@ionic-native/network';
import { IonicStorageModule } from '@ionic/storage';

const firebaseConfig = {

    apiKey: "AIzaSyCScP4a5jC22czwEwWIFoEj85M52oDrc-w",
    authDomain: "issrappproject.firebaseapp.com",
    databaseURL: "https://issrappproject.firebaseio.com",
    projectId: "issrappproject",
    storageBucket: "issrappproject.appspot.com",
    messagingSenderId: "235338919293"

};


@NgModule({
  declarations: [
    MyApp,
    FoodPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FoodPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider,
    StorageServiceProvider,
  ]
})
export class AppModule {}
