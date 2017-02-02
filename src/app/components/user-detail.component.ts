import {UserService} from "../services/user.service";
import {Component} from "@angular/core";
import {User} from "../entities/user";
import {Router} from "@angular/router";
import {LoginService} from "../services/login.service";

@Component({
  selector: 'user-details',
  templateUrl: './user-detail.component.html'
})
export class UserDetails {

  private user:User = new User();
  private userDeleted:boolean = false;
  private userEdited:boolean = false;

  constructor(private userService: UserService, private router: Router, private loginService: LoginService) {
    this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
      },
      err => console.log(err)
    );
  }

  edit(user:User){
      this.userService.updateUser(user)
        .subscribe(
          data => {
            this.userEdited = true;
          },
          err => console.log(err)
        );
    }

  delete(user:User){
    this.userService.deleteUser(user)
    .subscribe(data => {this.userDeleted = true})
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
