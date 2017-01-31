import {User} from "./user";
import {Comment} from "./comment";

export class Message {
  public messageID: number;
  public messageTitle: string;
  public messageContent: string;
  public user: User;
  public messageDate: Date;
  public likedByUserList: User[];
  public likes: number;
  public commentList: Comment[];
  public messageCreated: Date;
}
