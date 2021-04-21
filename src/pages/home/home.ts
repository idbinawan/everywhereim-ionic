import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  colors: any;
  user_id: any;

  constructor(public navCtrl: NavController, private remoteService : RemoteServiceProvider) {
    this.user_id = sessionStorage.getItem('user_id');
    console.log(this.user_id);
    this.getColors(this.user_id);
  }

  getColors(userId){
    this.remoteService.getColors(userId)
    .subscribe(
      data => {
        console.log(data);
        this.colors = data;
      },
      error => {
        console.log(error);
      });
  }
}
