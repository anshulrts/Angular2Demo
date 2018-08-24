import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { SecondEmployeeComponent } from './secondEmployee/secondEmployee.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, EmployeeComponent, SecondEmployeeComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
