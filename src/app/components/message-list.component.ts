import {Component} from "@angular/core";
import {Message} from "../entities/message";
import {MessageService} from "../services/message.service";
import {Router} from "@angular/router";

@Component({
  selector: 'message-list',
  templateUrl: './message-list.component.html'
})
export class MessageList {
  messages: Message[];
  selectedMessage: Message;

  constructor(private messageService: MessageService, private router:Router) {
    this.messageService.getMessages()
      .subscribe(
        m => console.log(this.messages = JSON.parse(JSON.parse(JSON.stringify(m))._body)),
        err => console.log(err)
      );
  }

  onSelect(message:Message) {
    this.selectedMessage = message;
    this.router.navigate(['/message-detail', this.selectedMessage.messageID]);
  }
}
