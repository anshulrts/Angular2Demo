import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { SecondEmployeeComponent } from './secondEmployee/secondEmployee.component';
import { EmployeeListComponent } from './employee/employeelist.component';
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe';
import { EmployeeCountComponent } from './employee/employeeCount.component'
import { HomeComponent } from './home/home.component'
import { PageNotFoundComponent } from './Others/pageNotFound.component'
import { EmployeeCodeComponent } from './employee/employeeCode.component'

import { EmployeeService } from './employee/employee.service'

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'employee/:code', component: EmployeeCodeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
]

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, EmployeeComponent, SecondEmployeeComponent, EmployeeListComponent,
        EmployeeTitlePipe, EmployeeCountComponent, HomeComponent, PageNotFoundComponent, EmployeeCodeComponent],
    bootstrap: [AppComponent],
    providers: [EmployeeService]
})
export class AppModule { }
