import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users:{name:string,place:string,Designation:string}[]=[]
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.users   =  this.userService.users;
  }

}
