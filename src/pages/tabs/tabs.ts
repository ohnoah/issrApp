import { Component } from '@angular/core';

import { FoodPage } from '../food/food';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FoodPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
