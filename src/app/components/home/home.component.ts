import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private authService: AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isLoggedIn = !!user;

    })
  }

  public isExpanded = false;
  private userSub!: Subscription;
  isLoggedIn = false;


  public toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }

  onLogout() {
    this.authService.logout()
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }


}
