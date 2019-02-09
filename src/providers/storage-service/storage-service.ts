import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the StorageServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class StorageServiceProvider {
  postNames: Array<string> = ['post1', 'post2','post3', 'post4','post5','post6','post7','post8','post9','post9', 'post10', 'post11', 'post12', 'post13', 'post14', 'post15', 'post16', 'post17', 'post18', 'post19', 'post20'];

  constructor(private storage: Storage, private afd: AngularFireDatabase) {
    
  }

 storeLocalDishes(): void{
    let offlineDishes = this.afd.list('/dishes/', {preserveSnapshot: true});
    let sub = offlineDishes.take(5).subscribe((data) => {data.forEach(element => {
      this.storage.set(element.key, element.node_.value_).then(() => {
        console.log(element.key + element.node_.value_);
        console.log('stored');
      });
      
    });});
  }

  getLocalDishes(): Array<string>{
  let returnArr: Array<string> = [];
  for(let j = 0; j<5; j++){
    
    this.storage.get((j+1).toString()).then((data) =>{
     if(data != null){
          returnArr.push(data)
         }
      else{
         returnArr.push('Error occured');
        }
    })
  }
  return returnArr;
  }

  





}


