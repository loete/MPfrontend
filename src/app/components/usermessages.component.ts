import {Component} from "@angular/core";
import {Message} from "../entities/message";
import {MessageService} from "../services/message.service";
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";

@Component({
  selector: 'user-messages',
  templateUrl: './usermessages.component.html'
})
export class UserMessages {

  private messages: Message;
  private user;
  private selectedMessage: Message;
  private messageDeleted: boolean = false;
  private deletingMassage: Message;

  constructor(private messageService: MessageService, private router: Router, private userService: UserService) {
    this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        console.log(this.user);
        this.messageService.getMessagesByUser(this.user)
          .subscribe(
            messages => {console.log(this.messages = JSON.parse(JSON.parse(JSON.stringify(user))._body).messageList)
          },
          err => console.log(err)
        );
      },
      err => console.log(err)
    );
  }

  onSelect(message:Message){
    this.selectedMessage = message;
    this.router.navigate(['/message-detail',this.selectedMessage.messageID]);
  }

  public delete(message:Message) {
          this.deletingMassage = message;
          this.messageService.deleteMessage(message)
            .subscribe(
              data => {
                this.messageDeleted = true;
                this.deletingMassage = new Message();
              },
              err => console.log(err)
            );
        err => console.log(err)

  }


}
