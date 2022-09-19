import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: { name: string, place: string, Designation: string }[] = []
  
  users = [
    { name: 'John', place: 'Kerala', Designation: 'Engineer' },
    { name: 'Ali', place: 'Kerala', Designation: 'Doctor' },
    { name: 'Jasmine', place: 'Karnataka', Designation: 'Director' },

  ]
  constructor(private http: HttpClient,
    private authService: AuthService) { }


}
