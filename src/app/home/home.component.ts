import { Component, inject } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  service = inject(UserService);
  userRole:string = "UNDEFINED";

  setUser(choice: number){
    this.service.setUserRole(choice);
    this.userRole = this.service.getUserRole();
  }

}
