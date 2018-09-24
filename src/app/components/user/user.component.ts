import { Component } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
  
  user : User;
  
  constructor() { 
     
    this.user = {
      firstName: 'Ergash',
      lastName: 'Karimov',
      age: 65,
      address: {
        street: '123 Main st',
        city: 'Las Vegas',
        state: 'Nevada'
      }
    }
  }
}