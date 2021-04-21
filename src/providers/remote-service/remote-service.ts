import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

const baseUrl = 'http://localhost/api';

/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemoteServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RemoteServiceProvider Provider');
  }

  getColors(userId) {
    return this.http.get(baseUrl+'/colors/'+userId);
  }

  getAllUsers() {
    return this.http.get(baseUrl+'/users');
  }

  shuffleColors(userId): Observable<any> {
    return this.http.get(baseUrl+'/shuffle-colors/'+userId);
  }
}
