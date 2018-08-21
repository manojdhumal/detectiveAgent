import { Injectable } from '@angular/core';
import { User } from './user';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

@Injectable()
export class CommonDataService {

  constructor( private api: ApiService) {

  }

  // Simulate POST /getotp
  getOtp(mobile: Number): Observable<User> {
    
      
    return  this.api.getOtp(mobile);
  }

  verifyOtp(object): Observable<User> {    
        return  this.api.verifyOtp(object);
  }

  





}
