import {environment} from '../environments/environment';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CustomFormsModule} from 'ng2-validation';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {AppComponent} from './app.component';
import {BsNavbarComponent} from './bs-navbar/bs-navbar.component';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';
import { PlanFormComponent } from './home/plan-form/plan-form.component';
import {TaskService} from './task.service';
import {MaterialModule} from './material/material.module';
import {CommonModule} from '@angular/common';
import {FillService} from './fill.service';
import { DayFormComponent } from './home/day-form/day-form.component';


@NgModule({
    declarations: [
        AppComponent,
        BsNavbarComponent,
        HomeComponent,
        DetailsComponent,
        PlanFormComponent,
        DayFormComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        CustomFormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        RouterModule.forRoot([
            {path: '', component: HomeComponent},
            {path: 'details', component: DetailsComponent},
            {path: ':id', component: HomeComponent},
            {path: 'plan-form', component: PlanFormComponent}
        ]),
        BrowserAnimationsModule,
        MaterialModule
    ],
    providers: [
        TaskService,
        FillService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
