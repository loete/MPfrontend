import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";

@Injectable()
export class CommentService{
  constructor(private http:Http){}

  addComment(comment:Comment){
    let tokenUrl = "http://localhost:8080/rest/comment/add";
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem('token')});
    return this.http.post(tokenUrl, JSON.stringify(comment), {headers: headers});
  }
}
