import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {
  constructor(public navCtrl: NavController, private remoteService : RemoteServiceProvider) {

  }

  deleteUser(){
    alert('User deleted');
  }
}
