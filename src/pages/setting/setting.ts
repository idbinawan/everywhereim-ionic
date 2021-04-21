import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import { LoginPage } from '../../pages/login/login';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {
  user_id: any;

  constructor(public navCtrl: NavController, private remoteService : RemoteServiceProvider) {
    this.user_id = sessionStorage.getItem('user_id');
  }

  deleteUser(){
    this.remoteService.deleteUser(this.user_id)
    .subscribe(
      data => {
        sessionStorage.clear();
        this.navCtrl.setRoot(LoginPage);
      },
      error => {
        console.log(error);
      });
  }
}
