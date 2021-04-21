import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  users: any;

  constructor(public navCtrl: NavController, private remoteService : RemoteServiceProvider) {
    this.getUsers();
  }

  getUsers(){
    this.remoteService.getAllUsers()
    .subscribe(
      data => {
        console.log(data);
        this.users = data;
      },
      error => {
        console.log(error);
      });
  }

  shuffleColors(userId){
    this.remoteService.shuffleColors(userId)
    .subscribe(
      data => {
        this.getUsers();
      },
      error => {
        console.log(error);
      });
  }
}
