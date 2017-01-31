import {Component} from "@angular/core";
import {User} from "../entities/user";
import {RegisterService} from "../services/register.service";

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})
export class Register{
  newUser: User = new User();
  registered: boolean = false;

  constructor(private registerService: RegisterService) {}

  onSubmit(){
    console.log("RESGISTER SUBMIT!");
    this.registerService.sendUser(this.newUser)
      .subscribe(
        u => {
          this.registered = true;
          this.newUser = new User();
        },
        err => console.log(err)
      );
  }
}
