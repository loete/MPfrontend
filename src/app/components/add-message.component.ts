import {Component} from "@angular/core";
import {Message} from "../entities/message";
import {User} from "../entities/user";
import {UserService} from "../services/user.service";
import {AddMessageService} from "../services/add-message.service";

@Component({
  selector: 'add-message',
  //providers: [AddMessageService],
  templateUrl: './add-message.component.html'
})
export class AddMessage {
  newMessage: Message = new Message();
  messageAdded: boolean = false;
  user: User;

  constructor(private addMessageService: AddMessageService, private userService:UserService){}

  onSubmit(){
    this.userService.getUserByName(localStorage.getItem("currentUserName"))
      .subscribe(
        user => {
          this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
          console.log(this.user);
          this.newMessage.user = this.user;
          this.addMessageService.sendMessage(this.newMessage)
            .subscribe(
              data => {
                this.messageAdded = true;
                this.newMessage = new Message();
              },
              err => console.log(err)
            );
        },
        err => console.log(err)
      )
  }
}
