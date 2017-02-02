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
  private deletingMessage: Message;
  private editedMessage:Message
  private trueDelete: Message;
  private delCompleted: boolean = false;

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

  onEdit(message:Message){
    this.selectedMessage = message;
    this.router.navigate(['/message-edit',this.selectedMessage.messageID]);
  }

  resetUser(message:Message){
    this.userService.getUserByName(localStorage.getItem("currentUserName"))
      .subscribe(
        user => {
          this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
          this.editedMessage = message;
          this.editedMessage.user = this.user;
          this.messageService.editMessage(this.editedMessage)
            .subscribe(
              data => {
                this.editedMessage = new Message();
              },
              err => console.log(err)
            );
        },
        err => console.log(err)
      )
    this.router.navigate(['/home']);
  }

  onDelete(message: Message) {
          this.deletingMessage = message;
          this.messageService.deleteMessage(this.deletingMessage)
            .subscribe(
              data => {
                this.messageDeleted = true;
                this.trueDelete = this.deletingMessage;
              },
              err => console.log(err)
            );
  }

  deleteComplete(message: Message) {
    this.deletingMessage = message;
    this.messageService.deleteMessage(this.deletingMessage)
      .subscribe(
        data => {
          this.delCompleted=true
        },
        err => console.log(err)
      );
  }

}
