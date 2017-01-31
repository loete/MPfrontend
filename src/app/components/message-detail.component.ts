import {Component} from "@angular/core";
import {Message} from "../entities/message";
import {User} from "../entities/user";
import {MessageService} from "../services/message.service";
import {UserService} from "../services/user.service";
import {Params, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'message-detail',
  templateUrl: './message-detail.component.html'
})
export class MessageDetail{
  message: Message = new Message();
  like: string;
  user: User;
  messageId: number;

  constructor(private messageService:MessageService, private userService:UserService, private route:ActivatedRoute){
      this.route.params.forEach((params:Params) => {this.messageId = Number.parseInt(params['id']);
    });

    this.messageService.getMessagesById(this.messageId)
      .subscribe(
        message => {
        this.message = JSON.parse(JSON.parse(JSON.stringify(message))._body);
        this.userService.getUserByName(localStorage.getItem("currentUserName"))
          .subscribe(
            user => {
              this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
              if(this.user.likedMessageList.filter(message => message.messageID == this.message.messageID)[0]){
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

  ngOnInit(){
  }

  likeDisplay() {
    if(this.like == "Like"){
      this.like="Unlike";
      this.user.likedMessageList.push(this.message);
      this.message.likes+=1;
      this.userService.updateUser(this.user).subscribe();
      this.messageService.updateMessage(this.message).subscribe();
    } else {
      this.like = "Like";
      for(let i=0; i<this.user.likedMessageList.length; i++){
        if(this.user.likedMessageList[i].messageID == this.message.messageID){
          this.user.likedMessageList.splice(i,1);
        }
      }
      this.message.likes-=1;
      this.userService.updateUser(this.user).subscribe();
      this.messageService.updateMessage(this.message).subscribe();
    }
  }
}
