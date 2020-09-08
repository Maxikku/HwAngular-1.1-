import { Component } from '@angular/core';
import { UserService } from './services/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {




  title = 'hw1';
  users = [];


  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(jsonUsers => {
      console.log(jsonUsers);
      this.users = jsonUsers;
    })
  }


}
