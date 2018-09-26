import { Injectable } from '@angular/core';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users: User[];
  
  constructor() { 
  
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
  }
  
  getUsers(): User[] {
    return this.users;
  }
  
  addUser(user: User){
    this.users.push(user);
  }
  
}
