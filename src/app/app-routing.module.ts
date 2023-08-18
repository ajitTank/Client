import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { authGuardGuard } from './_AuthGuards/auth-guard.guard';

const routes: Routes = [
  {path:'',  component:HomeComponent},
  {path:'',
   runGuardsAndResolvers:'always',
   canActivate:[authGuardGuard],
   children:[
    {path:'member',component:MemberListComponent},
    {path:'memners/:id',component:MemberDetailsComponent},
    {path:'lists',component:ListsComponent},
    {path:'message',component:MessagesComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
