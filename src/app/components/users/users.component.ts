import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User;
  users: User[];
  showExtended: boolean;
  loaded: boolean;
  enableUser: boolean;
  showUserForm: boolean;
  
  personName: string;
 /* currentClasses = {};
  currentStyles = {};*/
  
  onSubmit(){
    console.log('SUBMITTED');
    console.log(this.user)
  }
  
  
  addUser(user: User){
    console.log(this.users);
    this.users.push(user);
    console.log(this.users)
  };
  
  fireEvent(e){
    console.log(this.personName);
  };
  
  toggleUser(user: User) {
    user.hide = !user.hide;
  };
  
  
  
  constructor() { }
  
  ngOnInit() {
    
    this.showExtended = true;
    this.enableUser = true;
    this.loaded = false;
    this.showUserForm = true;
    this.personName = 'James Smith';
    
    this.user = {
      firstName : '',
      lastName : '',
      email: ''
    }
    
   // this.setCurrentClasses();
   // this.setCurrentStyles();
    
   // setTimeout(() =>  {
      this.users = [
      {
        firstName: 'Ergash',
        lastName: 'Karimov',
        email: 'ergash95@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 8:30:00:00'),
        hide: true
      },
      {
        firstName: 'Erkin',
        lastName: 'Komilov',
        email: 'erkin45@gmail.com',
        isActive: false,
        registered: new Date('06/21/2017 12:00:00:00'),
        hide: true
      },
      {
        firstName: 'Hojiakbar',
        lastName: 'Nurmatov',
        email: 'hoji1007@gmail.com',
        isActive: true,
        registered: new Date('08/02/2015 09:13:00:00'),
        hide: true
      }
    ];
      
      this.loaded = true;
  }
  
  

}
