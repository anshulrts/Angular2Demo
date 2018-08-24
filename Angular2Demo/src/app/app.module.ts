import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { SecondEmployeeComponent } from './secondEmployee/secondEmployee.component';
import { EmployeeListComponent } from './employee/employeelist.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, EmployeeComponent, SecondEmployeeComponent, EmployeeListComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
