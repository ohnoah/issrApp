import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Network } from '@ionic-native/network';
import { AngularFireDatabase} from 'angularfire2/database';
import "rxjs/add/operator/take";
import { Storage } from '@ionic/storage';
import { StorageServiceProvider } from '../../providers/storage-service/storage-service';


@Component({
  selector: 'page-food',
  templateUrl: 'food.html'
})
export class FoodPage {
  dishes: Array<string> = [];
  offlineArr: string[] = [];
  showSpinner: boolean;
  weekdays:string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  online: boolean = true;
  offlineOnLoad: boolean = false;
  
  doRefresh(refresher){
      this.online = true;
        if(this.network.type == 'none'){
            this.online = false;
            this.offlineOnLoad = true;
        }
        setTimeout(() => {
            if(this.online){ 
              //load data from firebase and hide spinner when done
              this.offlineOnLoad = false;
              let sub = this.afd.list('/dishes/',{ preserveSnapshot: true}).subscribe((snapshots) => {
              snapshots.forEach(snapshot => {
                console.log(snapshot.key, snapshot.node_.value_);
                this.dishes[snapshot.key - 1] = snapshot.node_.value_;
                this.storage.set(snapshot.key, snapshot.node_.value_).then(() => {
                  console.log('stored');
                });
              })
              
              sub.unsubscribe();    
            });
              /*let dishSub = this.dishes.subscribe(() => {
                  this.showSpinner = false;
                  //store data into local once its loaded
                  this.storageService.storeLocalDishes();
                  
              })
                */
            }
            refresher.complete();
   }, 2000)
        }
  

  setUp(){
    /// checks for onlineness and updates local storage
        this.showSpinner = true;
        if(this.network.type == 'none'){
            this.online = false;
        }
        setTimeout(() => {
            if(this.online){ 
              //load data from firebase and hide spinner when done
              //this.dishes = this.fbs.getDishes();
              let sub = this.afd.list('/dishes/', {preserveSnapshot:true}).subscribe((snapshots) => {
                snapshots.forEach(snapshot => {
                  console.log(snapshot.key, snapshot.node_.value_);
                  this.dishes[snapshot.key - 1 ] = snapshot.node_.value_;
                  this.storage.set(snapshot.key, snapshot.node_.value_).then(() => {
                  console.log('stored');
                  });
                });
                sub.unsubscribe();
                this.showSpinner = false;
              });
                  let b = setInterval(() => {
                    {
                      
                    if(this.online == false){
                      clearInterval(b);
                    }
                    for(let dish of this.dishes){
                      this.storage.set(this.dishes.indexOf(dish).toString(), dish).then(() => {
                        console.log('stored');
                      });
                    }
                    
                  }
                  }, 30000);
            }
              else if(this.online == false){
                this.offlineOnLoad = true;
                //get latest data from local storage
                this.offlineArr = this.storageService.getLocalDishes();
                this.showSpinner = false;  
            }
              }, 2000);


            }


  constructor(private storageService: StorageServiceProvider, private storage: Storage, public navCtrl: NavController, private network: Network, private fbs: FirebaseServiceProvider, private afd: AngularFireDatabase) {

  }
 

 
 


    ngOnInit(): void{
        this.setUp();


       
    }

  }

  
      


