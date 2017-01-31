import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home.component";
import {ModuleWithProviders} from "@angular/core";
import {Register} from "./components/register.component";
import {Login} from "./components/login.component";
import {UserMessages} from "./components/usermessages.component";
import {AddMessage} from "./components/add-message.component";
import {MessageDetail} from "./components/message-detail.component";

const rootRouterConfig: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: Register},
  {path: 'login', component: Login},
  {path: 'my-messages', component: UserMessages},
  {path: 'add-message', component: AddMessage},
  {path: 'message-detail/:id', component: MessageDetail}
];

export const rootRouting: ModuleWithProviders = RouterModule.forRoot(rootRouterConfig);
