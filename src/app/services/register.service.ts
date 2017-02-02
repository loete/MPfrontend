import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {User} from "../entities/user";

@Injectable()
export class RegisterService {

  constructor(private http:Http) {}

  sendUser(user:User) {
    let url = "https://localhost:8080/user/register";
    let headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(url, JSON.stringify(user), {headers: headers});
  }
}
