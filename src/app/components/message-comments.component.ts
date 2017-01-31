import {Component, Input} from "@angular/core";
import {Message} from "../entities/message";
import {User} from "../entities/user";
import {UserService} from "../services/user.service";
import {MessageService} from "../services/message.service";
import {CommentService} from "../services/comment.service";
import {Comment} from "../entities/comment";

@Component({
  selector: 'message-comments',
  templateUrl: './message-comments.component.html'
})
export class MessageComments{
  @Input('message') message: Message;
  myLocalStorage = localStorage;
  user: User = new User();
  newComment = new Comment ();

  constructor(private userService:UserService, private commentService:CommentService, private messageService:MessageService){
    console.log(this.message);
    this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
      },
      err => console.log(err)
    )
  }

  onInit(){}

  /** onSubmit(){
    console.log(this.message);
    console.log(this.message.commentList);
    this.newComment.message = this.message;
    this.newComment.userName = this.user.userName;
    this.newComment.messageID = this.message.messageID;
    this.commentService.addComment(this.newComment)
      .subscribe(
        message => this.messageService.getMessagesById(this.message.messageID)
          .subscribe(
            message => this.message = JSON.parse(JSON.parse(JSON.stringify(message))._body),
            err => console.log(err)
          )
      );
    this.newComment = new Comment();
  } **/
}
