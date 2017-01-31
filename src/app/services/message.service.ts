import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {User} from "../entities/user";
import {Message} from "../entities/message";

@Injectable()
export class MessageService {
  constructor(private http:Http){
  }

  getMessages(){
    let url = "http://localhost:8080/message/allMessages";
    return this.http.get(url);
  }

  getMessagesById (messageId: number) {
    let tokenUrl = "http://localhost:8080/rest/message/messageId";
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.http.post(tokenUrl, JSON.stringify(messageId), {headers: headers});
  }

  getMessagesByUser (user: User) {
    let tokenUrl = "http://localhost:8080/rest/message/user";
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.http.post(tokenUrl, JSON.stringify(user), {headers: headers});
  }

  updateMessage(message: Message) {
    let tokenUrl = "http://localhost:8080/rest/message/update";
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.http.post(tokenUrl, JSON.stringify(message), {headers: headers});
  }
}
