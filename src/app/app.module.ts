import {environment} from '../environments/environment';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { CustomFormsModule} from 'ng2-validation';

import {AppComponent} from './app.component';
import {BsNavbarComponent} from './bs-navbar/bs-navbar.component';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';
import { PlanFormComponent } from './home/plan-form/plan-form.component';
import {TaskService} from './task.service';


@NgModule({
    declarations: [
        AppComponent,
        BsNavbarComponent,
        HomeComponent,
        DetailsComponent,
        PlanFormComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CustomFormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        RouterModule.forRoot([
            {path: '', component: HomeComponent},
            {path: 'details', component: DetailsComponent},
            {path: 'plan-form', component: PlanFormComponent}
        ])
    ],
    providers: [
        TaskService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
