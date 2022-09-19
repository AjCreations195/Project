import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient, private router: Router) { }

  logIn(email: string, password: string) {
    console.log(email, password);
    if (email == 'abc@gmail.com' && password == '123456') {

      const user = new User(email);
      this.user.next(user);
      return true
    }
    else {
      return false
    }

  };

  logout() {
    this.user.next(null)
    this.router.navigate(['auth']);
  }



}
