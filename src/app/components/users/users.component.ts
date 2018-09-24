import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  showExtended: boolean;
  loaded: boolean;
  enableUser: boolean;
  showUserForm: boolean;
  
  personName: string;
 /* currentClasses = {};
  currentStyles = {};*/
  
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
    
   // this.setCurrentClasses();
   // this.setCurrentStyles();
    
   // setTimeout(() =>  {
      this.users = [
      {
        firstName: 'Ergash',
        lastName: 'Karimov',
        age: 65,
        address: {
          street: '123 Main st',
          city: 'Las Vegas',
          state: 'Nevada'
        },
        isActive: true,
        registered: new Date('01/02/2018 8:30:00:00'),
        hide: true
      },
      {
        firstName: 'Erkin',
        lastName: 'Komilov',
        age: 70,
        address: {
          street: '123 Second st',
          city: 'Boston',
          state: 'MA'
        },
        isActive: false,
        registered: new Date('06/21/2017 12:00:00:00'),
        hide: true
      },
      {
        firstName: 'Hojiakbar',
        lastName: 'Nurmatov',
        age: 89,
        address: {
          street: '900 Ave p',
          city: 'Brooklyn',
          state: 'NY'
        },
        isActive: true,
        registered: new Date('08/02/2015 09:13:00:00'),
        hide: true
      }
    ];
      
      this.loaded = true;
      
      /*this.addUser({
        firstName: 'Ergash12',
        lastName: 'Karimov12'
    })*/
      
   // }, 2000);
    
    /*setCurrentClasses(){
    this.currentClasses = {
      'btn-success' : this.enableUser,
      'big-text' : this.showExtended
    }
  }
  
  setCurrentStyles(){
    this.currentStyles = {
      'padding-top' : this.showExtended ? '0' : '40px',
      'font-size' : this.showExtended ? '24px' : '42px'
    }
  }*/
    
  }
  
  

}
