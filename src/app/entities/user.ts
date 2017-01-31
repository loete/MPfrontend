import {Message} from "./message";

export class User {
  public userID: number;
  public firstName: string;
  public lastName: string;
  public userName: string;
  public password: string;
  public created: Date;
  public messageList: Message[];
  public likedMessageList: Message[];
}
