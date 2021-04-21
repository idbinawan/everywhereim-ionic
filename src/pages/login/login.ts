import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import { TabsPage } from '../../pages/tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user: any;

  constructor(public navCtrl: NavController, private remoteService : RemoteServiceProvider) {
    if (this.checkSession()) {
      this.proceed();
    }
  }

  login(){
    this.remoteService.createUser()
    .subscribe(
      data => {
        this.user = data;
        sessionStorage.setItem('user_id', this.user.id);
        console.log('userId: ' + this.user.id);
        this.proceed();
      },
      error => {
        console.log(error);
      });
  }

  proceed(){
    this.navCtrl.setRoot(TabsPage);
  }

  checkSession(){
    return (sessionStorage.getItem('user_id') !== null);
  }
}
