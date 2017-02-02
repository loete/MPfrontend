import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home.component";
import {ModuleWithProviders} from "@angular/core";
import {Register} from "./components/register.component";
import {Login} from "./components/login.component";
import {UserMessages} from "./components/usermessages.component";
import {AddMessage} from "./components/add-message.component";
import {MessageDetail} from "./components/message-detail.component";
import {MessageEdit} from "./components/message-edit.component";
import {UserDetails} from "./components/user-detail.component";

const rootRouterConfig: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: Register},
  {path: 'login', component: Login},
  {path: 'my-messages', component: UserMessages},
  {path: 'add-message', component: AddMessage},
  {path: 'message-detail/:id', component: MessageDetail},
  {path: 'message-edit/:id', component: MessageEdit},
  {path: 'user-details', component: UserDetails},

];

export const rootRouting: ModuleWithProviders = RouterModule.forRoot(rootRouterConfig);
