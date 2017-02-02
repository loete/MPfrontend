import {Component} from "@angular/core";
import {Message} from "../entities/message";
import {User} from "../entities/user";
import {MessageService} from "../services/message.service";
import {UserService} from "../services/user.service";
import {Params, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'message-edit',
  templateUrl: './message-edit.component.html'
})
export class MessageEdit{
  editedMessage: Message = new Message();
  like: string;
  user: User;
  messageId: number;
  messageEdited: boolean = false;

  constructor(private messageService:MessageService, private userService:UserService, private route:ActivatedRoute){
    this.route.params.forEach((params:Params) => {this.messageId = Number.parseInt(params['id']);
    });

    this.messageService.getMessagesById(this.messageId)
      .subscribe(
        message => {
          this.editedMessage = JSON.parse(JSON.parse(JSON.stringify(message))._body);
          this.userService.getUserByName(localStorage.getItem("currentUserName"))
            .subscribe(
              user => {
                this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
                if(this.user.likedMessageList.filter(message => message.messageID == this.editedMessage.messageID)[0]){
                  this.like="Unlike"
                } else {
                  this.like="Like"
                }
              },
              err => console.log(err)
            )
        },
        err => console.log(err)
      );
  }

  goBack(){
    window.history.back();
  }

  onSubmit(){
    this.userService.getUserByName(localStorage.getItem("currentUserName"))
      .subscribe(
        user => {
          this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
          console.log(this.user);
          this.editedMessage.user = this.user;
          this.messageService.editMessage(this.editedMessage)
            .subscribe(
              data => {
                this.messageEdited = true;
                this.editedMessage = new Message();
              },
              err => console.log(err)
            );
        },
        err => console.log(err)
      )
  }

}
