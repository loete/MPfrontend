import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Message} from "../entities/message";

@Injectable()
export class DeleteMessageService{
  constructor(private http:Http) {}

  sendMessage(message:Message){
    let url = "http://localhost:8080/rest/message/delete";
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+localStorage.getItem('token')});
    console.log(url);
    return this.http.post(url, JSON.stringify(message),{headers: headers});
  }
}
