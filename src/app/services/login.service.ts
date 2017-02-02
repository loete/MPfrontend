import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";

@Injectable()
export class LoginService {
  token: string;

  constructor(private http:Http) {}

  sendCred(model) {
    let tokenURL = "http://localhost:8080/user/login";
    let headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(tokenURL, JSON.stringify(model), {headers: headers});
  }

  sendToken(token){
    let tokenURL = "http://localhost:8080/rest/user/users";
    console.log('Bearer '+token);

    let headers = new Headers({'Authorization':'Bearer '+token});
    return this.http.get(tokenURL, {headers: headers});
  }

  logout(){
    localStorage.setItem('token','');
    localStorage.setItem('currentUserName','');
  }

  checkLogin(){
    if(localStorage.getItem('currentUserName')!=null && localStorage.getItem('currentUserName')!='' && localStorage.getItem('token')!=null && localStorage.getItem('token')!='' ){
      return true;
    } else {
      return false;
    }
  }
}
