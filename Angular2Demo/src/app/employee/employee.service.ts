import { Injectable } from '@angular/core'
import { Employee } from './employee'


@Injectable()

export class EmployeeService {
    getEmployees(): Employee[] {
        return [
            { code: "Emp100", name: "Anshul", gender: "Male", salary: "2000.45", dateofbirth: "01/30/1993" },
            { code: "Emp101", name: "Vikram", gender: "Male", salary: "2000", dateofbirth: "07/14/2000" },
            { code: "Emp102", name: "Shushila", gender: "Female", salary: "2000", dateofbirth: "09/12/1994" },
            { code: "Emp103", name: "Pooja", gender: "Female", salary: "2000", dateofbirth: "12/13/2009" },
            { code: "Emp104", name: "Kunal", gender: "Male", salary: "2000.2", dateofbirth: "08/17/1998" }
        ];
    }
}