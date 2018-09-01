import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { SecondEmployeeComponent } from './secondEmployee/secondEmployee.component';
import { EmployeeListComponent } from './employee/employeelist.component';
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe';
import { EmployeeCountComponent } from './employee/employeeCount.component'

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, EmployeeComponent, SecondEmployeeComponent, EmployeeListComponent,
        EmployeeTitlePipe, EmployeeCountComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
