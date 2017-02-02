//imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {rootRouting} from "./app.router";
// components
import { AppComponent } from './app.component';
import {HomeComponent} from "./components/home.component";
import {MessageList} from "./components/message-list.component";
import {SidePanel} from "./components/side-panel.component";
import {NavBar} from "./components/nav-bar.component";
import {Register} from "./components/register.component";
import {Login} from "./components/login.component";
import {UserMessages} from "./components/usermessages.component";
import {AddMessage} from "./components/add-message.component";
import {MessageComments} from "./components/message-comments.component";
import {MessageDetail} from "./components/message-detail.component";

//services
import {MessageService} from "./services/message.service";
import {RegisterService} from "./services/register.service";
import {LoginService} from "./services/login.service";
import {UserService} from "./services/user.service";
import {AddMessageService} from "./services/add-message.service";
import {CommentService} from "./services/comment.service";
import {LikesPipe} from "./shared/pipes/likes.pipe";
import {PasswordValidator} from "./shared/validators/password.validator";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessageList,
    SidePanel,
    NavBar,
    Register,
    Login,
    UserMessages,
    AddMessage,
    MessageComments,
    MessageDetail,
    LikesPipe,
    PasswordValidator,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    rootRouting
  ],
  providers: [
    MessageService,
    RegisterService,
    LoginService,
    UserService,
    AddMessageService,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
