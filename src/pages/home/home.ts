import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  colors: any;

  constructor(public navCtrl: NavController, private remoteService : RemoteServiceProvider) {
    this.getColors();
  }

  getColors(){
    this.remoteService.getColors(1)
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
