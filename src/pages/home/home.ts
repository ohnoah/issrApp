import { Component, OnInit} from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { StorageServiceProvider } from '../../providers/storage-service/storage-service';
import { Network } from '@ionic-native/network';
import { AngularFireDatabase } from 'angularfire2/database';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  posts: String[] = [];
  offlinePosts: Array<string>;
  showSpin: boolean;
  online: boolean = true;
  offlineOnLoad: boolean = false;
  doRefresh(refresher){
    this.online = true;
    if(this.network.type == 'none'){
          this.online = false;
          this.offlineOnLoad = true;
      }
    else{
      let sub = this.afd.list('/text/',{ preserveSnapshot: true}).subscribe((snapshots) => {
              snapshots.forEach(snapshot => {
                console.log(snapshot.key, snapshot.node_.value_);
                this.posts[snapshot.key - 1] = snapshot.node_.value_;
                
              })
              
              sub.unsubscribe();    
            });
      
    }
    refresher.complete();

  }
  
  setUp(){
    /// checks for onlineness and updates local storage
        this.showSpin = true;
        if(this.network.type == 'none'){
            this.online = false;
        }
        setTimeout(() => {
          if(this.online){
            let sub = this.afd.list('/text/',{ preserveSnapshot: true}).subscribe((snapshots) => {
              snapshots.forEach(snapshot => {
                console.log(snapshot.key, snapshot.node_.value_);
                this.posts[snapshot.key - 1] = snapshot.node_.value_;
                
              })
              this.showSpin = false; 
              sub.unsubscribe();    
            });
            /*this.posts.subscribe(() => {
              this.showSpin = false;
              
            })*/
          }
          else if(this.online === false){
            this.offlineOnLoad = true;
            this.showSpin = false;
          }
              
              
            
        }, 2000);
  }



  constructor(private alertCtrl: AlertController, private storage: Storage, private afd: AngularFireDatabase, private network: Network, private platform: Platform, public navCtrl: NavController, public fbs: FirebaseServiceProvider, private storageService: StorageServiceProvider) {
    
  }
 
  ngOnInit(){
    this.setUp();

  }
  
}