import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ProjectReviewComponent } from './project-review/project-review.component';
import { AdminEventsComponent } from './admin-events/admin-events.component';
import { HomeComponent } from './home/home.component';
import {AdminRoutingModule} from './admin-routing.module';
import {AuthGuard} from '../auth.guard';
import {AuthService} from '../auth.service';

@NgModule({
  declarations: [
    LoginComponent,
    ProjectReviewComponent,
    AdminEventsComponent,
    HomeComponent
  ],
  exports: [
    LoginComponent,
    ProjectReviewComponent,
    AdminEventsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: [AuthGuard, AuthService]
})
export class AdminModule { }
