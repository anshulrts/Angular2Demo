import { Component } from '@angular/core'

@Component({
    selector: 'list-employee',
    templateUrl: '/app/employee/employeelist.component.html',
    styleUrls: ['/app/employee/employeelist.component.css']
})

export class EmployeeListComponent {
    employees: any[] = [
        { code: "E100", name: "Anshul", gender: "Male", salary: 2000, dateofbirth: "Jan 30, 1993" },
        { code: "E101", name: "Vikram", gender: "Male", salary: 2000, dateofbirth: "Jan 30, 1993" },
        { code: "E102", name: "Shushil", gender: "Male", salary: 2000, dateofbirth: "Jan 30, 1993" },
        { code: "E103", name: "Pooja", gender: "Female", salary: 2000, dateofbirth: "Jan 30, 1993" },
        { code: "E104", name: "Kunal", gender: "Male", salary: 2000, dateofbirth: "Jan 30, 1993" }
    ];
}