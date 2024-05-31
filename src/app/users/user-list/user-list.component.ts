import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  users = [
    { id : 1, name: 'Jhon'},
    { id : 2, name: 'Jane'},
    { id : 3, name: 'Doe'}
  ];

  constructor(){}

  ngOnInit(): void {
    
  }
}
