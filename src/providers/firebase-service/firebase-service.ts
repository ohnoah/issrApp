import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';

/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FirebaseServiceProvider {

  constructor(private afd: AngularFireDatabase) {
    
  }
  getText(){
      return this.afd.list('/text/');
    
  }
  getDishes(){
      return this.afd.list('/dishes/');



  }
}
