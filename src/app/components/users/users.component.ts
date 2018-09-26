import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../../models/user.model';
import { DataService } from '../../services/data.service'


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
  
  @ViewChild('userForm') form: any;
  
  
  personName: string;
 /* currentClasses = {};
  currentStyles = {};*/
  
  
  /* DRY - dont repeat yourself */
  
  onSubmit({ value, valid } : { value: User, valid: boolean }){
   // console.log('SUBMITTED');
   // console.log(this.user)
    if (!valid) {
        console.log("Form is NOT VALID")
    } else {
      value.registered = new Date();
      value.hide = true;
      console.log(value);
      this.dataService.addUser(value);
      
      this.form.reset();
    }
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
  
  
  
  constructor(private dataService: DataService) { }
  
  ngOnInit() {
    
    this.showExtended = true;
    this.enableUser = true;
    this.loaded = false;
    this.showUserForm = true;
    this.personName = 'James Smith';
    
    this.user = {
      firstName : '',
      lastName : '',
      email: '',
      isActive: null
    };
    
    this.users = this.dataService.getUsers();
    
   // this.setCurrentClasses();
   // this.setCurrentStyles();
    
   // setTimeout(() =>  {
     
      
      this.loaded = true;
  }
  
  

}
