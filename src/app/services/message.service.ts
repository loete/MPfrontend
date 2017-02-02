import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {User} from "../entities/user";
import {Message} from "../entities/message";

@Injectable()
export class MessageService {
  constructor(private http:Http){
  }

  getMessages(){
    let url = "https://localhost:8080/message/allMessages";
    return this.http.get(url);
  }

  getMessagesById (messageId: number) {
    let tokenUrl = "https://localhost:8080/rest/message/messageId";
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.http.post(tokenUrl, JSON.stringify(messageId), {headers: headers});
  }

  getMessagesByUser (user: User) {
    let tokenUrl = "https://localhost:8080/rest/message/user";
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.http.post(tokenUrl, JSON.stringify(user), {headers: headers});
  }

  updateMessage(message: Message) {
    let tokenUrl = "https://localhost:8080/rest/message/update";
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.http.post(tokenUrl, JSON.stringify(message), {headers: headers});
  }

  editMessage(message:Message){
    let url = "https://localhost:8080/rest/message/edit";
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+localStorage.getItem('token')});
    console.log(url);
    return this.http.post(url, JSON.stringify(message),{headers: headers});
  }

  deleteMessage(message:Message) {
    console.log(message);
    let tokenUrl = "https://localhost:8080/rest/message/delete";
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.http.post(tokenUrl, JSON.stringify(message),{headers: headers});
  }
}
