import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userRole: string = "ANONYMOUS";
  constructor() { }

  getUserRole():string {
    return this.userRole
  }

  setUserRole(choice:number):void {
    if (choice === 1){
      this.userRole = "ADMIN"
    } else if (choice === 2) {
      this.userRole = "USER"
    } else {
      this.userRole = "ANONYMOUS"
    }
  }
}
