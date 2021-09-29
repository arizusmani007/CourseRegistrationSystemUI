import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './component/student/student.component';
import { AdminComponent } from './component/admin/admin.component';
import { ProfessorComponent } from './component/professor/professor.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    AdminComponent,
    ProfessorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
