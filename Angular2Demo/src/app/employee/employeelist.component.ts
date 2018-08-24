import { Component } from '@angular/core'

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeelist.component.html',
    styleUrls: ['app/employee/employeelist.component.css']
})

export class EmployeeListComponent {
    employees: any[] = [
        { code: "E100", name: "Anshul", gender: "Male", salary: "2000.45", dateofbirth: "01/30/1993" },
        { code: "E101", name: "Vikram", gender: "Male", salary: "2000", dateofbirth: "07/14/2000" },
        { code: "E102", name: "Shushil", gender: "Male", salary: "2000", dateofbirth: "09/12/1994" },
        { code: "E103", name: "Pooja", gender: "Female", salary: "2000", dateofbirth: "12/13/2009" },
        { code: "E104", name: "Kunal", gender: "Male", salary: "2000.2", dateofbirth: "08/17/1998" }
    ];
}