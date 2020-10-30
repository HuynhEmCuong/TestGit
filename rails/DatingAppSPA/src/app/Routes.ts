import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { MemberListComponent } from './member/member-list/member-list.component';
import { MessageComponent } from './message/message.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './member/member-detail/member-detail.component';
import { MemberEditComponent } from './member/member-edit/member-edit.component';
import { PreventUnsavedChange } from './_guards/prevent-unsave-changes.guard';






export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'members', component: MemberListComponent, canActivate: [AuthGuard] },
    { path: 'members/detail/:id', component: MemberDetailComponent, canActivate: [AuthGuard] },
    { path: 'members/edit/:id', component: MemberEditComponent, canDeactivate: [PreventUnsavedChange] },
    { path: 'message', component: MessageComponent },
    { path: 'lists', component: ListsComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
