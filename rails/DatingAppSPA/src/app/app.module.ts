import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BsDropdownModule, TabsModule, BsDatepickerModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';



// import { from } from 'rxjs';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ResgiterComponent } from './resgiter/resgiter.component';
import { AuthService } from './_services/auth.service';
import { ErrorInterceptor } from './_services/Error.insterceptor';
import { AlertifyService } from './_services/alertify.service';
import { ListsComponent } from './lists/lists.component';
import { MemberListComponent } from './member/member-list/member-list.component';
import { MessageComponent } from './message/message.component';
import { appRoutes } from './Routes';
import { AuthGuard } from './_guards/auth.guard';
import { UserService } from './_services/user.service';
import { MemberCardComponent } from './member/member-card/member-card.component';
import { MemberDetailComponent } from './member/member-detail/member-detail.component';
import { MemberDetaiResolver } from './_resolvers/member-detail.resolver';
import { NgxGalleryModule } from 'ngx-gallery';
import { MemberEditComponent } from './member/member-edit/member-edit.component';
import { PreventUnsavedChange } from './_guards/prevent-unsave-changes.guard';
import { TimeAgoPipe } from 'time-ago-pipe';


@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      ResgiterComponent,
      ListsComponent,
      MemberListComponent,
      MessageComponent,
      MemberCardComponent,
      MemberDetailComponent,
      MemberEditComponent,
      TimeAgoPipe
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      TabsModule.forRoot(),
      BsDropdownModule.forRoot(),
      BsDatepickerModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      NgxGalleryModule,
      ReactiveFormsModule
   ],
   providers: [
      AuthService,
      ErrorInterceptor,
      AlertifyService,
      AuthGuard,
      UserService,
      MemberDetaiResolver,
      PreventUnsavedChange
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
