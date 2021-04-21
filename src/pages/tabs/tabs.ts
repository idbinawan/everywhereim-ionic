import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { UsersPage } from '../users/users';
import { SettingPage } from '../setting/setting';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = UsersPage;
  tab3Root = SettingPage;

  constructor() {

  }
}
