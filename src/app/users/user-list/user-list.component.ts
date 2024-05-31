import { Component, OnInit } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  users: User[] = [
    { id: 1, name: 'Alice', lastname: 'Smith', email: 'alice.smith@example.com', phonenumber: 123456789, usertype: 'admin', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Bob', lastname: 'Johnson', email: 'bob.johnson@example.com', phonenumber: 987654321, usertype: 'user', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Charlie', lastname: 'Williams', email: 'charlie.williams@example.com', phonenumber: 456789123, usertype: 'moderator', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Diana', lastname: 'Brown', email: 'diana.brown@example.com', phonenumber: 654321987, usertype: 'user', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Edward', lastname: 'Jones', email: 'edward.jones@example.com', phonenumber: 789123456, usertype: 'admin', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Emma', lastname: 'Davis', email: 'emma.davis@example.com', phonenumber: 234567890, usertype: 'user', image: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Frank', lastname: 'Miller', email: 'frank.miller@example.com', phonenumber: 345678901, usertype: 'admin', image: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Grace', lastname: 'Wilson', email: 'grace.wilson@example.com', phonenumber: 456789012, usertype: 'moderator', image: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Henry', lastname: 'Taylor', email: 'henry.taylor@example.com', phonenumber: 567890123, usertype: 'user', image: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Isabella', lastname: 'Anderson', email: 'isabella.anderson@example.com', phonenumber: 678901234, usertype: 'admin', image: 'https://via.placeholder.com/150' }
  ];
  
  constructor(){}
  
  selectedUser : User | undefined = undefined;

  selectUser(id: number){
    console.log("ESTE ES EL ID DE DEL USUARIO"+id);
    this.selectedUser = this.users.find(user => user.id === id);
    console.log(this.selectedUser)
  }

  ngOnInit(): void {
    
  }
}
